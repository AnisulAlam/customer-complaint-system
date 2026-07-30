from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.schemas.complaint import ComplaintCreate, ComplaintResponse
from app.crud.complaint import (
    create_complaint,
    get_all_complaints,
    get_complaint,
)

router = APIRouter(
    prefix="/complaints",
    tags=["Complaints"],
)


@router.post("/", response_model=ComplaintResponse)
def save_complaint(
    complaint: ComplaintCreate,
    db: Session = Depends(get_db),
):
    return create_complaint(db, complaint)


@router.get("/", response_model=list[ComplaintResponse])
def list_complaints(db: Session = Depends(get_db)):
    return get_all_complaints(db)


@router.get("/{complaint_id}", response_model=ComplaintResponse)
def complaint_details(
    complaint_id: int,
    db: Session = Depends(get_db),
):
    complaint = get_complaint(db, complaint_id)

    if complaint is None:
        raise HTTPException(
            status_code=404,
            detail="Complaint not found",
        )

    return complaint