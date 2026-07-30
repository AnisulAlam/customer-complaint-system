from app.ai.edit_node import edit_complaint


class EditAIService:

    @staticmethod
    def edit_complaint(
        command: str,
        complaint_data: dict
    ):

        return edit_complaint(
            command,
            complaint_data
        )