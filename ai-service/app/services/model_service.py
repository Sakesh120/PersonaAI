class ModelService:
    def __init__(self, model_name: str = "qwen"):
        self.model_name = model_name

    async def status(self):
        return {"available": False, "model": self.model_name, "message": "Ollama not connected"}
