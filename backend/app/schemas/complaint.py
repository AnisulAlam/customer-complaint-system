from pydantic import BaseModel


class ComplaintBase(BaseModel):

    complaint_source: str | None = None
    customer_name: str | None = None
    product_name: str | None = None
    strength: str | None = None
    batch_number: str | None = None
    manufacturing_date: str | None = None
    expiry_date: str | None = None
    quantity_affected: str | None = None
    complaint_type: str | None = None
    complaint_date: str | None = None
    description: str | None = None
    severity: str | None = None
    priority: str | None = None
    risk_assessment: str | None = None
    recommendation: str | None = None


class ComplaintCreate(ComplaintBase):
    pass


class ComplaintResponse(ComplaintBase):

    id: int

    class Config:
        from_attributes = True