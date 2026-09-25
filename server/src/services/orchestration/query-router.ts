export type Route = { needsRag:boolean; needsMemory:boolean; tool?:string };
export class QueryRouter {
  route(query: string): Route {
    const q=query.toLowerCase();
    return { needsRag: /(document|pdf|file|upload|according to|source)/.test(q), needsMemory: /(remember|earlier|previous|we discussed)/.test(q), tool: /(?:calculate|compute|what is \d+\s*[+\-*/])/.test(q) ? "calculator" : undefined };
  }
}
