from app.parsers.document_parser import parse_document
from app.services.ai_service import AIService


class DocumentService:

    @staticmethod
    def analyze_document(file_path: str):

        text = parse_document(file_path)

        result = AIService.analyze_complaint(text)

        return result