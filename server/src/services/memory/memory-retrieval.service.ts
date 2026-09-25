export class MemoryRetrievalService { retrieve<T extends {content:string}>(query:string,items:T[]){const q=query.toLowerCase();return items.filter(x=>x.content.toLowerCase().includes(q));} }
