# qasimio.me

Personal website for Qasim Sethar.

The implementation is a modern Astro port of the interaction and information-architecture ideas from Brittany Chiang's open-source v4 site, with Qasim's own content and a chronological builder trail.

## Stack

- Astro 7.3.3
- TypeScript
- Tailwind CSS 4.3.3
- MDX
- Inter + Fira Code
- Vercel
- Node 24 / pnpm 11

## Development

```powershell
pnpm install
pnpm approve-builds
pnpm dev
```

## Verification

```powershell
pnpm run check
pnpm run format
pnpm run format:check
pnpm run build
```

The page keeps content visible if client-side JavaScript fails. Motion is progressively enhanced rather than a prerequisite for rendering.
