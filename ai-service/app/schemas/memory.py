from pydantic import BaseModel


class MemoryRecord(BaseModel):
    conversationId: str
    entries: list[dict] = []
