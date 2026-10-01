import express from "express";
import { AIServiceClient } from "../services/ai-service.client.js";
import { env } from "../config/env.js";

export const router = express.Router();
const aiClient = new AIServiceClient(env.aiServiceUrl);

router.post("/stream", async (req, res, next) => {
  try {
    const { message, conversationId = "default" } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "message is required" });
    }

    const upstream = await aiClient.chatStream({ message, conversationId });
    if (!upstream.ok || !upstream.body) {
      const errorText = await upstream.text();
      return res.status(upstream.status || 502).type("text/plain").send(errorText || "AI stream unavailable");
    }

    res.status(200);
    res.setHeader("Content-Type", upstream.headers.get("content-type") || "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("X-Accel-Buffering", "no");
    res.flushHeaders();

    const reader = upstream.body.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (!res.write(value)) {
          await new Promise<void>((resolve) => res.once("drain", resolve));
        }
      }
      res.end();
    } finally {
      reader.releaseLock();
    }
  } catch (error) {
    if (res.headersSent) {
      res.destroy(error instanceof Error ? error : undefined);
      return;
    }
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { message, conversationId = "default" } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "message is required" });
    }
    console.log(message); // for testing

    const response = await aiClient.chat({ message, conversationId });
    res.json(response);
  } catch (error) {
    next(error);
  }

});


