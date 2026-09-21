import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
export async function GET(context) {
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  return rss({
    title: 'Qasim Sethar — Journal',
    description: 'Notes from building, shipping, breaking, and learning.',
    site: context.site!,
    items: notes.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.publishedAt,
      description: entry.data.excerpt,
      link: `/journal/notes/${entry.id}/`,
    })),
  });
}
