# qasimio.me

A custom personal site for Qasim Sethar, built as a living record of work, notes, people, and things worth keeping.

## Stack

- Astro 7
- TypeScript
- Tailwind CSS 4
- MDX / Content Collections
- Vercel

## Local development

```powershell
pnpm install
pnpm run dev
```

Validation:

```powershell
pnpm run check
pnpm run format:check
pnpm run build
```

## Content

- `src/data/projects` — project case studies
- `src/data/notes` — short-form journal entries
- `src/data/essays` — long-form writing
- `src/data/site.ts` — site-wide profile data

## Publishing

Push to `main` for the production Vercel deployment. Keep `qasimio.me` connected only after the production build is verified.
