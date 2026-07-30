from pydantic import BaseModel


class ComplaintAnalysisRequest(BaseModel):
    complaint_text: str


class ComplaintAnalysisResponse(BaseModel):
    complaint_source: str = ""
    customer_name: str = ""
    product_name: str = ""
    strength: str = ""
    batch_number: str = ""
    manufacturing_date: str = ""
    expiry_date: str = ""
    quantity_affected: str = ""
    complaint_type: str = ""
    complaint_date: str = ""
    description: str = ""

    missing_information: str = ""

    severity: str = ""
    priority: str = ""
    risk_level: str = ""
    root_cause: str = ""

    recommendation: str = ""