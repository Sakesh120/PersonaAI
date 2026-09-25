from fastapi import APIRouter

router = APIRouter()


@router.post("/api/documents/search")
async def search_documents() -> list[dict]:
    return []
