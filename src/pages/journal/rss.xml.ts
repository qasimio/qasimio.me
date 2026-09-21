import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../../../data/site';

export async function GET(context) {
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  return rss({
    title: `${site.name} — Journal`,
    description: 'Short notes from Qasim Sethar.',
    site: context.site,
    items: notes
      .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())
      .map((entry) => ({
        title: entry.data.title,
        pubDate: entry.data.publishedAt,
        link: `/journal/notes/${entry.id}/`,
      })),
  });
}
