---
title: "DevShelf"
summary: "A vertical search engine built from first principles to understand what a search engine actually has to do before a library makes it look easy."
type: system
status: shipped
year: 2025
featured: false
order: 60
tags:
  - Java
  - Information Retrieval
  - Data Structures
role: "Engineer"
links:
  - label: "GitHub"
    url: "https://github.com/qasimio/DevShelf"
---

## Why build a search engine yourself?

Because calling one is not the same as understanding one.

DevShelf was built without leaning on an external indexing engine. The project uses a positional inverted index, prefix matching, and a decoupled offline indexing pipeline to make retrieval behavior visible and measurable.

## What it taught me

Search is full of tiny decisions that become invisible when a managed engine handles them for you: tokenization, positional data, prefix behavior, index layout, and the boundary between indexing work and query-time work.

This was an engineering project rather than a product. That distinction matters, and the site keeps it.
