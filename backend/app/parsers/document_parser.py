import os

from app.parsers.pdf_parser import extract_pdf_text
from app.parsers.image_parser import extract_image_text


def parse_document(file_path: str):

    extension = os.path.splitext(file_path)[1].lower()

    if extension == ".pdf":
        return extract_pdf_text(file_path)

    if extension in [".png", ".jpg", ".jpeg"]:
        return extract_image_text(file_path)

    raise ValueError("Unsupported file format")