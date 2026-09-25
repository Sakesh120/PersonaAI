class ToolService:
    async def execute(self, name: str, input_data: dict):
        return {"ok": True, "tool": name, "input": input_data, "result": "stubbed"}
