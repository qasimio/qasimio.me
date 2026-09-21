import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect }) => redirect('/journal/rss.xml', 301);
