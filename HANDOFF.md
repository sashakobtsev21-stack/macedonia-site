# HANDOFF — North Macedonia Guidebook

> Снимок состояния для передачи / возобновления. **Обновляется после каждой доработки.**

**Дата:** 2026-06-22 · **Этап:** контент-наполнение (Неделя 1–2 KALENDAR) — опубликованы статьи Скопье (столица), Охрид (якорь), Битола (город) и первые 2 новости. **Сайт переведён на один язык — только английский (en); ru/uk удалены.** UI-доводка главной: витрина наполнена 3 городами + hero `ohrid-kaneo` ужат → `qa` = **GO**.

## Кратко
- **Язык:** сайт **одноязычный — только en на корне `/`**. ru/uk удалены целиком (страницы `src/pages/{ru,uk}/`, контент `**/{ru,uk}/`, словари `i18n/{ru,uk}.ts`, `LangSwitcher`). `LANGS=['en']` (types/content.config). hreflang = self en + x-default. `/ru/* /uk/* /en/*` → 301 на корень (`public/_redirects`). Битых ссылок на удалённые языки нет. **Переключателя языка в шапке/подвале нет** (Header/Footer не импортируют `LangSwitcher`, нет `nav__lang`/`dict.lang.label`; в `dist` слово «Language» встречается только как `inLanguage` в JSON-LD).
- **Витрина (ShowcaseRail) на главной — наполнена + крутилка чинена (2026-06-22).** `showcasePicks` в `src/layouts/HomePage.astro` = 3 опубликованных города (`things-to-do-in-skopje` / `things-to-do-in-ohrid` / `things-to-do-in-bitola`, `category: 'cities'`, kicker `city`, чип города Skopje/Ohrid/Bitola). Тип `showcasePicks` объявлен явным union `ShowcasePick[]` (вместо `as const`), чтобы петля-резолвер принимала будущие рестораны/маршруты/place-карточки. Золотая лента рендерится (в `dist/index.html` — карточки городов + kicker «City»). **Фикс крутилки:** `public/js/showcase-rail.js` теперь клонирует уникальный набор карточек в рантайме столько раз, чтобы дорожка была ≥2.5× вьюпорта → лента крутится НЕПРЕРЫВНО по кругу даже при 3 карточках, петля бесшовная (заворот ровно на ширину одного набора). Статический двойной рендер в `ShowcaseRail.astro` убран (`cells = items.map(... clone:false)`) — в исходной разметке `dist` нет клонов (0 ячеек с `aria-hidden="true"`), клоны добавляет только JS (a11y-скрытые). В `HomePage.astro` — дедуп пиков по slug (один материал = одна карточка, соседние не дублируются). `lake-ohrid` НЕ добавлен в витрину: это `demo:true` пример-страница (не реальный опубликованный материал), резолвер её и так отсеивает.
- Гейты `check/build/test/links/lint` — **зелёные** (26 страниц). `npm run qa` = **GO** (0 критических / 0 средних; 29 минорных — пред-существующие декоративный-alt/CLS у hero-фона). Все генерируемые варианты изображений ≤200КБ.
- Контент (en-only): **`things-to-do-in-skopje`** (16 CC-фото) + **`things-to-do-in-ohrid`** (якорь, category=cities, `draft:false`, 13 CC-фото) + **`things-to-do-in-bitola`** (category=cities, `draft:false`, 12 CC-фото) + **2 новости** (`ohrid-airport-upgrade-2026`, `d-festival-dojran-2026`, обе `draft:false`) + 2 demo-сид (`lake-ohrid`, `north-macedonia-7-day-itinerary`). 3 город-статьи / 0 ресторанов / 0 услуг / 2 новости.
- Домен `macedoniaguidebook.com` куплен; деплой + GSC — на владельце.
- `src` чист от грузинских следов (слаги, лари `₾`, код `GE`).

## Где остановились
- Опубликованы 2 одобренные новости (en-only, `draft:false`, category=news):
  - `ohrid-airport-upgrade-2026` (тег авиа) — реконструкция OHD на ~65%, рейсы не прерываются. Фото `public/images/ohrid-airport-upgrade-2026/` (cover + terminal, оба терминал St. Paul the Apostle Airport, CC BY-SA 3.0 / Local hero, Commons; webp ≤200КБ). Обязательный перелинк на `/cities/things-to-do-in-ohrid/` — есть. Источник EX-YU Aviation (16.06.2026). AffiliateBox `/go/aviasales`.
  - `d-festival-dojran-2026` (тег события) — D Festival на оз. Дойран 26–28.06.2026. Фото `public/images/d-festival-dojran-2026/` (cover оз. Дойран CC BY-SA 4.0 / Jolovema + lake CC BY-SA 3.0 / Makedonski biseri, Commons; webp ≤200КБ) — жанровая иллюстрация озера (в подписи честно). Источник Festival Abroad. AffiliateBox `/go/trip-hotels`.
- Опубликована статья-город Битола `things-to-do-in-bitola` (en-only, `draft:false`, category=cities, ~1680 слов). Фото `public/images/things-to-do-in-bitola/` — 12 CC/PD (cover Широки Сокак + 4 gallery + 7 инлайн: Гераклея-мозаики ×3, Безистен, Часовая башня, Пелистер ×2, Крушево, Makedonium; webp ≤200КБ, кредит у каждого). Cover-варианты 640/960/1280 в `src/data/cover-variants.json`. Перелинк (7) + Битола 3-м пиком витрины. AffiliateBox `/go/trip-hotels`, `/go/trip-tours`. Факты сверены по источникам.
- Ранее опубликована статья-якорь Охрид `things-to-do-in-ohrid` (фото `public/images/things-to-do-in-ohrid/`) и столица Скопье `things-to-do-in-skopje` (фото `public/images/things-to-do-in-skopje/`).
- UI-правки главной (2026-06-22): убран мёртвый плейсхолдер-`showcasePicks`, заполнен 2 городами → витрина видна; hero `ohrid-kaneo` ужат точечно (avif q34, webp q50 + webp-фолбэк до 960px, AVIF до 1600px не тронут) — все варианты ≤200КБ, `qa` = GO. Переключатель языка в Header/Footer уже отсутствовал (удалён при переводе на en-only); стале-комментарий про `LangSwitcher`/`/ru/404` в `BaseLayout.astro` поправлен.
- **Фикс крутилки витрины (2026-06-22):** `public/js/showcase-rail.js` заменён эталоном — непрерывная бесшовная петля через рантайм-клонирование уникального набора (дорожка ≥2.5× вьюпорта); `ShowcaseRail.astro` — одинарный рендер (статические клоны убраны); `HomePage.astro` — дедуп пиков по slug. Гейты build/check/test/links/lint — зелёные (26 страниц); в `dist/index.html` витрина = 3 карточки (Skopje/Ohrid/Bitola), 0 клонов в исходной разметке.
- Следующее по плану: `is-north-macedonia-worth-visiting` (Пт 26.06, planning).

## Не ломать (уже работает)
- Механика новостей: `NEWS_SECTION_WINDOW=10`, `NEWS_HOME_WINDOW=2`, `.github/workflows/daily-news-rebuild.yml`.
- hero-изображения, `partners.json` (Trip.com North Macedonia + Travelpayouts), enum 8 регионов, иконки/`og-default` — уже македонские.
- `/go/` логика (`worker/index.ts`) — менять только с обновлением `SPEC §16`.

## Открытые задачи (→ ROADMAP-FIX.md)
- P1: деплой Cloudflare + домен + GSC. (**hero-perf `ohrid-kaneo` ≤200КБ — закрыто 2026-06-22**: точечное сжатие, `qa` = GO.)
- P2: полный добор фото у сид-материалов.
- P3: контент-наполнение по `KALENDAR.md` (Неделя 1 — Скопье ✅, Охрид ✅; далее Worth Visiting…).

## Команды
- `npm run qa` — гейты + dist-аудит (GO/NO-GO). `npm run qa:browser` — Lighthouse + адаптив.
- `npm run new -- <тип> <slug> --title "…"` — скелет en-версии (сайт одноязычный).
- Скиллы: `/full-audit`, `/add-content`, `/news`.
