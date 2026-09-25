export type Chunk = { id: string; documentId: string; text: string; score: number; metadata?: Record<string, unknown> };
export class RetrievalService {
  private chunks: Chunk[] = [];
  add(chunks: Chunk[]) { this.chunks.push(...chunks); }
  remove(documentId: string) { this.chunks = this.chunks.filter(c => c.documentId !== documentId); }
  search(query: string, limit = 5) {
    const terms = query.toLowerCase().split(/\W+/).filter(Boolean);
    return this.chunks.map(c => ({...c, score: terms.reduce((n,t) => n + (c.text.toLowerCase().includes(t) ? 1 : 0), 0) / Math.max(terms.length,1)}))
      .filter(c => c.score > 0).sort((a,b) => b.score-a.score).slice(0, limit);
  }
}
