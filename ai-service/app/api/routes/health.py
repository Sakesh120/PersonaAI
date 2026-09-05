from fastapi import APIRouter

router = APIRouter()


@router.get("/api/health")
async def health_check() -> dict:
    return {"ok": True, "status": "healthy", "service": "ai-service"}
