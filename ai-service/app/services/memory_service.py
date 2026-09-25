class MemoryService:
    async def search(self, conversation_id: str):
        return {"conversationId": conversation_id, "entries": []}
