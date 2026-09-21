# qasimio.me

The personal site for Qasim Sethar.

## Stack

- Astro 7
- TypeScript
- Tailwind CSS 4
- MDX
- Vercel
- Content Collections via Astro's Content Layer

## Local development

```powershell
pnpm install
pnpm dev
```

## Validation

```powershell
pnpm run check
pnpm run format:check
pnpm run build
```

## Content

Projects live in `src/data/projects/`.

Short-form notes live in `src/data/notes/`.

Long-form writing lives in `src/data/essays/`.

The schemas are defined in `src/content.config.ts`.

## Routes

- `/` home
- `/work/` projects
- `/work/[slug]/` case studies
- `/journal/` notes + essays
- `/journal/notes/[slug]/` short-form posts
- `/journal/essays/[slug]/` long-form posts
- `/about/` person, milestones, contact
- `/resume.pdf` résumé
- `/journal/rss.xml` RSS feed for notes

## Deployment

The site is static and deploys to Vercel. Add `qasimio.me` only after the new production deployment has been verified.
