import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const linkSchema = z.object({
  label: z.string(),
  url: z.string().url(),
});

const statSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/data/projects',
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    type: z.enum(['product', 'open-source', 'system', 'community', 'experiment']),
    status: z.enum(['active', 'shipped', 'paused', 'archived']),
    year: z.number().int(),
    featured: z.boolean().default(false),
    order: z.number().int().default(0),
    role: z.string().default('Builder'),
    tags: z.array(z.string()).default([]),
    links: z.array(linkSchema).default([]),
    stats: z.array(statSchema).default([]),
    pullQuote: z.string().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/data/notes',
  }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    type: z.enum(['update', 'achievement', 'build', 'observation', 'link']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    externalUrl: z.string().url().optional(),
  }),
});

const essays = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/data/essays',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, notes, essays };
