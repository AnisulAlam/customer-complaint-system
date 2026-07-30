from app.ai.groq_client import llm

response = llm.invoke("Say hello")

print(response.content)