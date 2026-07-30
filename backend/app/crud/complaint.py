from sqlalchemy.orm import Session

from app.models.complaint import Complaint
from app.schemas.complaint import ComplaintCreate


def create_complaint(db: Session, complaint: ComplaintCreate):
    db_complaint = Complaint(**complaint.model_dump())

    db.add(db_complaint)
    db.commit()
    db.refresh(db_complaint)

    return db_complaint


def get_all_complaints(db: Session):
    return db.query(Complaint).all()


def get_complaint(db: Session, complaint_id: int):
    return (
        db.query(Complaint)
        .filter(Complaint.id == complaint_id)
        .first()
    )