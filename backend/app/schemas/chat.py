from pydantic import BaseModel
from typing import Optional


class ChatRequest(BaseModel):
    message: str
    model: Optional[str] = "llama-3.3-70b-versatile"


class ChatResponse(BaseModel):
    response: str