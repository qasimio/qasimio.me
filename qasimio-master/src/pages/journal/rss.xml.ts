import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async (context) => {
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  const items = notes
    .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())
    .map((entry) => ({
      title: entry.data.title,
      description: entry.data.excerpt,
      pubDate: entry.data.publishedAt,
      link: `/journal/notes/${entry.id}/`,
    }));

  return rss({
    title: 'Qasim Sethar — Journal',
    description: 'Short notes, build logs, observations, and things worth keeping.',
    site: context.site ?? 'https://qasimio.me',
    items,
    customData: '<language>en</language>',
  });
};
