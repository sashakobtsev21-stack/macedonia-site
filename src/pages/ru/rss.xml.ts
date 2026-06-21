import type { APIRoute } from 'astro';
import { buildRssResponse } from '../../lib/rss';

/** /ru/rss.xml — русскоязычный фид. */
export const GET: APIRoute = ({ site }) => buildRssResponse('ru', site);
