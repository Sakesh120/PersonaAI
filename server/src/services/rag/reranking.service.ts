import type { Chunk } from "./retrieval.service.js";
export interface RerankingService { rerank(query:string,chunks:Chunk[]): Promise<Chunk[]>; }
export class PlaceholderRerankingService implements RerankingService { async rerank(_query:string,chunks:Chunk[]){return chunks;} }
