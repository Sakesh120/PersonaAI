from fastapi import APIRouter

router = APIRouter()


@router.get("/api/conversations/{conversation_id}")
async def get_conversation(conversation_id: str) -> dict:
    return {"conversationId": conversation_id, "entries": []}


@router.post("/api/memory/search")
async def search_memory() -> dict:
    return {"conversationId": "default", "entries": []}
