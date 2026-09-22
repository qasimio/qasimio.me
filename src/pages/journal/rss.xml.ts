import rss from '@astrojs/rss';
import { notes } from '../../data/site';

export async function GET(context) {
  return rss({
    title: 'Qasim Sethar — Journal',
    description: 'Short notes from things Qasim built, learned, broke, and kept thinking about.',
    site: context.site ?? 'https://qasimio.me',
    items: notes.map((note) => ({
      title: note.title,
      description: note.excerpt,
      pubDate: new Date(note.date),
      link: note.href,
    })),
  });
}
