# HANDOFF — North Macedonia Guidebook

> Снимок состояния для передачи / возобновления. **Обновляется после каждой доработки.**

**Дата:** 2026-06-22 · **Этап:** 1 (тех-аудит + чистка + унификация публикации + правила) — завершён.

## Кратко
- Страниц в сборке: **61**. `npm run qa` — все 5 гейтов зелёные.
- Контент: 2 demo-сид (`lake-ohrid`, `north-macedonia-7-day-itinerary`). 0 городов / ресторанов / услуг / новостей.
- Домен `macedoniaguidebook.com` куплен; деплой + GSC — на владельце.
- `src` чист от грузинских следов (слаги, лари `₾`, код `GE`); все 5 гейтов зелёные.

## Не ломать (уже работает)
- Механика новостей: `NEWS_SECTION_WINDOW=10`, `NEWS_HOME_WINDOW=2`, `.github/workflows/daily-news-rebuild.yml`.
- hero-изображения, `partners.json` (Trip.com North Macedonia + Travelpayouts), enum 8 регионов, иконки/`og-default` — уже македонские.
- `/go/` логика (`worker/index.ts`) — менять только с обновлением `SPEC §16`.

## Открытые задачи (→ ROADMAP-FIX.md)
- P1: деплой Cloudflare + домен + GSC; hero-perf ≤200КБ.
- P2: полный добор фото у сид-материалов.
- P3: контент-наполнение (поздние этапы).

## Команды
- `npm run qa` — гейты + dist-аудит (GO/NO-GO). `npm run qa:browser` — Lighthouse + адаптив.
- `npm run new -- <тип> <slug> --title "…"` — скелет тройки en/ru/uk.
- Скиллы: `/full-audit`, `/add-content`, `/news`.
