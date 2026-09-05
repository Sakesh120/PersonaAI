# RAG Flow

The initial implementation keeps a clean abstraction over later retrieval work:
- document extraction
- cleaning
- chunking
- embeddings
- retrieval
- optional hybrid search
- optional reranking
- context assembly

The live starter service exposes the flow as an interface layer while returning clear placeholder responses when the local AI stack is unavailable.
