import type { APIRoute } from 'astro';
import { buildRssResponse } from '../../lib/rss';

/** /uk/rss.xml — україномовний фід. */
export const GET: APIRoute = ({ site }) => buildRssResponse('uk', site);
