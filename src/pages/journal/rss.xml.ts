import type { APIContext } from 'astro';
import rss from '@astrojs/rss';
import { notes, site } from '../../data/site';

export function GET(context: APIContext) {
  return rss({
    title: `${site.name} — Journal`,
    description: 'Short notes from things Qasim Sethar is building, learning, and shipping.',
    site: context.site ?? 'https://qasimio.me',
    items: notes.map((note) => ({
      title: note.title,
      description: note.excerpt,
      pubDate: new Date(note.date),
      link: note.external ?? `/journal/${note.slug}/`,
    })),
  });
}
