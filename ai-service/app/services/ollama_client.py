from __future__ import annotations

import requests

from app.config.settings import settings


OLLAMA_GENERATE_URL = f"{settings.ollama_base_url.rstrip('/')}/api/generate"


def check_ollama() -> dict:
    try:
        response = requests.get(
            f"{settings.ollama_base_url.rstrip('/')}/api/tags",
            timeout=5
        )

        response.raise_for_status()

        data = response.json()
        models = [
            model.get("name")
            for model in data.get("models", [])
        ]

        return {
            "available": True,
            "models": models
        }

    except requests.RequestException as error:
        return {
            "available": False,
            "message": str(error)
        }


def ask_ollama(message: str) -> str:
    payload = {
        "model": settings.ollama_model,
        "prompt": message,
        "think": False,
        "stream": False,
        "options": {
            "temperature": settings.temperature
        },
    }

    response = requests.post(
        OLLAMA_GENERATE_URL,
        json=payload,
        timeout=settings.timeout
    )

    response.raise_for_status()

    data = response.json()

    return data["response"]