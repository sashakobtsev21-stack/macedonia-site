# HANDOFF — North Macedonia Guidebook

> Снимок состояния для передачи / возобновления. **Обновляется после каждой доработки.**

**Дата:** 2026-06-22 · **Этап:** контент-наполнение (Неделя 1 KALENDAR) — опубликованы статьи Скопье (столица), Охрид (якорь) и первые 2 новости. **Сайт переведён на один язык — только английский (en); ru/uk удалены.**

## Кратко
- **Язык:** сайт **одноязычный — только en на корне `/`**. ru/uk удалены целиком (страницы `src/pages/{ru,uk}/`, контент `**/{ru,uk}/`, словари `i18n/{ru,uk}.ts`, `LangSwitcher`). `LANGS=['en']` (types/content.config). hreflang = self en + x-default. `/ru/* /uk/* /en/*` → 301 на корень (`public/_redirects`). Битых ссылок на удалённые языки нет.
- Гейты `check/build/test/links/lint` — зелёные (25 страниц). `npm run qa` = NO-GO **только** из-за известного hero главной `ohrid-kaneo` >200КБ (ROADMAP-FIX п.19) — к статьям/новостям/языку не относится (все собственные фото ≤200КБ; единственное >200КБ в `dist` — `ohrid-kaneo`).
- Контент (en-only): **`things-to-do-in-skopje`** (16 CC-фото) + **`things-to-do-in-ohrid`** (якорь, category=cities, `draft:false`, 13 CC-фото) + **2 новости** (`ohrid-airport-upgrade-2026`, `d-festival-dojran-2026`, обе `draft:false`) + 2 demo-сид (`lake-ohrid`, `north-macedonia-7-day-itinerary`). 2 город-статьи / 0 ресторанов / 0 услуг / 2 новости.
- Домен `macedoniaguidebook.com` куплен; деплой + GSC — на владельце.
- `src` чист от грузинских следов (слаги, лари `₾`, код `GE`).

## Где остановились
- Опубликованы 2 одобренные новости (en-only, `draft:false`, category=news):
  - `ohrid-airport-upgrade-2026` (тег авиа) — реконструкция OHD на ~65%, рейсы не прерываются. Фото `public/images/ohrid-airport-upgrade-2026/` (cover + terminal, оба терминал St. Paul the Apostle Airport, CC BY-SA 3.0 / Local hero, Commons; webp ≤200КБ). Обязательный перелинк на `/cities/things-to-do-in-ohrid/` — есть. Источник EX-YU Aviation (16.06.2026). AffiliateBox `/go/aviasales`.
  - `d-festival-dojran-2026` (тег события) — D Festival на оз. Дойран 26–28.06.2026. Фото `public/images/d-festival-dojran-2026/` (cover оз. Дойран CC BY-SA 4.0 / Jolovema + lake CC BY-SA 3.0 / Makedonski biseri, Commons; webp ≤200КБ) — жанровая иллюстрация озера (в подписи честно). Источник Festival Abroad. AffiliateBox `/go/trip-hotels`.
- Ранее опубликована статья-якорь Охрид `things-to-do-in-ohrid` (фото `public/images/things-to-do-in-ohrid/`) и столица Скопье `things-to-do-in-skopje` (фото `public/images/things-to-do-in-skopje/`).
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
- `npm run new -- <тип> <slug> --title "…"` — скелет en-версии (сайт одноязычный).
- Скиллы: `/full-audit`, `/add-content`, `/news`.
