# Architecture
Electron hosts the React renderer. The renderer calls the Express API only through service boundaries. The API delegates to the orchestration service, which routes requests to LLM, RAG, memory, and tools. Providers are interfaces or replaceable classes.
