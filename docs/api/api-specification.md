# API specification

## Frontend API (Node / Express)

- GET /api/health
- POST /api/chat
- POST /api/documents/upload
- GET /api/documents
- GET /api/documents/:id
- DELETE /api/documents/:id
- POST /api/documents/search
- GET /api/conversations/:id
- POST /api/memory/search
- POST /api/tools/execute

## Internal AI Service API (Python / FastAPI)

- GET /api/health
- POST /api/chat
- GET /api/documents
- POST /api/documents/upload
- POST /api/documents/search
- GET /api/conversations/{conversation_id}
- POST /api/memory/search
- POST /api/tools/execute

The Node server acts as an API gateway and its client layer is responsible for translating desktop requests into the Python-side contract.
