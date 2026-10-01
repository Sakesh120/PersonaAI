const API_BASE_URL = (import.meta.env.VITE_API_URL || "http://127.0.0.1:3001").replace(/\/$/, "")

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, init)

  if (!response.ok) {
    const body = await response.json().catch(() => null) as { error?: string; details?: string } | null
    throw new Error(body?.details || body?.error || `Request failed (${response.status})`)
  }

  if (response.status === 204) {
    return undefined as T
  }

  return response.json() as Promise<T>
}

export interface ChatResponse {
  response: string
  conversationId: string
  route?: string
  model?: string
  sources?: unknown[]
}

export interface DocumentSummary {
  id: string
  name: string
  createdAt: string
}

export function sendChatMessage(message: string, conversationId: string) {
  return request<ChatResponse>("/api/chats", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, conversationId }),
  })
}

export function listDocuments() {
  return request<DocumentSummary[]>("/api/documents")
}

export function uploadDocument(file: File) {
  const formData = new FormData()
  formData.append("file", file, file.name)
  return request<DocumentSummary>("/api/documents/upload", {
    method: "POST",
    body: formData,
  })
}