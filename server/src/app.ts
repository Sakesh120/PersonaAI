import express from "express";
import cors from "cors";
import multer from "multer";
import { env } from "./config/env.js";
import { AIServiceClient } from "./services/ai-service.client.js";

export const app = express();
app.use(cors());
app.use(express.json());

const aiClient = new AIServiceClient(env.aiServiceUrl);
const documents = new Map<string, { id: string; name: string; createdAt: string }>();

app.get("/api/health", async (_req, res) => {
  try {
    const health = await aiClient.healthCheck();
    res.json({
      ok: health.ok ?? true,
      status: health.status ?? "healthy",
      service: health.service ?? "ai-service",
      ollama: health.ollama ?? { available: false },
      model: health.model ?? env.model
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "AI service unavailable";
    res.status(503).json({ ok: false, error: "AI service unavailable", details: message });
  }
});

app.post("/api/chat", async (req, res, next) => {
  try {
    const { message, conversationId = "default" } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "message is required" });
    }

    const response = await aiClient.chat({ message, conversationId });
    res.json(response);
  } catch (error) {
    next(error);
  }
});

app.post(
  "/api/documents/upload",
  multer({ storage: multer.memoryStorage() }).single("file"),
  async (req, res, next) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "file is required" });
      }

      const result = await aiClient.uploadDocument({
        name: req.file.originalname,
        buffer: req.file.buffer
      });

      documents.set(result.id, result);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
);

app.get("/api/documents", async (_req, res, next) => {
  try {
    const items = await aiClient.listDocuments();
    items.forEach((item) => documents.set(item.id, item));
    res.json(items);
  } catch (error) {
    next(error);
  }
});

app.get("/api/documents/:id", async (req, res, next) => {
  try {
    const item = (await aiClient.listDocuments()).find((document) => document.id === req.params.id);
    if (!item) {
      return res.status(404).json({ error: "document not found" });
    }
    res.json(item);
  } catch (error) {
    next(error);
  }
});

app.delete("/api/documents/:id", async (req, res, next) => {
  try {
    const items = await aiClient.listDocuments();
    const match = items.find((document) => document.id === req.params.id);
    if (!match) {
      return res.status(404).json({ error: "document not found" });
    }
    documents.delete(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

app.post("/api/documents/search", async (req, res, next) => {
  try {
    const { query = "", limit = 5 } = req.body || {};
    const results = await aiClient.searchDocuments(String(query), Number(limit));
    res.json(results);
  } catch (error) {
    next(error);
  }
});

app.get("/api/conversations/:id", async (req, res, next) => {
  try {
    const memory = await aiClient.getConversation(req.params.id);
    res.json(memory);
  } catch (error) {
    next(error);
  }
});

app.post("/api/memory/search", async (req, res, next) => {
  try {
    const { conversationId = "default" } = req.body || {};
    const memory = await aiClient.searchMemory(String(conversationId));
    res.json(memory);
  } catch (error) {
    next(error);
  }
});

app.post("/api/tools/execute", async (req, res, next) => {
  try {
    const { name, input = {} } = req.body || {};
    if (!name) {
      return res.status(400).json({ error: "tool name is required" });
    }

    const result = await aiClient.executeTool(String(name), input || {});
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  res.status(500).json({
    error: err.message || "Internal error",
    hint: "Ensure the Python AI service is running with `npm run ai` or the `AI_SERVICE_URL` is correct."
  });
});
