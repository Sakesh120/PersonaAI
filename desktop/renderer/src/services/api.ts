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

export async function streamChatMessage(
  message: string,
  conversationId: string,
  onChunk: (chunk: string) => void,
) {
  const response = await fetch(`${API_BASE_URL}/api/chats/stream`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, conversationId }),
  })

  if (!response.ok) {
    const responseText = await response.text()
    let errorMessage = responseText
    try {
      const body = JSON.parse(responseText) as { error?: string; detail?: string }
      errorMessage = body.detail || body.error || responseText
    } catch {
      // Keep the plain-text response as the error message.
    }
    throw new Error(errorMessage || `Request failed (${response.status})`)
  }

  if (!response.body) {
    throw new Error("The AI service did not return a readable response stream.")
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      const chunk = decoder.decode(value, { stream: true })
      if (chunk) onChunk(chunk)
    }
    const remaining = decoder.decode()
    if (remaining) onChunk(remaining)
  } finally {
    reader.releaseLock()
  }
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