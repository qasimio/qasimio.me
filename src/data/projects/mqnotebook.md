---
title: "MQNotebook"
summary: "A local-first retrieval system built around the messy reality of scanned PDFs, spreadsheets, and documents that refuse to behave like clean text."
type: system
status: shipped
year: 2025
featured: false
order: 70
tags:
  - RAG
  - OCR
  - Python
  - Retrieval
role: "Engineer"
links:
  - label: "GitHub"
    url: "https://github.com/qasimio/MQNotebook"
---

## The constraint

Real documents are not clean Markdown.

They arrive as scans, multi-sheet workbooks, presentation notes, inconsistent layouts, and files that lock themselves at exactly the moment you need them.

MQNotebook was a local-first attempt at making retrieval survive that reality.

## The system

The pipeline wraps OCR and document extraction before indexing, then combines dense retrieval with reranking to make semantic matching less dependent on a single embedding score.

The project eventually became one of the stepping stones toward the retrieval architecture I am now exploring in larger systems.
