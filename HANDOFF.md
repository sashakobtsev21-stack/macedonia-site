# HANDOFF — North Macedonia Guidebook

> Снимок состояния для передачи / возобновления. **Обновляется после каждой доработки.**

**Дата:** 2026-06-22 · **Этап:** контент-наполнение (Неделя 1 KALENDAR) — опубликованы статьи Скопье (столица) и Охрид (якорь).

## Кратко
- Гейты `check/build/test/links/lint` — зелёные. `npm run qa` = NO-GO **только** из-за известного hero главной `ohrid-kaneo` >200КБ (ROADMAP-FIX п.19) — к статьям не относится (собственные фото статьи Охрид все ≤200КБ).
- Контент: **`things-to-do-in-skopje`** (16 CC-фото) + **`things-to-do-in-ohrid`** (якорь, category=cities, тройка en/ru/uk, `draft:false`, 13 CC-фото) + 2 demo-сид (`lake-ohrid`, `north-macedonia-7-day-itinerary`). 2 город-статьи / 0 ресторанов / 0 услуг / 0 новостей.
- Домен `macedoniaguidebook.com` куплен; деплой + GSC — на владельце.
- `src` чист от грузинских следов (слаги, лари `₾`, код `GE`).

## Где остановились
- Опубликована статья-якорь Охрид (Неделя 1 KALENDAR, плановый слот Вс 28.06 — сделан раньше): `things-to-do-in-ohrid`, category=cities, отдельный slug от demo `lake-ohrid` (город vs озеро разведены + взаимный перелинк). Фото — `public/images/things-to-do-in-ohrid/` (cover Канео + 12 инлайн/галерея, все ≤200КБ webp, кредиты CC в `coverCredit`/`gallery[].credit`).
- Ранее (Ср 24.06): Скопье. Фото — `public/images/things-to-do-in-skopje/`.
- Следующее по плану: `is-north-macedonia-worth-visiting` (Пт 26.06, planning).

## Не ломать (уже работает)
- Механика новостей: `NEWS_SECTION_WINDOW=10`, `NEWS_HOME_WINDOW=2`, `.github/workflows/daily-news-rebuild.yml`.
- hero-изображения, `partners.json` (Trip.com North Macedonia + Travelpayouts), enum 8 регионов, иконки/`og-default` — уже македонские.
- `/go/` логика (`worker/index.ts`) — менять только с обновлением `SPEC §16`.

## Открытые задачи (→ ROADMAP-FIX.md)
- P1: деплой Cloudflare + домен + GSC; **hero-perf `ohrid-kaneo` ≤200КБ** (единственный критический в `qa`, блокирует формальный GO главной — статьи это не касается).
- P2: полный добор фото у сид-материалов.
- P3: контент-наполнение по `KALENDAR.md` (Неделя 1 — Скопье ✅, Охрид ✅; далее Worth Visiting…).

## Команды
- `npm run qa` — гейты + dist-аудит (GO/NO-GO). `npm run qa:browser` — Lighthouse + адаптив.
- `npm run new -- <тип> <slug> --title "…"` — скелет тройки en/ru/uk.
- Скиллы: `/full-audit`, `/add-content`, `/news`.
