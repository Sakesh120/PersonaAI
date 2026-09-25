export interface LLMService {
  generate(prompt: string, system?: string): Promise<string>;
  healthCheck(): Promise<{ ok: boolean; provider: string }>;
}
