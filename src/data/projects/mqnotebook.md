---
title: 'MQNotebook'
eyebrow: 'SYSTEM · DOCUMENT AI'
summary: 'A local-first document retrieval system built for messy PDFs, OCR, presentations, and spreadsheets.'
type: 'System'
status: 'Earlier work'
year: 2025
featured: false
order: 7
tags: ['Python', 'RAG', 'OCR', 'LlamaIndex']
role: 'Engineer'
links:
  - { label: 'GitHub', url: 'https://github.com/qasimio/MQNotebook' }
stats:
  - { value: '~40%', label: 'reported retrieval precision gain' }
  - { value: '60%', label: 'reported token reduction' }
pullQuote: 'Real documents are messier than the demo PDFs everybody uses.'
---

MQNotebook came from treating document retrieval as a hostile environment instead of a clean benchmark.

It handled scanned PDFs, OCR, slide notes, and multi-sheet spreadsheets, then added hybrid retrieval and reranking. The project was where I learned to care about the ingestion path as much as the retrieval model.
