from pydantic import BaseModel


class DocumentRecord(BaseModel):
    id: str
    name: str
    createdAt: str
