from pydantic import BaseModel
from typing import Optional


class ChatRequest(BaseModel):
    message: str
    model: Optional[str] = "llama-3.3-70b-versatile"


class ImageItem(BaseModel):
    title: str
    image: str
    author: str
    link: str


class ChatResponse(BaseModel):
    response: str
    images: list[ImageItem] = []