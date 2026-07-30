from langgraph.graph import StateGraph, END

from app.ai.state import ComplaintState
from app.ai.nodes import (
    extract_complaint,
    validate_complaint,
    assess_risk,
    generate_recommendation,
)

workflow = StateGraph(ComplaintState)

# Register nodes
workflow.add_node("extract", extract_complaint)
workflow.add_node("validate", validate_complaint)
workflow.add_node("risk", assess_risk)
workflow.add_node("recommendation", generate_recommendation)

# Entry point
workflow.set_entry_point("extract")

# Workflow
workflow.add_edge("extract", "validate")
workflow.add_edge("validate", "risk")
workflow.add_edge("risk", "recommendation")
workflow.add_edge("recommendation", END)

# Compile graph
complaint_graph = workflow.compile()