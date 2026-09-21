# qasimio.me v3 design system

## Direction

The site is a personal headquarters, not a portfolio template. The visual language is editorial, technical, warm, and deliberately restrained.

## Palette

Dark mode uses Obsidian `#0b0c0f`, warm white `#f5f3ec`, and Cobalt `#8290ff` as the single accent.

Light mode uses Bone `#f5f3ed`, Ink `#15161a`, and a deeper Cobalt `#3f53db` for contrast.

Pure black and pure white are avoided so both modes remain easier on the eyes and feel less like a code editor default.

## Type

- Manrope: primary UI and display sans
- DM Serif Display: restrained editorial emphasis
- IBM Plex Mono: metadata, labels, and technical surfaces

Headings intentionally use 700–800 weights. The previous version leaned too thin; this version gets its character from weight, spacing, and composition instead of hairline typography.

## Motion

The site uses Astro View Transitions / ClientRouter, scroll reveals, hover movement, and subtle header/scroll feedback. Motion is always subordinate to navigation and hierarchy, and all reveal effects yield to `prefers-reduced-motion`.

## Theme behavior

Dark is the default. The theme switch stores an explicit light/dark preference in localStorage. The page can still switch for the current session if browser storage is unavailable.

## Things intentionally absent

No gradients as decorative backgrounds, no 3D canvas, no social feed, no likes/comments, no database, and no decorative tech-logo wall.
