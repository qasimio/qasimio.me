---
title: "MQNotebook"
summary: "A local-first retrieval system built around scanned PDFs, spreadsheets, presentation notes, and documents that refuse to behave like clean text."
type: system
status: shipped
year: 2025
featured: false
order: 60
role: "Engineer"
tags: [RAG, OCR, Python, Retrieval, Documents]
links:
  - label: "GitHub"
    url: "https://github.com/qasimio/MQNotebook"
pullQuote: "Real documents are messier than Markdown."
---

## The constraint

Real documents are not clean Markdown.

They arrive as scans, multi-sheet workbooks, presentation notes, inconsistent layouts, and files that lock themselves at exactly the moment you need them.

MQNotebook was a local-first attempt at making retrieval survive that reality.

## The system

The pipeline wraps OCR and document extraction before indexing, then combines dense retrieval with reranking so semantic matching is less dependent on a single embedding score.

The project became one of the stepping stones toward the retrieval architecture I now explore in larger systems.
