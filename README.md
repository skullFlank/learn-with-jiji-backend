# Learn with Jiji – Backend Service

This repository contains the backend implementation for **Learn with Jiji**, a learning companion designed to help users receive structured explanations along with relevant learning resources.

The backend handles a simple query–response flow where a user submits a question, the system fetches related content from the database, and returns a structured response that can be consumed by a frontend application.

For this assignment, the response logic is intentionally kept simple and AI behavior is mocked as instructed.

---

## Tech Stack

- Node.js  
- Express.js  
- Supabase (PostgreSQL, Auth, Storage, RLS)

---

## API Endpoint

### POST `/ask-jiji`

Accepts a user query and returns an explanation with related learning resources.

**Request**
```json
{
  "question": "Explain RAG"
}

**Response**
```json
{
  "answer": "Here is a simple explanation for: Explain RAG",
  "resources": [
    {
      "title": "Introduction to RAG",
      "type": "ppt",
      "url": "https://example.com/rag.ppt"
    },
    {
      "title": "What is RAG?",
      "type": "video",
      "url": "https://example.com/rag.mp4"
    }
  ]
}