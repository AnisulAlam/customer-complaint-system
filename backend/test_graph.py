from app.ai.graph import complaint_graph

state = {
    "complaint_text": """
Customer John Smith reported that
Paracetamol 500 mg tablets
Batch PCM24001

Several tablets were broken inside the bottle.

Approximately 150 bottles affected.
"""
}

result = complaint_graph.invoke(state)

print(result)