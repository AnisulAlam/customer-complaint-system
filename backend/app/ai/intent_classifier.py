from app.ai.prompts import INTENT_PROMPT
from app.ai.llm_utils import invoke_json_llm


def classify_intent(text: str):

    prompt = INTENT_PROMPT.format(
        text=text
    )

    result = invoke_json_llm(prompt)

    return result["intent"]