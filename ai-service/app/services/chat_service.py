class ChatService:
    async def generate(self, message: str, conversation_id: str = "default") -> str:
        return f"Starter AI response to: {message[:160]}"
