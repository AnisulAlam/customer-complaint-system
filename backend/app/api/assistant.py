from fastapi import APIRouter

from app.ai.intent_classifier import classify_intent
from app.services.ai_service import AIService
from app.services.edit_ai_service import EditAIService


router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


@router.post("/assistant")
def assistant(request: dict):

    message = request["message"]

    complaint_data = request.get(
        "complaint_data",
        {}
    )

    intent = classify_intent(message)

    if intent == "log":

        return AIService.analyze_complaint(
            message
        )

    if intent == "edit":

        return EditAIService.edit_complaint(
            message,
            complaint_data
        )

    return {
        "message": "Unsupported request"
    }