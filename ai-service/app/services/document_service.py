class DocumentService:
    async def ingest(self, name: str, content: str) -> dict:
        return {
            "id": "doc-1",
            "name": name,
            "createdAt": "2025-01-01T00:00:00Z",
            "content_preview": content[:120]
        }
