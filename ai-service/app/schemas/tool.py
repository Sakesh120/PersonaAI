from pydantic import BaseModel


class ToolRequest(BaseModel):
    name: str
    input: dict = {}
