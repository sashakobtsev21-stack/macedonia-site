# HANDOFF — North Macedonia Guidebook

> Снимок состояния для передачи / возобновления. **Обновляется после каждой доработки.**

**Дата:** 2026-06-24 · **Этап:** контент-наполнение (Неделя 1 KALENDAR) — опубликована статья-столица Скопье.

## Кратко
- Страниц в сборке: **63**. Гейты `check/build/test/links/lint` — зелёные. `npm run qa` = NO-GO **только** из-за известного hero `ohrid-kaneo` >200КБ (ROADMAP-FIX п.19) — к статье Скопье не относится.
- Контент: **`things-to-do-in-skopje`** (category=cities, тройка en/ru/uk, `draft:false`, 16 CC-фото) + 2 demo-сид (`lake-ohrid`, `north-macedonia-7-day-itinerary`). 1 город-статья / 0 ресторанов / 0 услуг / 0 новостей.
- Домен `macedoniaguidebook.com` куплен; деплой + GSC — на владельце.
- `src` чист от грузинских следов (слаги, лари `₾`, код `GE`).

## Где остановились
- Опубликована первая реальная статья (Неделя 1 KALENDAR, Ср 24.06): Скопье. Фото — `public/images/things-to-do-in-skopje/` (cover + 15 инлайн/галерея, все ≤200КБ webp, кредиты CC в `coverCredit`/`gallery[].credit`).
- Следующее по плану: `is-north-macedonia-worth-visiting` (Пт 26.06, planning), `things-to-do-in-ohrid` (Вс 28.06, cities, якорь Охрид ≥15 фото).

## Не ломать (уже работает)
- Механика новостей: `NEWS_SECTION_WINDOW=10`, `NEWS_HOME_WINDOW=2`, `.github/workflows/daily-news-rebuild.yml`.
- hero-изображения, `partners.json` (Trip.com North Macedonia + Travelpayouts), enum 8 регионов, иконки/`og-default` — уже македонские.
- `/go/` логика (`worker/index.ts`) — менять только с обновлением `SPEC §16`.

## Открытые задачи (→ ROADMAP-FIX.md)
- P1: деплой Cloudflare + домен + GSC; **hero-perf `ohrid-kaneo` ≤200КБ** (единственный критический в `qa`, блокирует формальный GO главной — статьи это не касается).
- P2: полный добор фото у сид-материалов.
- P3: контент-наполнение по `KALENDAR.md` (Неделя 1 — Скопье ✅; далее Worth Visiting, Охрид…).

## Команды
- `npm run qa` — гейты + dist-аудит (GO/NO-GO). `npm run qa:browser` — Lighthouse + адаптив.
- `npm run new -- <тип> <slug> --title "…"` — скелет тройки en/ru/uk.
- Скиллы: `/full-audit`, `/add-content`, `/news`.
