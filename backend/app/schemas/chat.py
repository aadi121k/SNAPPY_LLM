from pydantic import BaseModel
from typing import Optional


# -----------------------------
# Chat History Message
# -----------------------------

class ChatMessage(BaseModel):
    role: str
    content: str


# -----------------------------
# Chat Request
# -----------------------------

class ChatRequest(BaseModel):
    message: str
    model: Optional[str] = "llama-3.3-70b-versatile"

    # Previous conversation
    history: list[ChatMessage] = []


# -----------------------------
# Images
# -----------------------------

class ImageItem(BaseModel):
    title: str
    image: str
    author: str
    link: str


# -----------------------------
# Chat Response
# -----------------------------

class ChatResponse(BaseModel):
    response: str
    images: list[ImageItem] = []