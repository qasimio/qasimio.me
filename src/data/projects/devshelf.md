---
title: 'DevShelf'
summary: 'A vertical search engine built from first principles because using one is not the same as understanding one.'
type: system
status: shipped
year: 2025
featured: false
order: 50
role: 'Engineer'
tags: [Java, information retrieval, data structures]
links:
  - label: 'GitHub'
    url: 'https://github.com/qasimio/DevShelf'
stats:
  - value: 'O(1)'
    label: 'keyword lookup'
  - value: 'Trie'
    label: 'prefix matching'
  - value: 'offline'
    label: 'indexing pipeline'
pullQuote: 'Calling a search engine is not the same as understanding one.'
visual: devshelf
---

## Why build a search engine yourself?

Because calling a search engine is not the same thing as understanding one.

DevShelf was an engineering project built without an external indexing engine. It uses a positional inverted index, prefix matching, and a separate offline indexing pipeline so the important parts of retrieval are visible instead of hidden behind a service.

## What stayed with me

Search becomes interesting when you have to make the small decisions yourself: tokenization, index layout, positions, prefix behavior, and the boundary between expensive indexing work and cheap query-time work.

This was not a product. It was me trying to understand a system properly.
