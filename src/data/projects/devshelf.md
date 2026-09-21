---
title: 'DevShelf'
eyebrow: 'SYSTEM · SEARCH'
summary: 'A first-principles vertical search engine built to understand how retrieval works without hiding behind a search product.'
type: 'System'
status: 'Archived'
year: 2025
featured: false
order: 6
tags: ['Java', 'Information Retrieval', 'Data Structures']
role: 'Engineer'
links:
  - { label: 'GitHub', url: 'https://github.com/qasimio/DevShelf' }
stats:
  - { value: 'O(1)', label: 'keyword lookup target' }
  - { value: 'Trie', label: 'prefix matching' }
pullQuote: 'I wanted to understand search badly enough to stop delegating the interesting parts to Lucene.'
---

DevShelf was a deliberate detour. I wanted to know what a search engine felt like when the index was my problem rather than somebody else's API.

The project used a positional inverted index, prefix matching, and a decoupled offline indexing pipeline. It became the foundation for a lot of the retrieval questions that followed.
