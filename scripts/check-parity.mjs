/*
 * check-parity.mjs — SEO-инварианты контента (SPEC §11/§14).
 * Сайт ОДНОЯЗЫЧНЫЙ (только en на корне) — паритета ru/uk больше нет. Гейт ловит
 * регрессии, которые astro check не видит: рассинхрон lang↔папка, title > 60 зн.
 *
 * Запуск: node scripts/check-parity.mjs  (exit 1 при нарушениях).
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const COLLECTIONS = ['articles', 'routes', 'restaurants', 'services'];
const ROOT = 'src/content';
const TITLE_MAX = 60;
const LANGS = ['en'];

const errors = [];

/** Все .md файлы коллекции. */
function walk(dir, acc) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith('.md') || name.endsWith('.mdx')) acc.push(p);
  }
  return acc;
}

/** Минимальный парс верхнего frontmatter-блока в плоскую карту нужных ключей. */
function parseFront(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return null;
  const fm = m[1];
  const pick = (key) => {
    const r = fm.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'));
    if (!r) return undefined;
    return r[1].trim().replace(/^['"]|['"]$/g, '');
  };
  return {
    lang: pick('lang'),
    slug: pick('slug'),
    title: pick('title'),
    category: pick('category'),
  };
}

let fileCount = 0;
for (const col of COLLECTIONS) {
  const base = join(ROOT, col);
  let files;
  try {
    files = walk(base, []);
  } catch {
    continue; // коллекции может не быть
  }
  for (const file of files) {
    fileCount++;
    const rel = file.replace(/\\/g, '/');
    // Определяем папку языка по сегменту пути (на R сайт одноязычный — только /en/).
    const langDir = LANGS.find((l) => new RegExp(`/${l}/`).test(rel)) ?? 'en';
    const data = parseFront(readFileSync(file, 'utf8'));
    if (!data) {
      errors.push(`${rel}: нет frontmatter`);
      continue;
    }
    // lang в frontmatter должен совпадать с папкой и быть из допустимого набора.
    if (data.lang && !LANGS.includes(data.lang)) {
      errors.push(`${rel}: lang='${data.lang}' не из набора [${LANGS.join(', ')}]`);
    }
    if (data.lang && data.lang !== langDir) {
      errors.push(`${rel}: lang='${data.lang}', а файл в папке /${langDir}/`);
    }
    // title ≤ 60 (articles/routes; у restaurants title нет).
    if (data.title && [...data.title].length > TITLE_MAX) {
      errors.push(`${rel}: title ${[...data.title].length} зн. > ${TITLE_MAX} — «${data.title}»`);
    }
  }
}

if (errors.length) {
  console.error(`[check-parity] НАРУШЕНИЯ (${errors.length}):`);
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
console.log(
  `[check-parity] OK — ${fileCount} файлов; сайт одноязычный (en), lang↔папка, title ≤${TITLE_MAX} в норме.`,
);
