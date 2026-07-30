from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import Base, engine
from app.api.complaint import router as complaint_router
from app.api.ai import router as ai_router
from app.api.edit_ai import router as edit_ai_router
from app.api.document import router as document_router
from app.api.completeness import router as completeness_router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="AIVOA Customer Complaint System")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(complaint_router)
app.include_router(ai_router)
app.include_router(edit_ai_router)
app.include_router(document_router)
app.include_router(completeness_router)

@app.get("/")
def root():
    return {"status": "Backend Running"}