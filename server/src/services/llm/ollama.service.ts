import { env } from "../../config/env.js";
import type { LLMService } from "./llm.interface.js";
export class OllamaService implements LLMService {
  constructor(private baseUrl = env.ollamaUrl, private model = env.model) {}
  async generate(prompt: string, system?: string) {
    try {
      const response = await fetch(`${this.baseUrl}/api/generate`, { method: "POST", headers: {"content-type":"application/json"}, body: JSON.stringify({model:this.model, prompt, system, stream:false}) });
      if (!response.ok) throw new Error(`Ollama returned ${response.status}`);
      const data = await response.json() as { response?: string };
      return data.response || "";
    } catch {
      return `[Local model unavailable] Configure Ollama and start ${this.model} to answer this request.\n\nPrompt received: ${prompt.slice(0, 240)}`;
    }
  }
  async healthCheck() {
    try { const r = await fetch(`${this.baseUrl}/api/tags`); return {ok:r.ok, provider:"ollama"}; }
    catch { return {ok:false, provider:"ollama"}; }
  }
}
