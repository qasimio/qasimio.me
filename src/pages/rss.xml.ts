import { getCollection } from 'astro:content';

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('\"', '&quot;')
    .replaceAll("'", '&apos;');

export async function GET(context) {
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  const items = notes
    .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())
    .map(
      (entry) => `
        <item>
          <title>${escapeXml(entry.data.title)}</title>
          <link>${new URL(`/journal/notes/${entry.id}/`, context.site)}</link>
          <guid>${new URL(`/journal/notes/${entry.id}/`, context.site)}</guid>
          <pubDate>${entry.data.publishedAt.toUTCString()}</pubDate>
        </item>`,
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Qasim Sethar</title>
      <link>${context.site}</link>
      <description>A record of things built and thoughts worth keeping.</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
