from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import DateTime

from datetime import datetime

from app.core.database import Base


class Complaint(Base):

    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True, index=True)

    complaint_source = Column(String(100))

    customer_name = Column(String(200))

    product_name = Column(String(200))

    strength = Column(String(100))

    batch_number = Column(String(100))

    manufacturing_date = Column(String(100))

    expiry_date = Column(String(100))

    quantity_affected = Column(String(100))

    complaint_type = Column(String(200))

    complaint_date = Column(String(100))

    description = Column(Text)

    severity = Column(String(50))

    priority = Column(String(50))

    risk_assessment = Column(Text)

    recommendation = Column(Text)

    created_at = Column(DateTime, default=datetime.utcnow)