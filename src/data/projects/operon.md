---
title: 'Operon'
eyebrow: 'OPEN SOURCE · AGENT TOOLING'
summary: 'A terminal-native coding agent built around verification, repository structure, and controlled edits.'
type: 'Open source'
status: 'In development'
year: 2026
featured: true
order: 2
tags: ['Python', 'AST', 'Textual', 'ReAct', 'LLM']
role: 'Creator / Maintainer'
links:
  - { label: 'GitHub', url: 'https://github.com/qasimio/Operon' }
stats:
  - { value: 'AST', label: 'deterministic edits' }
  - { value: '5-tier', label: 'patch matching' }
  - { value: '300s', label: 'approval fallback' }
pullQuote: 'An agent saying “I changed it” is not evidence that the file changed.'
---

Operon grew out of a distrust of agent loops that report success because the model believes it succeeded.

The system builds a persistent repository symbol graph, gives deterministic operations a fast path, validates edits against the filesystem, and keeps human approval in the loop for changes that should not be trusted blindly.

## The hard part

Repository-wide work breaks when the agent only sees snippets. Operon keeps a structural view of the codebase and uses that context to decide where edits belong before asking the model to improvise.

For predictable operations such as imports and symbol renames, the system avoids the model entirely and uses Python AST/tokenization primitives.

## What I learned

Autonomy is useful only when the system can verify its own claims. The most valuable part of the project became the machinery around the model rather than the model itself.
