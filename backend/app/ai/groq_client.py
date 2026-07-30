from langchain_groq import ChatGroq
from app.core.config import GROQ_API_KEY

llm = ChatGroq(
    model="openai/gpt-oss-20b",
    api_key=GROQ_API_KEY,
    temperature=0,
)