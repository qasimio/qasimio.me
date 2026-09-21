---
title: 'Operon'
summary: 'A terminal-native coding agent where the filesystem, not the model, gets the final say on what actually changed.'
type: open-source
status: active
year: 2026
featured: true
order: 15
role: 'Designer / engineer'
tags: [agents, AST, Python, TUI, verification]
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
visual: operon
---

## The failure mode

Coding agents have a strange habit: they can sound certain about a change before anyone has checked whether the file on disk agrees.

That is a terrible place to put trust.

Operon starts with a simpler rule: the machine that owns the file gets the final vote.

## How I approached it

The agent builds a persistent repository symbol graph so cross-file relationships do not have to be rediscovered inside every context window.

A deterministic review layer checks actual filesystem state around edits. The model can suggest what happened, but it cannot overrule the disk.

For operations that can be represented structurally, Operon can bypass free-form generation and use Python’s AST/tokenization machinery for things like imports and symbol renaming.

## Patching without wishful thinking

String replacement is fine until it isn't.

The patching path moves through increasingly tolerant strategies, from exact matches to fuzzy multi-line structures, so the system can handle code that changed under it without pretending the first attempt was perfect.

## The bigger idea

I am less interested in making an agent _look_ autonomous than making the loop accountable to things outside the model.
