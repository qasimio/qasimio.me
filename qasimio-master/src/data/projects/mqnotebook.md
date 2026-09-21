---
title: 'MQNotebook'
summary: 'A local retrieval system built for the messy documents real people keep: scans, spreadsheets, slides, and files that refuse to behave.'
type: system
status: shipped
year: 2025
featured: false
order: 70
role: 'Engineer'
tags: [Python, RAG, OCR, retrieval]
visual: mqnotebook
links:
  - label: 'GitHub'
    url: 'https://github.com/qasimio/MQNotebook'
stats:
  - value: 'OCR'
    label: 'scanned documents'
  - value: 'Hybrid'
    label: 'retrieval'
  - value: '~60%'
    label: 'context savings'
proof:
  - value: 'OCR'
    label: 'scanned files'
  - value: 'Hybrid'
    label: 'retrieval'
  - value: '~60%'
    label: 'context savings'
pullQuote: 'Real documents are messier than Markdown.'
---

## The constraint

Real documents are messy.

Scanned PDFs. Multi-sheet workbooks. Presentation notes. Files that decide to lock themselves at exactly the wrong moment.

MQNotebook was an attempt to make retrieval survive that reality.

## The system

The pipeline combines extraction and OCR with hybrid retrieval and reranking so a single similarity score is not responsible for the whole answer.

The project also became one of the stepping stones toward the retrieval architecture I use in larger systems.

## What stayed with me

A retrieval system is only as good as the ugly input it can survive.
