# Security Architecture

The local-first design treats file access and tool execution as security-sensitive operations.

Key controls include:
- request validation
- prompt guarding
- path validation
- tool permission boundaries
- no arbitrary shell execution in the initial implementation

This keeps the system safe by default while leaving room for future improvements.
