from typing import TypedDict
from typing_extensions import NotRequired


class ComplaintState(TypedDict):
    complaint_text: str
    
    command: NotRequired[str]
    complaint_data: NotRequired[dict]

    complaint_source: NotRequired[str]
    customer_name: NotRequired[str]
    product_name: NotRequired[str]
    strength: NotRequired[str]
    batch_number: NotRequired[str]
    manufacturing_date: NotRequired[str]
    expiry_date: NotRequired[str]
    quantity_affected: NotRequired[str]
    complaint_type: NotRequired[str]
    complaint_date: NotRequired[str]
    description: NotRequired[str]

    missing_information: NotRequired[str]

    severity: NotRequired[str]
    priority: NotRequired[str]
    risk_level: NotRequired[str]
    root_cause: NotRequired[str]

    recommendation: NotRequired[str]