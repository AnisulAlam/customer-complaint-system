from app.ai.graph import complaint_graph


class AIService:

    @staticmethod
    def analyze_complaint(complaint_text: str):

        initial_state = {
            "complaint_text": complaint_text
        }

        result = complaint_graph.invoke(initial_state)

        return result