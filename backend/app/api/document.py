import os
import shutil

from fastapi import APIRouter, UploadFile, File

from app.services.document_service import DocumentService


router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


@router.post("/extract-document")
async def extract_document(
    file: UploadFile = File(...)
):

    upload_dir = "uploads"

    os.makedirs(upload_dir, exist_ok=True)

    file_path = os.path.join(
        upload_dir,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(
            file.file,
            buffer
        )

    result = DocumentService.analyze_document(
        file_path
    )

    return result