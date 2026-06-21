/**
 * RSS 2.0 фид по языку (узел дистрибуции — Telegram/email/агрегаторы, DIST-R1-04).
 * Без зависимостей: собираем валидный XML руками. По одному фиду на язык —
 * /rss.xml (en), /ru/rss.xml, /uk/rss.xml. В фид попадают только опубликованные
 * статьи (не draft, не demo) этого языка, по publishedAt desc, максимум 30.
 * Пустая коллекция → валидный пустой channel (наполнится по мере выхода статей).
 */
import { getCollectionSafe } from '../loaders/getCollectionSafe';
import { articleHref, langPrefix, t, type Lang } from '../i18n';

const MAX_ITEMS = 30;
const FALLBACK_ORIGIN = 'https://macedoniaguidebook.com';

/** Экранирование для XML-текста (title/description могут содержать &, <, >, "). */
function esc(s: string): string {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export async function buildRssResponse(lang: Lang, site: URL | undefined): Promise<Response> {
  const origin = (site ?? new URL(FALLBACK_ORIGIN)).origin;
  const dict = t(lang);

  const entries = (await getCollectionSafe('articles', (e) => e.data.draft !== true))
    .filter((e) => e.data.lang === lang && e.data.demo !== true)
    .sort((a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime())
    .slice(0, MAX_ITEMS);

  const channelLink = `${origin}${langPrefix(lang)}/`;
  const selfLink = `${origin}${langPrefix(lang)}/rss.xml`;
  const lastBuild = entries[0]?.data.updatedAt ?? entries[0]?.data.publishedAt;

  const items = entries
    .map((e) => {
      const link = `${origin}${articleHref(lang, e.data.category, e.data.slug)}`;
      return [
        '    <item>',
        `      <title>${esc(e.data.title)}</title>`,
        `      <link>${link}</link>`,
        `      <guid isPermaLink="true">${link}</guid>`,
        `      <description>${esc(e.data.description)}</description>`,
        `      <pubDate>${e.data.publishedAt.toUTCString()}</pubDate>`,
        '    </item>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '  <channel>',
    `    <title>${esc(dict.siteName)}</title>`,
    `    <link>${channelLink}</link>`,
    `    <atom:link href="${selfLink}" rel="self" type="application/rss+xml" />`,
    `    <description>${esc(dict.tagline)}</description>`,
    `    <language>${lang}</language>`,
    lastBuild ? `    <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>` : '',
    items,
    '  </channel>',
    '</rss>',
    '',
  ]
    .filter((line) => line !== '')
    .join('\n');

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
