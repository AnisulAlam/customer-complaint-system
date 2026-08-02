from sqlalchemy import create_engine, text
from app.core.config import DATABASE_URL

engine = create_engine(
    DATABASE_URL,
    connect_args={"ssl": {}}
)

with engine.connect() as conn:
    result = conn.execute(text("SELECT * FROM complaints"))

    rows = result.fetchall()

    print(rows)