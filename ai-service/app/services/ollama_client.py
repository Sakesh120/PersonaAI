from __future__ import annotations

import json
import logging
import time
from collections.abc import AsyncIterator

import httpx
import requests

from app.config.settings import settings

logger = logging.getLogger("personaai.ollama")

BASE_URL = settings.ollama_base_url.rstrip("/")
OLLAMA_CHAT_URL = f"{BASE_URL}/api/chat"
OLLAMA_GENERATE_URL = f"{BASE_URL}/api/generate"

SYSTEM_PROMPT = "You are PersonaAI, a helpful local AI assistant. Answer clearly and concisely."

# Fast-mode defaults. We'll move these into the MODES config in the next step.
FAST_OPTIONS = {
    "temperature": settings.temperature,
    "num_predict": 1024,  # cap on generated tokens; raise it if replies get cut off
}
KEEP_ALIVE = "30m"  # keep the model loaded between messages


def check_ollama() -> dict:
    try:
        response = requests.get(f"{BASE_URL}/api/tags", timeout=5)
        response.raise_for_status()
        data = response.json()
        models = [model.get("name") for model in data.get("models", [])]
        return {"available": True, "models": models}
    except requests.RequestException as error:
        return {"available": False, "message": str(error)}


def _extract_metrics(data: dict, wall_seconds: float) -> dict:
    """Ollama reports durations in nanoseconds."""
    ns = 1_000_000_000
    eval_count = data.get("eval_count", 0)
    eval_duration = data.get("eval_duration", 0)
    return {
        "wall_seconds": round(wall_seconds, 2),
        "total_seconds": round(data.get("total_duration", 0) / ns, 2),
        "load_seconds": round(data.get("load_duration", 0) / ns, 2),
        "prompt_tokens": data.get("prompt_eval_count", 0),
        "generated_tokens": eval_count,
        "tokens_per_second": round(eval_count / (eval_duration / ns), 1) if eval_duration else None,
    }


def chat_ollama(
    messages: list[dict],
    *,
    think: bool = False,
    options: dict | None = None,
) -> dict:
    """Send a full messages[] list to Ollama /api/chat.

    Returns {"content": str, "metrics": dict}.
    """
    payload = {
        "model": settings.ollama_model,
        "messages": messages,
        "think": think,          # top-level field, not inside options
        "stream": False,
        "keep_alive": KEEP_ALIVE,
        "options": options or FAST_OPTIONS,
    }

    start = time.perf_counter()
    response = requests.post(OLLAMA_CHAT_URL, json=payload, timeout=settings.timeout)
    response.raise_for_status()
    wall = time.perf_counter() - start

    data = response.json()
    metrics = _extract_metrics(data, wall)
    logger.info("ollama think=%s metrics=%s", think, metrics)

    return {
        "content": data["message"]["content"],
        "metrics": metrics,
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


async def stream_ollama(
    messages: list[dict],
    *,
    think: bool = False,
    options: dict | None = None,
) -> AsyncIterator[str]:
    payload = {
        "model": settings.ollama_model,
        "messages": messages,
        "think": think,
        "stream": True,
        "keep_alive": KEEP_ALIVE,
        "options": options or FAST_OPTIONS,
    }

    async with httpx.AsyncClient(timeout=settings.timeout) as client:
        async with client.stream("POST", OLLAMA_CHAT_URL, json=payload) as response:
            response.raise_for_status()

            async for line in response.aiter_lines():
                if not line:
                    continue

                data = json.loads(line)
                text = data.get("message", {}).get("content", "")
                if text:
                    yield text

                if data.get("done"):
                    logger.info("ollama stream metrics=%s", _extract_metrics(data, 0))