# qasimio.me — Design master

This implementation intentionally follows the information architecture and interaction language of Brittany Chiang's v4 personal site, while using Qasim Sethar's own content, assets, project material, and links.

Reference:

- https://v4.brittanychiang.com/
- https://github.com/bchiang7/v4

Key decisions:

- Desktop: fixed top navigation, left social rail, right email rail, centered content column.
- Home: hero → about → tabbed experience → chronological builder trail → featured projects → noteworthy projects → writing → contact.
- Mobile: fixed top nav with sliding menu; rails collapse away.
- Motion: entrance/scroll reveals, loader, tab transitions, nav hide/show, hover motion, and native Astro page transitions.
- Robustness: content is visible by default. JavaScript adds animation classes only; a client-side failure cannot make the entire page disappear.
- Icons: social links are inline SVG icons, never text abbreviations.
- Content: the repository data file is the source of truth for current project, timeline, experience, and journal metadata.
