# Master build notes

This version is a deliberate reset of the site's presentation and content hierarchy.

## What changed

- Primary positioning is clear before the poetic layer.
- Home is an orientation + evidence page, not a résumé.
- Work is evidence and case studies.
- Journal is a public log, separate in purpose from Work.
- About is the person and the context around the work.
- Contact has a concrete reason to reach out.
- Typography uses Plus Jakarta Sans for weight and clarity, Newsreader for editorial emphasis, and IBM Plex Mono for metadata.
- Palette uses teal, violet, and coral semantically rather than as random decoration.
- Dark mode is the primary surface, with a warm bone light mode.
- Project visuals are explanatory UI/diagrams rather than abstract decoration.
- Proof metrics are labeled.
- FOLDR, Engram, Operon, SlotFinder, SIBA Launchpad, DevShelf, and MQNotebook are represented with human-written working copy.
- Short-form Notes stay owned by the site; X remains a distribution channel.
- Motion is restrained, multi-page, keyboard-aware, and reduced-motion friendly.

## Before publication

Verify changing metrics such as FOLDR stars/downloads and update them from the source dashboards immediately before launch.

Verify the exact official names/status wording of GitHub programs before publishing those claims.

Replace CSS project visuals with real product screenshots, traces, architecture diagrams, or demo clips as they become available.

Review all first-person copy and edit anything that does not sound like Qasim. The site must read like a person who was there, not like a content generator.

Generate and commit `pnpm-lock.yaml` on the target Windows environment after extraction, then keep it committed so CI can be made fully frozen.
