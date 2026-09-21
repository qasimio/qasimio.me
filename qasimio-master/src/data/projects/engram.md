---
title: 'Engram'
summary: 'A knowledge system for documents, retrieval, memory, and the parts of AI assistants that forget too easily.'
type: product
status: active
year: 2026
featured: true
order: 20
role: 'Creator / engineer'
tags: [AI, retrieval, FastAPI, PostgreSQL, agents]
visual: engram
links:
  - label: 'GitHub'
    url: 'https://github.com/qasimio/Engram'
stats:
  - value: 'Hybrid'
    label: 'retrieval'
  - value: 'Async'
    label: 'ingestion'
  - value: 'MCP'
    label: 'agent interface'
proof:
  - value: 'Sparse + dense'
    label: 'retrieval'
  - value: 'RRF'
    label: 'fusion'
  - value: 'MCP'
    label: 'integration'
pullQuote: 'Save it once. Ask for it later.'
---

## The problem

I kept creating the same problem twice: once when I learned something, and again when I forgot where I had put it.

Notes lived in files. Files lived in folders. Useful answers were buried in old repositories and screenshots. Everything was technically searchable. None of it was pleasant enough to become a habit.

Engram started as an attempt to make memory less annoying.

## What I built

The system ingests documents and other sources in the background, keeps work isolated by workspace, retrieves with both sparse and dense signals, reranks candidates, and then asks a model to synthesize an answer from that evidence.

The important architectural choice is that slow ingestion is not allowed to block the main request path.

## The part I care about

A model can produce an answer even when the evidence is weak. I don't find that impressive.

The interesting behavior is what happens when the system cannot support an answer.

Engram is designed around grounded synthesis and an explicit not-found path instead of making something up because the model feels like it should.

## Where it is now

Still in development.

Some parts are solid. Some are being pulled apart because I learned they were solving an engineering problem rather than a user problem. That distinction gets more expensive the later you discover it.
