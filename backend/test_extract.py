from app.ai.nodes import extract_complaint

state = {
    "complaint_text": """
Customer John Smith reported that
Paracetamol 500 mg tablets
Batch PCM24001

Several tablets were broken inside the bottle.

Approximately 150 bottles affected.
"""
}

result = extract_complaint(state)

print(result)