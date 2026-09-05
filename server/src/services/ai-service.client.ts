type ChatRequest = {
  message: string;
  conversationId?: string;
  context?: Record<string, unknown>;
};

export class AIServiceClient {
  constructor(private readonly baseUrl: string = process.env.AI_SERVICE_URL || "http://127.0.0.1:8000") {}

  private async request<T>(path: string, init: RequestInit = {}): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init.headers || {})
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`AI service request failed for ${path}: ${response.status} ${errorText || response.statusText}`);
    }

    return response.json() as Promise<T>;
  }

  async healthCheck(): Promise<{ ok: boolean; status?: string; service?: string; ollama?: { available: boolean; message?: string }; model?: string }> {
    return this.request<{ ok: boolean; status?: string; service?: string; ollama?: { available: boolean; message?: string }; model?: string }>("/api/health");
  }

  async chat(payload: ChatRequest): Promise<{ response: string; conversationId: string; route?: string; model?: string; sources?: unknown[] }> {
    return this.request<{ response: string; conversationId: string; route?: string; model?: string; sources?: unknown[] }>("/api/chat", {
      method: "POST",
      body: JSON.stringify(payload)
    });
  }

  async uploadDocument(payload: { name: string; buffer: Buffer }): Promise<{ id: string; name: string; createdAt: string }> {
    const formData = new FormData();
    const fileBlob = new Blob([new Uint8Array(payload.buffer)], { type: "application/octet-stream" });
    formData.append("file", fileBlob, payload.name);

    const response = await fetch(`${this.baseUrl}/api/documents/upload`, {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`AI service upload failed: ${response.status} ${errorText || response.statusText}`);
    }

    return response.json() as Promise<{ id: string; name: string; createdAt: string }>;
  }

  async listDocuments(): Promise<Array<{ id: string; name: string; createdAt: string }>> {
    return this.request<Array<{ id: string; name: string; createdAt: string }>>("/api/documents");
  }

  async searchDocuments(query: string, limit = 5): Promise<Array<{ id: string; score: number; text: string }>> {
    return this.request<Array<{ id: string; score: number; text: string }>>("/api/documents/search", {
      method: "POST",
      body: JSON.stringify({ query, limit })
    });
  }

  async searchMemory(conversationId: string): Promise<{ conversationId: string; entries: unknown[] }> {
    return this.request<{ conversationId: string; entries: unknown[] }>("/api/memory/search", {
      method: "POST",
      body: JSON.stringify({ conversationId })
    });
  }

  async getConversation(conversationId: string): Promise<{ conversationId: string; entries: unknown[] }> {
    return this.request<{ conversationId: string; entries: unknown[] }>(`/api/conversations/${encodeURIComponent(conversationId)}`);
  }

  async executeTool(name: string, input: Record<string, unknown>) {
    return this.request(`/api/tools/execute`, {
      method: "POST",
      body: JSON.stringify({ name, input })
    });
  }
}
