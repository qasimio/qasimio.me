import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL('https://qasimio.me/');
  const notes = (await getCollection('notes', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );
  const items = notes
    .map((entry) => {
      const url = new URL(`/journal/notes/${entry.id}/`, base);
      return `<item><title>${escapeXml(entry.data.title)}</title><link>${url.href}</link><guid>${url.href}</guid><pubDate>${entry.data.publishedAt.toUTCString()}</pubDate><description>${escapeXml(entry.data.excerpt)}</description></item>`;
    })
    .join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Qasim Sethar — Journal</title><link>${base.href}</link><description>Notes from the workbench.</description>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
