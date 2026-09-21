---
title: 'Engram'
eyebrow: 'PRODUCT · AI SYSTEMS'
summary: 'A knowledge system for turning documents and conversations into persistent, retrievable context.'
type: 'Product'
status: 'In development'
year: 2026
featured: true
order: 1
tags: ['FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'Celery', 'Next.js']
role: 'Founder / Engineer'
links:
  - { label: 'GitHub', url: 'https://github.com/qasimio/Engram' }
stats:
  - { value: '7', label: 'LLM backends supported' }
  - { value: 'RRF', label: 'hybrid retrieval' }
  - { value: 'MCP', label: 'integration layer' }
pullQuote: 'The interesting part was never the model. It was making the system know what it actually knows.'
---

Engram started from a simple irritation: an assistant can be very good at answering questions and still be terrible at remembering the material you actually gave it.

The system combines asynchronous ingestion, sparse + dense retrieval, reranking, workspace isolation, grounded synthesis, and an abstraction layer for local and hosted models. The design goal is not to make an LLM sound certain. It is to make certainty earn its place.

## The hard part

The model was rarely the hardest component. Retrieval quality, ingestion boundaries, tenant isolation, source attribution, and the failure path mattered more.

The useful constraint became simple: when the evidence is not there, the system should say so instead of quietly filling the gap from training data.

## Architecture

The application separates the request path from ingestion work. Redis and Celery handle background processing; PostgreSQL + pgvector holds structured and vector data; the retrieval layer fuses lexical and semantic evidence before reranking it; the synthesis layer is required to cite the evidence it uses.

## What changed

The project moved from “chat with my files” toward an actual memory system. That shift changed the architecture, the boundaries, and the kinds of bugs worth worrying about.
