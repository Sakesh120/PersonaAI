import type { Chunk } from "./retrieval.service.js";
export const buildContext = (chunks: Chunk[]) => chunks.map((c,i) => `[Source ${i+1}] ${c.text}`).join("\n\n");
