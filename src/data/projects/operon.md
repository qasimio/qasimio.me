---
title: 'Operon'
year: 2026
category: 'Agent / Developer Tool'
description: 'A terminal-native autonomous coding agent built around deterministic verification.'
featured: true
order: 2
---

## Why I built it

Coding agents are very good at describing what they intended to do. I wanted one whose environment could prove what actually changed.

## What I built

Operon combines a repository symbol graph, structured AST operations, a filesystem verification layer, patch application, and human approval gates around an autonomous loop.

## The hard part

The failure mode was surprisingly concrete: an agent can report success while the filesystem disagrees. Verification therefore has to happen outside the model.

## What I learned

The most useful agent design decisions were often the ones that reduced the amount of trust given to the agent.
