import express from "express";
import { AIServiceClient } from "../services/ai-service.client.js";
import { env } from "../config/env.js";

export const router = express.Router();
const aiClient = new AIServiceClient(env.aiServiceUrl);

// Standard Chat Endpoint (from the 2nd code)
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

// Streaming Chat Endpoint (from the 1st code)
router.post("/stream", async (req, res, next) => {
  const abortController = new AbortController();
  res.on("close", () => {
    if (!res.writableEnded) abortController.abort();
  });

  try {
    const { message, conversationId = "default" } = req.body || {};

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "message is required" });
    }
    console.log(message); // for testing

    const upstream = await aiClient.streamChat(
      { message, conversationId },
      abortController.signal
    );

    if (!upstream.ok) {
      const errorText = await upstream.text();
      return res
        .status(upstream.status)
        .send(errorText || upstream.statusText);
    }

    if (!upstream.body) {
      return res.status(502).json({ error: "AI service returned no stream" });
    }

    console.log(`AI service stream status: ${upstream.status}`);
    res.setHeader(
      "Content-Type",
      upstream.headers.get("content-type") || "text/plain; charset=utf-8"
    );
    res.setHeader("Cache-Control", "no-cache, no-transform");
    res.setHeader("Connection", "keep-alive");
    res.setHeader("X-Accel-Buffering", "no");
    res.flushHeaders();

    const reader = upstream.body.getReader();

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done || res.destroyed) break;
        if (!res.write(Buffer.from(value))) {
          await new Promise<void>((resolve) => res.once("drain", resolve));
        }
      }
    } finally {
      reader.releaseLock();
    }

    res.end();
  } catch (error) {
    if (abortController.signal.aborted) {
      if (!res.writableEnded) res.end();
      return;
    }
    if (res.headersSent) {
      res.destroy(error instanceof Error ? error : undefined);
      return;
    }
    next(error);
  }
});