---
title: 'FOLDR'
summary: 'A cross-platform file automation tool that previews changes, remembers what it did, and gives you a way back.'
type: open-source
status: shipped
year: 2026
featured: true
order: 10
role: 'Creator / maintainer'
tags: [Python, CLI, automation, open source]
visual: foldr
links:
  - label: 'GitHub'
    url: 'https://github.com/qasimio/foldr'
  - label: 'PyPI'
    url: 'https://pypi.org/project/foldr/'
  - label: 'Docs'
    url: 'https://docs.qasimio.me/docs/foldr/start-here'
stats:
  - value: '100+'
    label: 'GitHub stars'
  - value: '7.3k+'
    label: 'downloads'
  - value: '3'
    label: 'desktop platforms'
proof:
  - value: '100+'
    label: 'stars'
  - value: '7.3k+'
    label: 'downloads'
  - value: '3'
    label: 'platforms'
pullQuote: 'People have better things to do than sorting files manually.'
---

## Why I built it

My Downloads folder kept becoming the same mess. Screenshots, PDFs, installers, archives, code, random files I would definitely need later. I kept cleaning it by hand and then doing the same thing again.

That was enough of a reason to build FOLDR.

## The important part was not sorting

Moving a file is easy. Moving a file and making somebody trust you is harder.

So FOLDR is built around previewing planned changes, keeping history, and making undo part of the design instead of a rescue feature. It watches folders, applies rules, and tries very hard not to surprise the person running it.

The project is published to PyPI and has grown from a small script into software that strangers actually install.

## What changed after people used it

Then the annoying edge cases arrived. Conflict names. Ignore files. Recursive folders. Watch mode. Windows behavior. Tests for files that look like one thing and are actually another.

That was the point where it stopped feeling like a script and started feeling like software other people could depend on.

## What I learned

The best feature in an automation tool is confidence.

Preview the work. Keep the history. Make the escape hatch obvious.

Speed is nice. Knowing you can undo the damage is nicer.
