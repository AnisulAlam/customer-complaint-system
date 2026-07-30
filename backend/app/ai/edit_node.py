import json

from app.ai.prompts import EDIT_COMPLAINT_PROMPT
from app.ai.llm_utils import invoke_json_llm


def edit_complaint(command: str, complaint_data: dict):

    prompt = EDIT_COMPLAINT_PROMPT.format(
        command=command,
        complaint_data=json.dumps(
            complaint_data,
            indent=2
        )
    )

    updated_fields = invoke_json_llm(prompt)

    complaint_data.update(updated_fields)

    return complaint_data