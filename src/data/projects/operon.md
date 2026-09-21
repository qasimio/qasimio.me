---
title: 'Operon'
summary: "A terminal-native autonomous coding agent built around deterministic verification instead of trusting the model's description of what it changed."
type: open-source
status: active
year: 2026
featured: true
order: 15
role: 'Designer / engineer'
tags: [Agents, AST, Python, TUI, Verification]
links:
  - label: 'GitHub'
    url: 'https://github.com/qasimio/Operon'
stats:
  - value: 'AST'
    label: 'structured edits'
  - value: '5-tier'
    label: 'patching'
  - value: '9'
    label: 'LLM backends'
pullQuote: 'The filesystem is the source of truth.'
---

## The problem

Autonomous coding loops have a dangerous blind spot: a model can confidently describe an edit that never happened, happened differently, or broke another file entirely.

Operon starts from a less glamorous assumption: disk state wins.

## The approach

The agent maintains a persistent repository symbol graph for cross-file context, while a deterministic review layer checks actual filesystem snapshots before changes are accepted.

For structured operations such as import insertion and symbol renaming, Operon can bypass free-form generation and use Python's AST and tokenization machinery.

## Patching

Not every edit is represented cleanly by a single string replacement. The patching path therefore cascades from exact matches through increasingly tolerant structural strategies so overlapping automated and manual edits can still be handled deliberately.

## The bigger idea

The goal is not to make a model appear autonomous. It is to make the autonomous loop accountable to things outside the model.
