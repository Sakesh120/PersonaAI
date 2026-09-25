from __future__ import annotations

from fastapi import FastAPI
from pydantic import BaseModel, Field

from app.config.settings import settings

from app.services.ollama_client import ask_ollama

app = FastAPI(title="PersonaAI AI Service", version="0.1.0")


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1)
    conversationId: str | None = "default"
    context: dict | None = None


class ChatResponse(BaseModel):
    response: str
    conversationId: str
    route: str = "GENERAL"
    model: str = settings.ollama_model
    sources: list[dict] = []


@app.get("/api/health")
async def health() -> dict:
    return {
        "ok": True,
        "status": "healthy",
        "service": "ai-service",
        "ollama": {
            "available": False,
            "message": "Ollama is not running; configure OLLAMA_BASE_URL and start the local service to enable generation."
        },
        "model": settings.ollama_model,
    }


@app.post("/api/chat")
async def chat(request: ChatRequest) -> ChatResponse:
    if not request.message.strip():
        raise ValueError("message is required")

    answer = ask_ollama(request.message)    

    return ChatResponse(
        response=answer,
        conversationId=request.conversationId or "default",
        route="GENERAL",
        model=settings.ollama_model,
        sources=[]
    )


@app.get("/api/documents")
async def list_documents() -> list[dict]:
    return []


@app.post("/api/documents/upload")
async def upload_document() -> dict:
    return {"id": "doc-1", "name": "uploaded-file.txt", "createdAt": "2025-01-01T00:00:00Z"}


@app.post("/api/documents/search")
async def search_documents(query: str | None = None, limit: int = 5) -> list[dict]:
    return [{"id": "doc-1", "score": 0.0, "text": f"Document search placeholder for query: {query or 'none'}"}]


@app.get("/api/conversations/{conversation_id}")
async def get_conversation(conversation_id: str) -> dict:
    return {"conversationId": conversation_id, "entries": []}


@app.post("/api/memory/search")
async def search_memory() -> dict:
    return {"conversationId": "default", "entries": []}


@app.post("/api/tools/execute")
async def execute_tool() -> dict:
    return {"ok": True, "result": "Tool service placeholder"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("app.main:app", host=settings.host, port=settings.port, reload=True)
