import type { APIRoute } from 'astro';
import { buildRssResponse } from '../lib/rss';

/** /rss.xml — англоязычный фид (en на корне). */
export const GET: APIRoute = ({ site }) => buildRssResponse('en', site);
