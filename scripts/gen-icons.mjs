/**
 * gen-icons.mjs — генерирует фавикон и иконочное семейство из флага Северной
 * Македонии (красное поле #D20000 + золотое восьмилучевое солнце #FFE600).
 * Геометрия солнца — та же, что в public/images/mk-flag.svg (центр 600,400),
 * квадратно обрезанная по центру солнца (viewBox 200 0 800 800).
 *
 * Лучи разворачиваются в ЯВНЫЕ полигоны (без <use href>) — так SVG надёжно
 * растеризуется и системным sharp, и фавикон-краулером Google.
 *
 * Запуск: node scripts/gen-icons.mjs  (после правок флага — перегенерировать).
 */
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const CX = 600;
const CY = 400;
const RAY_LEN = 860; // длина луча с запасом за угол квадрата (клипается viewBox)
const RAY_HALF = 15.5; // полуугол луча, ° → луч 31°, между лучами красный зазор 14°
const DISC_R = 155; // радиус центрального солнечного диска

// 8 лучей через 45° (к 4 углам и 4 серединам сторон). Каждый луч — трапеция,
// выходящая от КРАЯ диска (а не из одной точки в центре), и расширяется к краю.
// Так между лучами остаётся явный красный клин — флаг читается даже на 16px.
let rays = '';
for (let k = 0; k < 8; k++) {
  const theta = k * 45;
  const a1 = ((theta - RAY_HALF) * Math.PI) / 180;
  const a2 = ((theta + RAY_HALF) * Math.PI) / 180;
  const ix1 = (CX + DISC_R * Math.cos(a1)).toFixed(1);
  const iy1 = (CY + DISC_R * Math.sin(a1)).toFixed(1);
  const ox1 = (CX + RAY_LEN * Math.cos(a1)).toFixed(1);
  const oy1 = (CY + RAY_LEN * Math.sin(a1)).toFixed(1);
  const ox2 = (CX + RAY_LEN * Math.cos(a2)).toFixed(1);
  const oy2 = (CY + RAY_LEN * Math.sin(a2)).toFixed(1);
  const ix2 = (CX + DISC_R * Math.cos(a2)).toFixed(1);
  const iy2 = (CY + DISC_R * Math.sin(a2)).toFixed(1);
  rays += `<polygon points="${ix1},${iy1} ${ox1},${oy1} ${ox2},${oy2} ${ix2},${iy2}"/>`;
}
const SUN = `<g fill="#FFE600">${rays}<circle cx="600" cy="400" r="${DISC_R}"/></g>`;

const ARIA = 'North Macedonia Guidebook — flag of North Macedonia';

// Скруглённый вариант (favicon.svg — для вкладки браузера).
const faviconSvg =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="200 0 800 800" role="img" aria-label="${ARIA}">` +
  `<defs><clipPath id="r"><rect x="200" y="0" width="800" height="800" rx="150"/></clipPath></defs>` +
  `<g clip-path="url(#r)"><rect x="200" y="0" width="800" height="800" fill="#D20000"/>${SUN}</g>` +
  `</svg>\n`;

// Полнокадровый вариант (для растровых PNG: full-bleed, корректен и как maskable).
const fullBleedSvg =
  `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="200 0 800 800" role="img" aria-label="${ARIA}">` +
  `<rect x="200" y="0" width="800" height="800" fill="#D20000"/>${SUN}` +
  `</svg>`;

await writeFile('public/favicon.svg', faviconSvg);
console.log('wrote public/favicon.svg');

const buf = Buffer.from(fullBleedSvg);
const targets = [
  ['public/icons/icon-192.png', 192],
  ['public/icons/icon-512.png', 512],
  ['public/icons/icon-512-maskable.png', 512],
  ['public/icons/apple-touch-icon-180.png', 180],
  ['public/icons/favicon-48.png', 48],
  ['public/icons/favicon-96.png', 96],
];
for (const [path, size] of targets) {
  const png = await sharp(buf, { density: 384 }).resize(size, size).png({ compressionLevel: 9 }).toBuffer();
  await writeFile(path, png);
  console.log('wrote', path, `${size}x${size}`);
}
