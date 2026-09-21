# qasimio.me design system

## Idea

The site should feel like a personal workshop with the doors open.

It is editorial, technical, warm, and exact. The work is the proof. The interface is the memory aid.

## Palette

Dark surface: `#0a1515`
Dark panel: `#101c1d`
Light surface: `#f4f1e8`
Light panel: `#fbfaf6`
Teal: `#53c8be`
Violet: `#aaa1f0`
Coral: `#f0957c`

Teal = action, software, shipping.
Violet = notes, thinking, reflection.
Coral = people, contact, human context.

## Type

Plus Jakarta Sans is the main voice. Newsreader is the occasional editorial voice. IBM Plex Mono handles metadata, dates, states, and technical labels.

The body text must remain readable on a cheap display. Small metadata is allowed; microscopic paragraphs are not.

## Motion

Motion is used for continuity, not decoration.

- Page transitions through Astro ClientRouter.
- Reveal-on-scroll only for long sections.
- Hover movement only when it communicates interactivity.
- Magnetic controls only on pointer-capable devices.
- All motion must respect `prefers-reduced-motion`.

## Content hierarchy

Home = orientation and evidence.
Work = proof and case studies.
Journal = thinking.
About = the person.
Contact = one clear reason to reach out.

## Things we do not add

No fake social feed. No likes. No comments. No skill bars. No logo cemetery. No decorative 3D. No unlabelled metrics. No fabricated testimonials. No performance claims without evidence.
