---
title: 'Engram'
summary: 'A knowledge system built around retrieval, persistent context, and evidence instead of a chatbot pretending it remembers.'
type: product
status: active
year: 2026
featured: true
order: 10
role: 'Creator / engineer'
tags: [RAG, retrieval, agents, knowledge, PostgreSQL, MCP]
links:
  - label: 'GitHub'
    url: 'https://github.com/qasimio/Engram'
stats:
  - value: 'hybrid'
    label: 'retrieval'
  - value: 'async'
    label: 'ingestion'
  - value: 'MCP'
    label: 'integration'
pullQuote: 'Memory is useful only when you can point to where it came from.'
visual: engram
---

## The question

Most knowledge tools are good at storing things. The harder question starts when you ask the system to use what it stored.

Can it find the right evidence? Can it keep workspaces apart? Can an agent use that context without quietly filling the gaps from its own training data?

That is the problem I keep coming back to with Engram.

## The system

Engram combines sparse and dense retrieval, Reciprocal Rank Fusion, reranking, asynchronous ingestion, workspace-first isolation, and grounded synthesis. The pieces stay separate on purpose. Retrieval is retrieval. Generation is generation. Evidence should not disappear inside one giant prompt.

The ingestion path lives outside the main request thread. Parsing a document, scraping a page, or syncing a repository should not block the request that asked for it.

## A hard boundary

The model is allowed to say **not found**.

That sounds obvious until you build a system where every blank space is an invitation for a language model to make something up.

The current direction is to make the system refuse unsupported answers instead of turning missing evidence into fluent fiction.

## Where it is

Still in development. I am not trying to make another chatbot. I am exploring whether personal memory can become dependable infrastructure for other software.
