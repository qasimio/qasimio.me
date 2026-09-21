---
title: "DevShelf"
summary: "A vertical search engine built from first principles to understand what search has to do before a library makes it look easy."
type: system
status: shipped
year: 2025
featured: false
order: 50
role: "Engineer"
tags: [Java, Information Retrieval, Data Structures]
links:
  - label: "GitHub"
    url: "https://github.com/qasimio/DevShelf"
pullQuote: "Calling a search engine is not the same as understanding one."
---

## Why build one yourself?

Because calling a search engine is not the same as understanding one.

DevShelf was built without relying on an external indexing engine. It uses a positional inverted index, prefix matching, and a decoupled offline indexing pipeline so retrieval behavior is visible and measurable.

## What it taught me

Search is full of small decisions that become invisible when a managed engine handles them: tokenization, positional data, prefix behavior, index layout, and the boundary between indexing work and query-time work.

This was an engineering project, not a product. That distinction matters.
