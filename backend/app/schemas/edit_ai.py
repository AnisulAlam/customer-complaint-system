from pydantic import BaseModel


class EditComplaintRequest(BaseModel):
    command: str
    complaint_data: dict