from fastapi import APIRouter

from app.schemas.ai import (
    ComplaintAnalysisRequest,
    ComplaintAnalysisResponse
)

from app.services.ai_service import AIService


router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


@router.post(
    "/log-complaint",
    response_model=ComplaintAnalysisResponse
)
def log_complaint(request: ComplaintAnalysisRequest):

    result = AIService.analyze_complaint(
        request.complaint_text
    )

    return result