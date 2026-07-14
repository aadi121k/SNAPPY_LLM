from fastapi import APIRouter, UploadFile, File

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chat_service import chat_service

router = APIRouter(
    prefix="/chat",
    tags=["Chat"],
)


@router.post("/", response_model=ChatResponse)
async def chat(request: ChatRequest):
    result = chat_service.generate_response(
    message=request.message,
    model=request.model,
    history=request.history,
)

    if isinstance(result, dict):
        return ChatResponse(
            response=result.get("response", ""),
            images=result.get("images", []),
        )

    return ChatResponse(
        response=result,
        images=[],
    )

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    return {
        "filename": file.filename,
        "content_type": file.content_type,
        "size": len(await file.read()),
    }