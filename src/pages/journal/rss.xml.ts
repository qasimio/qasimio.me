import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const escapeXml = (value: string) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');

export const GET: APIRoute = async ({ site }) => {
  const notes = (await getCollection('notes', ({ data }) => !data.draft))
    .sort((a, b) => (b.data.publishedAt?.getTime() ?? 0) - (a.data.publishedAt?.getTime() ?? 0));
  const base = site ?? new URL('https://qasimio.me');

  const items = notes.map((entry) => {
    const url = new URL(`/journal/notes/${entry.id}/`, base).toString();
    const pubDate = entry.data.publishedAt?.toUTCString();
    return `\n<item>\n<title>${escapeXml(entry.data.title)}</title>\n<link>${url}</link>\n<guid>${url}</guid>${pubDate ? `\n<pubDate>${pubDate}</pubDate>` : ''}\n</item>`;
  }).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>Qasim Sethar — Notes</title><link>${base}</link><description>Short notes from Qasim Sethar.</description>${items}\n</channel></rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
