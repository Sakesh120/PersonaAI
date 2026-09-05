import { env } from "./env.js";
export const modelConfig = { chatModel: env.model, embeddingModel: process.env.EMBEDDING_MODEL || "placeholder" };
