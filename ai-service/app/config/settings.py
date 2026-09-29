from __future__ import annotations

import os
from dataclasses import dataclass


@dataclass(frozen=True)
class Settings:
    # AI Service
    host: str = os.getenv(
        "AI_SERVICE_HOST",
        "127.0.0.1"
    )

    port: int = int(
        os.getenv("AI_SERVICE_PORT", "8000")
    )

    # Ollama
    ollama_base_url: str = os.getenv(
        "OLLAMA_BASE_URL",
        "http://127.0.0.1:11434"
    )

    ollama_model: str = os.getenv(
        "OLLAMA_MODEL",
        "qwen:4b"
    )

    # Generation
    temperature: float = float(
        os.getenv("OLLAMA_TEMPERATURE", "0.2")
    )

    timeout: int = int(
        os.getenv("OLLAMA_TIMEOUT", "120")
    )


settings = Settings()