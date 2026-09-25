# Memory Flow

PersonaAI separates short-term and long-term memory conceptually.

- Short-term memory tracks recent conversation context.
- Long-term memory stores selective, relevant excerpts from prior conversations.
- Memory retrieval is a distinct stage before final context assembly.

This allows later experiments with memory pruning and filtering without tightly coupling the main orchestration logic.
