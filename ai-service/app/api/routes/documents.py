from fastapi import APIRouter

router = APIRouter()


@router.get("/api/documents")
async def list_documents() -> list[dict]:
    return []


@router.post("/api/documents/upload")
async def upload_document() -> dict:
    return {"id": "doc-1", "name": "example.txt", "createdAt": "2025-01-01T00:00:00Z"}
