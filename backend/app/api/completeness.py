from fastapi import APIRouter
from app.services.completeness_service import check_completeness

router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)


@router.post("/completeness")
def complaint_completeness(complaint: dict):

    result = check_completeness(complaint)

    return result