from fastapi import APIRouter

from app.schemas.chat import ChatRequest, ChatResponse

router = APIRouter()


@router.post("/api/chat")
async def chat(request: ChatRequest) -> ChatResponse:
    return ChatResponse(
        response=f"Starter response to: {request.message}",
        conversationId=request.conversationId or "default",
        route="GENERAL",
        model="qwen",
        sources=[]
    )
