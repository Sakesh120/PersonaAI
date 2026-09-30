import express from "express";
import { AIServiceClient } from "../services/ai-service.client.js";
import { env } from "../config/env.js";

export const router = express.Router();
const aiClient = new AIServiceClient(env.aiServiceUrl);

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


