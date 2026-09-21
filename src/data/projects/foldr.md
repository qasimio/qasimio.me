---
title: "FOLDR"
summary: "A cross-platform file automation tool that watches folders, previews planned changes, and keeps an undo trail when automation inevitably gets ideas."
type: open-source
status: shipped
year: 2026
featured: true
order: 20
role: "Creator / maintainer"
tags: [Python, CLI, Automation, Open Source, Filesystem]
links:
  - label: "GitHub"
    url: "https://github.com/qasimio/foldr"
  - label: "PyPI"
    url: "https://pypi.org/project/foldr/"
  - label: "Docs"
    url: "https://docs.qasimio.me/docs/foldr/start-here"
stats:
  - value: "7.3k+"
    label: "downloads"
  - value: "100+"
    label: "stars"
  - value: "30+"
    label: "categories"
pullQuote: "People have better things to do than sort files manually."
---

## The annoyance

Manual file cleanup is one of those problems people accept because the alternative usually feels more dangerous than the mess.

FOLDR is built around making automation reversible.

## What it does

It can organize files by type, preview a planned operation before execution, watch directories in the background, detect duplicates, and retain enough history to undo changes.

The watcher is built around native filesystem events through the cross-platform watchdog layer instead of endlessly polling folders.

## What changed after shipping

The project moved beyond being a local experiment. It was published to PyPI, accumulated real downloads and stars, and began getting used by people who had no reason to care about the implementation details.

That is the important transition: once someone else relies on the software, packaging, documentation, reversibility, and boring edge cases become product work.

## What it taught me

A useful open-source project is partly code and partly distribution. The difference between "works on my machine" and "another person can trust installing this" is much bigger than it looks from inside the repository.
