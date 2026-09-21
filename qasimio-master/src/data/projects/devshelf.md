---
title: 'DevShelf'
summary: 'A vertical search engine for computer-science literature, built from first principles to understand what an index actually does.'
type: system
status: shipped
year: 2025
featured: false
order: 60
role: 'Engineer'
tags: [Java, information retrieval, algorithms]
visual: devshelf
links:
  - label: 'GitHub'
    url: 'https://github.com/qasimio/DevShelf'
stats:
  - value: 'Java'
    label: 'implementation'
  - value: 'Trie'
    label: 'prefix matching'
  - value: 'O(1)'
    label: 'targeted lookup'
proof:
  - value: 'Inverted index'
    label: 'positional search'
  - value: 'Trie'
    label: 'prefix matching'
  - value: 'Offline'
    label: 'index generation'
pullQuote: 'I wanted to understand search well enough to build one.'
---

## Why build search from scratch?

Because saying “I know search” after plugging in somebody else's indexing engine felt a little too easy.

DevShelf is a first-principles vertical search engine for technical documents, using a positional inverted index and Trie-based prefix matching.

## What it taught me

The useful part was not getting a query to return a result. It was deciding what information the index should preserve, keeping indexing separate from querying, and watching data structures change the system's behavior.

That work became the foundation for how I approached retrieval in later projects.
