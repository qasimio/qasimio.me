---
title: "Engram"
summary: "A personal knowledge system built around grounded retrieval, persistent context, and an interface between memory and agents."
type: product
status: active
year: 2026
featured: true
order: 10
tags:
  - RAG
  - Search
  - Agents
  - Knowledge
role: "Founder / engineer"
links:
  - label: "GitHub"
    url: "https://github.com/qasimio/Engram"
stats:
  - value: "Hybrid"
    label: "retrieval"
  - value: "Async"
    label: "ingestion"
  - value: "MCP"
    label: "integration"
pullQuote: "Memory should return evidence, not confident guesses."
---

## Why it exists

Most personal knowledge tools stop at storage. The interesting problem starts afterward: can a system retrieve the right thing, preserve where it came from, and give an agent enough context to act without inventing the rest?

Engram is my attempt at that problem.

## The system

The project combines sparse and dense retrieval, reranking, asynchronous ingestion, workspace-first isolation, and grounded synthesis. The architecture is designed so retrieval, evidence, and generation remain distinct concerns rather than one opaque prompt pipeline.

Its ingestion path is asynchronous by design, moving expensive parsing and indexing away from the API request path.

## The constraint

The model is allowed to be uncertain. The system is not allowed to hide that uncertainty.

When the retrieved evidence does not support an answer, the synthesis layer is designed to return an explicit not-found state instead of silently falling back to whatever the model happens to remember.

## Where it is now

Still in development. The system is deliberately being built slowly because the interesting part is not making a chatbot. It is making memory trustworthy enough to become infrastructure.
