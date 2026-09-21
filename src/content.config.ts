import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const links = z.array(
  z.object({
    label: z.string(),
    url: z.string().url(),
  }),
);

const stats = z.array(
  z.object({
    value: z.string(),
    label: z.string(),
  }),
);

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/projects' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    type: z.string(),
    status: z.string(),
    year: z.number().int(),
    featured: z.boolean().default(false),
    order: z.number().int().default(0),
    tags: z.array(z.string()).default([]),
    role: z.string(),
    links,
    stats: stats.default([]),
    pullQuote: z.string().optional(),
    image: z.string().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/notes' }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    type: z.enum(['build', 'release', 'people', 'thought', 'note']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    externalUrl: z.string().url().optional(),
  }),
});

const essays = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/essays' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, notes, essays };
