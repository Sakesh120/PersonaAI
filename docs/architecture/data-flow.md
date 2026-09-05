# Data Flow

The request lifecycle is:
1. Browser or desktop client sends a request.
2. Node API receives the request and validates it.
3. The Node server calls the Python AI service through the `AIServiceClient`.
4. The AI service routes the request, optionally retrieves local documents, and prepares a response.
5. The result is returned to the desktop UI.

This keeps the AI implementation separate from the HTTP boundary.
