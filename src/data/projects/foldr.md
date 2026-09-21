---
title: 'FOLDR'
summary: 'A cross-platform file automation tool that makes cleanup reversible, previewable, and boring enough to trust.'
type: open-source
status: shipped
year: 2026
featured: true
order: 20
role: 'Creator / maintainer'
tags: [Python, CLI, automation, open source, filesystem]
links:
  - label: 'GitHub'
    url: 'https://github.com/qasimio/foldr'
  - label: 'PyPI'
    url: 'https://pypi.org/project/foldr/'
  - label: 'Docs'
    url: 'https://docs.qasimio.me/docs/foldr/start-here'
stats:
  - value: '7.3k+'
    label: 'downloads'
  - value: '100-star'
    label: 'milestone'
  - value: '30+'
    label: 'categories'
pullQuote: 'People have better things to do than sort files manually.'
visual: foldr
---

## The annoyance

I got tired of sorting files.

Not because it is difficult. Because doing the same stupid thing over and over is a good way to waste an afternoon.

The problem with automation is that people get nervous the moment a script can touch their files.

So FOLDR is built around a simple promise: show me what you are about to do, and let me undo it.

## What shipped

FOLDR can classify and organize files, preview planned operations, watch directories in the background, detect duplicates, and keep a history of changes for rollback.

The watcher uses filesystem events rather than hammering the disk with constant polling. The package is published to PyPI and intended to work across Windows, macOS, and Linux.

## What shipping changed

Code being correct is only the beginning.

Once strangers install the package, documentation, packaging, compatibility, error messages, and boring edge cases become part of the product.

That transition is probably the most useful thing FOLDR has taught me.
