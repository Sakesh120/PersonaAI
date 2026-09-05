from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1)
    conversationId: str | None = "default"
    context: dict | None = None


class ChatResponse(BaseModel):
    response: str
    conversationId: str
    route: str = "GENERAL"
    model: str = "qwen"
    sources: list[dict] = []
