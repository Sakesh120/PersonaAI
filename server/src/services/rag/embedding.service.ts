export interface EmbeddingService { embed(text: string): Promise<number[]>; }
export class PlaceholderEmbeddingService implements EmbeddingService { async embed(_text: string) { return []; } }
