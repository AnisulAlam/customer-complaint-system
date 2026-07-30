import json


from app.ai.llm_utils import invoke_json_llm
from app.ai.prompts import EXTRACT_COMPLAINT_PROMPT
from app.ai.prompts import RISK_ASSESSMENT_PROMPT, RECOMMENDATION_PROMPT

def extract_complaint(state):
    prompt = EXTRACT_COMPLAINT_PROMPT.format(
        complaint=state["complaint_text"]
    )

    extracted = invoke_json_llm(prompt)

    state.update(extracted)

    return state


def validate_complaint(state):
    required_fields = [
        "customer_name",
        "product_name",
        "batch_number",
        "complaint_type",
        "description",
    ]

    missing = [
        field for field in required_fields
        if not state.get(field)
    ]

    state["missing_information"] = ", ".join(missing)

    return state

def assess_risk(state):
    prompt = RISK_ASSESSMENT_PROMPT.format(
        complaint_data=json.dumps(state, indent=2)
    )

    assessment = invoke_json_llm(prompt)

    state["severity"] = assessment.get("severity", "")
    state["priority"] = assessment.get("priority", "")
    state["risk_level"] = assessment.get("risk_level", "")
    state["root_cause"] = assessment.get("root_cause", "")

    return state

def generate_recommendation(state):
    prompt = RECOMMENDATION_PROMPT.format(
        complaint_data=json.dumps(state, indent=2)
    )

    recommendation = invoke_json_llm(prompt)

    state["recommendation"] = recommendation.get(
        "recommendation",
        ""
    )

    return state