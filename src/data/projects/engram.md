---
title: 'Engram'
year: 2026
category: 'AI / Knowledge'
description: 'A persistent knowledge system for turning documents and conversations into retrievable context.'
featured: true
order: 1
---

## Why I built it

I wanted a system where an assistant could use information that actually belonged to the person and workspace it was operating in.

## What I built

The system combines document ingestion, asynchronous workers, hybrid retrieval, reranking, workspace isolation, grounded synthesis, and an interface for working with persistent knowledge.

## The hard part

The interesting problem was not getting a model to answer. It was controlling what the model was allowed to claim when the underlying evidence was incomplete.

## What changed

The project moved from a local experiment toward a product-shaped system. I closed the public build temporarily while continuing the architecture.
