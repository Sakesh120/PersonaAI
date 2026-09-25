class RetrievalService:
    async def search(self, query: str, limit: int = 5):
        return [{
            "id": "doc-1",
            "score": 0.0,
            "text": f"Retrieval placeholder for {query}",
            "source": "local"
        }]
