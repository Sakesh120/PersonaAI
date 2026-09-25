import crypto from "node:crypto";
import type { Chunk } from "./retrieval.service.js";
export class IngestionService {
  ingest(documentId: string, text: string): Chunk[] {
    const clean = text.replace(/\s+/g, " ").trim(), size = 900, overlap = 100;
    const chunks: Chunk[] = [];
    for (let i=0; i<clean.length; i += size-overlap) {
      const part = clean.slice(i, i+size); if (!part) break;
      chunks.push({id:crypto.randomUUID(), documentId, text:part, score:0, metadata:{start:i}});
      if (i+size >= clean.length) break;
    }
    return chunks;
  }
}
