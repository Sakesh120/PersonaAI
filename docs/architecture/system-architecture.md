# PersonaAI Architecture Overview

PersonaAI is a privacy-preserving desktop AI assistant that keeps the user experience local-first while using a dedicated Python AI service for orchestration, retrieval, and model interaction.

## Layers
- Electron + React UI: chat, document management, memory, settings.
- Node.js API gateway: request validation, boundary handling, and proxying to the AI service.
- Python AI service: orchestration, retrieval, memory, and local model integration.

## Design principle
The server should not own the core AI implementation; it should interact with the Python AI service through a dedicated client boundary.
