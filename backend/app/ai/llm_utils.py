import json
import re

from app.ai.groq_client import llm


def invoke_json_llm(prompt: str) -> dict:
    """
    Sends a prompt to the LLM and returns parsed JSON.
    Handles markdown-wrapped JSON and parsing errors.
    """

    response = llm.invoke(prompt)

    content = response.content.strip()

    # Remove markdown code fences if present
    content = re.sub(r"^```json\s*", "", content)
    content = re.sub(r"^```", "", content)
    content = re.sub(r"\s*```$", "", content)

    try:
        return json.loads(content)

    except json.JSONDecodeError as e:
        print("LLM Response:")
        print(content)
        raise ValueError(
            "The LLM returned an invalid JSON response."
        ) from e