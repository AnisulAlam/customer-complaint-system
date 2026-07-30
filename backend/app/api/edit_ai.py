from fastapi import APIRouter

from app.schemas.edit_ai import EditComplaintRequest
from app.services.edit_ai_service import EditAIService


router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


@router.post("/edit-complaint")
def edit_complaint_api(request: EditComplaintRequest):

    return EditAIService.edit_complaint(
    request.command,
    request.complaint_data
)