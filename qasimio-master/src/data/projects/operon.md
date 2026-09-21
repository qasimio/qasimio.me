---
title: 'Operon'
summary: 'A terminal-native coding agent built around repository context and verification instead of trusting the model to describe its own work.'
type: open-source
status: active
year: 2026
featured: true
order: 30
role: 'Creator / engineer'
tags: [agents, AST, Python, TUI, verification]
visual: operon
links:
  - label: 'GitHub'
    url: 'https://github.com/qasimio/Operon'
stats:
  - value: 'AST'
    label: 'structured edits'
  - value: '5-tier'
    label: 'patch matching'
  - value: '9'
    label: 'LLM backends'
proof:
  - value: 'AST'
    label: 'fast-path edits'
  - value: '5-tier'
    label: 'patch matching'
  - value: 'HITL'
    label: 'approval gates'
pullQuote: 'The model can suggest. The machine verifies.'
---

## The failure mode

Coding agents can describe a change confidently before the change is actually there.

That bothered me more than the model quality itself.

If the file on disk says one thing and the model says another, I want the file to win.

## How I approached it

Operon keeps a persistent repository symbol graph so cross-file relationships do not need to be reconstructed from scratch every time a task starts.

Around edits, a deterministic verification layer checks the real filesystem state. The model can propose a change. It does not get to announce success until the machine has checked it.

For structured operations, the system can use Python's AST and tokenization machinery instead of asking a language model to improvise syntax.

## Patching

Exact replacement is great until one character changes.

Operon falls through increasingly tolerant patch strategies instead of turning the first failed match into an imaginary success. The goal is boring reliability, not an impressive demo.

## What I am actually interested in

I am not trying to make an agent look autonomous.

I am trying to make the loop accountable to something outside the model.
