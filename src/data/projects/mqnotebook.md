---
title: 'MQNotebook'
summary: 'A local-first retrieval system designed for real documents: scans, spreadsheets, slides, and files that refuse to stay neat.'
type: system
status: shipped
year: 2025
featured: false
order: 60
role: 'Engineer'
tags: [RAG, OCR, Python, retrieval, documents]
links:
  - label: 'GitHub'
    url: 'https://github.com/qasimio/MQNotebook'
stats:
  - value: 'OCR'
    label: 'scanned docs'
  - value: 'hybrid'
    label: 'retrieval'
  - value: '~60%'
    label: 'context savings'
pullQuote: 'Real documents are messier than Markdown.'
visual: mqnotebook
---

## The constraint

Real documents are messy.

They arrive as scans, multi-sheet workbooks, presentation notes, inconsistent layouts, and files that lock themselves at the worst possible time.

MQNotebook was an attempt to make retrieval survive that reality.

## The system

The pipeline combines OCR and document extraction with dense retrieval and reranking so a single similarity score is not responsible for the whole answer.

It became one of the stepping stones toward the retrieval architecture I now use in larger systems.
