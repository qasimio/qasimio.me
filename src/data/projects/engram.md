---
title: 'Engram'
summary: 'A knowledge system built around grounded retrieval, persistent context, and an interface between memory and agents.'
type: product
status: active
year: 2026
featured: true
order: 10
role: 'Founder / engineer'
tags: [RAG, Search, Agents, Knowledge, PostgreSQL, MCP]
links:
  - label: 'GitHub'
    url: 'https://github.com/qasimio/Engram'
stats:
  - value: 'Hybrid'
    label: 'retrieval'
  - value: 'Async'
    label: 'ingestion'
  - value: 'MCP'
    label: 'integration'
pullQuote: 'Memory should return evidence, not confident guesses.'
---

## Why it exists

Most personal knowledge tools stop at storage. The interesting problem starts afterward: can a system retrieve the right thing, preserve where it came from, and give an agent enough context to act without inventing the rest?

Engram is my attempt at that problem.

## The architecture

The system combines sparse and dense retrieval, Reciprocal Rank Fusion, reranking, asynchronous ingestion, workspace-first isolation, and grounded synthesis. Retrieval, evidence, and generation stay distinct instead of collapsing into one opaque prompt pipeline.

The ingestion path is asynchronous so expensive parsing, indexing, scraping, and synchronization do not live on the main API request path.

## The hard constraint

The model is allowed to be uncertain. The system is not allowed to hide that uncertainty.

When retrieved evidence does not support an answer, the intended behavior is an explicit not-found result rather than a confident fallback to model memory.

## Where it is now

Still in development. The goal is not another chatbot. The interesting problem is whether personal memory can become trustworthy enough to act as infrastructure for other software.
