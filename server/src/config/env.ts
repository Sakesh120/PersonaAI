import "dotenv/config";
import path from "node:path";
export const env = {
  port: Number(process.env.PORT || 3001),
  aiServiceUrl: process.env.AI_SERVICE_URL || "http://127.0.0.1:8000",
  ollamaUrl: process.env.OLLAMA_BASE_URL || "http://127.0.0.1:11434",
  model: process.env.OLLAMA_MODEL || "qwen2.5:7b",
  dataDir: path.resolve(process.env.DATA_DIR || "./data")
};
