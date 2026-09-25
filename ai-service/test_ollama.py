from app.services.ollama_client import ask_ollama


answer = ask_ollama("Explain RAG in one paragraph.")

print("\nAI RESPONSE:\n")
print(answer)