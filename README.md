# AI-Powered Customer Complaint Management System

An AI-powered customer complaint management system designed for pharmaceutical companies to automate complaint intake, extraction, risk assessment, and recommendation generation.

The system extracts complaint information from PDFs, images, emails, and plain text using OCR, LangGraph, and large language models. It automatically populates complaint forms and generates AI-based risk assessments.

---

## Features

- Complaint extraction from PDFs and images
- OCR-based document processing
- Complaint extraction from plain text and emails
- Conversational complaint editing using natural language
- Automatic complaint form population
- Complaint validation
- AI-based risk assessment
- Recommendation generation
- Complaint completeness checking
- Complaint storage in MySQL

---

## System Architecture

```text
User Input (PDF / Image / Email / Text)
                │
                ▼
        Frontend (React)
                │
                ▼
        FastAPI Backend
                │
                ▼
           LangGraph
                │
                ▼
      Extract Complaint Node
                │
                ▼
      Validate Complaint Node
                │
                ▼
       Risk Assessment Node
                │
                ▼
   Recommendation Generation Node
                │
                ▼
        Structured JSON Output
                │
                ▼
Complaint Form + Risk Assessment
                │
                ▼
           MySQL Database
```

---

## Technology Stack

### Frontend

- React.js
- Redux Toolkit
- Axios
- CSS

### Backend

- FastAPI
- Python

### AI and Workflow

- LangGraph
- Groq API
- OCR

### Database

- MySQL

---

## Project Structure

```text
customer-complaint-system/

├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── redux/
│   │   └── pages/
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── ai/
│   │   │   ├── graph.py
│   │   │   ├── nodes.py
│   │   │   └── state.py
│   │   ├── api/
│   │   ├── services/
│   │   ├── models/
│   │   └── database/
│   └── requirements.txt
│
└── README.md
```

---

## LangGraph Workflow

The application uses LangGraph to orchestrate the AI workflow.

```python
workflow.add_edge("extract", "validate")
workflow.add_edge("validate", "risk")
workflow.add_edge("risk", "recommendation")
workflow.add_edge("recommendation", END)
```

Workflow steps:

1. Extract complaint information
2. Validate extracted data
3. Assess complaint risk
4. Generate recommendations

---

## API Endpoints

### Extract Complaint

```http
POST /ai/extract-document
```

Extracts complaint information from uploaded documents.

### Edit Complaint

```http
POST /ai/edit-complaint
```

Updates complaint information using natural language commands.

Example:

```text
Change batch number to BT999
```

### Log Complaint

```http
POST /ai/log-complaint
```

Logs complaint information.

### Save Complaint

```http
POST /complaints
```

Stores complaint data in MySQL.

---

## Complaint Fields

The system extracts and manages the following information:

- Complaint source
- Customer name
- Product name
- Strength
- Batch number
- Manufacturing date
- Expiry date
- Quantity affected
- Complaint type
- Complaint date
- Description
- Severity
- Priority
- Risk assessment
- Recommendation

---

## Installation

### Clone the repository

```bash
git clone https://github.com/AnisulAlam/customer-complaint-system.git

cd customer-complaint-system
```

### Frontend setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

### Backend setup

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs on:

```text
http://localhost:8000
```

---

## Database Configuration

Create a MySQL database:

```sql
CREATE DATABASE complaint_management;
```

Configure your `.env` file:

```env
DATABASE_URL=mysql+pymysql://username:password@localhost/complaint_management

GROQ_API_KEY=your_groq_api_key
```

---

## Demo

The project supports:

- PDF complaint extraction
- Image-based complaint extraction
- Text-based complaint extraction
- AI-assisted complaint editing
- Automatic risk assessment

---

## Author

**SK Anisul Alam**

GitHub: https://github.com/AnisulAlam
