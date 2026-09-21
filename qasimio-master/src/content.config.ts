import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({
  label: z.string(),
  url: z.string().url(),
});

const stat = z.object({
  value: z.string(),
  label: z.string(),
});

const projectSchema = z.object({
  title: z.string(),
  summary: z.string(),
  type: z.enum(['product', 'open-source', 'system', 'community', 'experiment']),
  status: z.enum(['active', 'shipped', 'ongoing', 'paused', 'archived']),
  year: z.number().int(),
  featured: z.boolean().default(false),
  order: z.number().int().default(0),
  role: z.string(),
  tags: z.array(z.string()).default([]),
  visual: z.string(),
  liveUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  links: z.array(link).default([]),
  stats: z.array(stat).default([]),
  proof: z.array(stat).default([]),
  pullQuote: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/projects' }),
  schema: projectSchema,
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/notes' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.coerce.date(),
    type: z.enum(['update', 'achievement', 'observation', 'build', 'link']),
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
