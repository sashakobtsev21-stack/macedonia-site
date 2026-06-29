# ROADMAP-FIX — North Macedonia Guidebook

Приоритезированный список доработок. `- [ ]` открыто · `- [x]` закрыто · **owner action** = действие владельца. Полный аудит — `AUDIT-2026-06-22.md`.

## ✅ Закрыто на Этапе 1 (2026-06-22)
- [x] `qa.mjs`: грузинский `ORIGIN` → `macedoniaguidebook.com` (180 ложных hreflang-критикалов, корень NO-GO).
- [x] `qa-lighthouse`/`qa-responsive`: грузинские тест-URL → македонские.
- [x] Битые мосты-ссылки (24) → условный рендер; insurance Russian-slug → EN-слаг.
- [x] `og-default.jpg`: грузинский храм → озеро Охрид.
- [x] Сид-обложки `lake-ohrid` + маршрут: `placeholder-cover.svg` → реальные webp (Охрид / Матка, ≤200КБ, CC).
- [x] `/news` скилл локализован под Македонию; `full-audit`/`add-content` descriptions переименованы.
- [x] Доки приведены к реальному состоянию; PROGRESS/HANDOFF/MEMORY созданы/наполнены; стандарты + правило дисциплины в CLAUDE/CONTENT_GUIDE.

## ✅ Закрыто 2026-06-30 — a11y-серия портирована (gruzia 284cb30)
A11y-серия портирована с эталонного движка Грузии (коммит `284cb30`); движок общий, применены EN-эквиваленты с бренд-токенами Македонии (wine = Ohrid teal):
- [x] Два `<nav>` с одним именем → дропдаун получил `header.menuNav` («All sections»), `.nav-inline` оставил `primaryNav` (Header).
- [x] Латентные коллизии static `id` → уникальный `<base>-${random36}` в PhotoGallery/VisitInfo/RelatedPosts/TOC.
- [x] WCAG 1.4.11: контраст стрелок витрины `.scard__nav` (slate 42%→60% + белая обводка 40%, hover 66%→78%) — ShowcaseRail.
- [x] WCAG 4.1.2: имя диалога-лайтбокса = «Photo viewer» (`data-dialog-name`), не «Close» — lightbox.js + PhotoGallery/RestaurantCard/ShowcaseRail.
- [x] Esc закрывает поповер витрины + возврат фокуса — showcase-rail.js.
- [x] `aria-label` на `.gallery__item` (ключ `gallery.open`) — PhotoGallery.
- [x] Фокус-кольцо-пилюля `.cmap__btn`/`.hero__credit` (CatalogMap/HomePage).
- [x] Skip-link = видимая пилюля при фокусе (бренд-токены `--color-wine`/`--text-on-wine`) — global.css.
- [x] Тач-таргеты ≥44px: чипы директории еды `/food/` (`min-height:44px` @≤600px) — EdaDirectory. _(Переключатель языка пропущен: сайт EN-only, LangSwitcher отсутствует.)_
- [x] noindex синхронизирован: `noindex, follow` (код к JSDoc) — BaseLayout.
- [x] Резерв витрины 198px→188px — ShowcaseRail.

qa=GO + test:links=GO. Токены из tokens.css, без React, перф цел.

## ✅ Закрыто 2026-06-30 — B1: адаптивные контентные таблицы (движок общий с Грузией)
- [x] **[responsive]** Контентные таблицы в `<div class="prose">` (ArticlePage/RoutePage/InsuranceHub) получают горизонтальный скролл на узких экранах — анти-overflow на мобайле. Правило `.prose table { display:block; max-width:100%; overflow-x:auto; -webkit-overflow-scrolling:touch }` в `src/styles/global.css`. Широкая таблица теперь скроллится внутри своего блока, не давая горизонтального переполнения страницы.

qa:responsive=GO (0 переполнений, 10 шаблонов × 5 ширин) · qa=GO · test:links=GO.

## ✅ Закрыто после запуска (по факту — сайт live)
- [x] **Деплой + домен live:** сайт развёрнут на Cloudflare Workers Build, привязан домен `macedoniaguidebook.com` (www→apex, TLS). Подтверждено: сайт live, фаза R4 (см. `ROADMAP.md` / `HANDOFF.md`).

## Открыто

### P1 — перед/для запуска
- [ ] **owner action:** GSC — отправить `sitemap-index.xml` в Google Search Console + Request Indexing главной (тогда же Google подхватит новый фавикон). _(Сайт уже live; остаётся submission в GSC — числится блокером владельца в HANDOFF.)_
- [ ] **[perf]** оптимизировать hero `ohrid-kaneo` (LCP главной) до ≤200КБ webp — снизить качество/ширину в `astro:assets` (сейчас >200КБ, ловит `qa.mjs`).

### P2 — полный добор фото до нормы (закрыто 2026-06-30; НЕ контент-генерация)
- [x] `lake-ohrid`: **уже в норме** (cover + 5 инлайн-figure: kaneo/sunset/sveti-naum/springs/boat + 2 gallery) — проверено по факту; текст наполнен с момента сид-обложки, добор не требовался.
- [x] `north-macedonia-7-day-itinerary`: **уже в норме** (cover + фото **каждой остановки**: Skopje/Matka/Ohrid/Sveti Naum/Bitola/Pelister + 2 gallery) — проверено по факту. _(Маршрут не включает Маврово как остановку; остановки — Скопье/Матка/Охрид/Наум/Битола/Пелистер, у каждой своё фото.)_
- [x] `things-to-do-in-ohrid` (якорь): добор с 12 до **15 уникальных** фото (cover + 13 инлайн-figure + panorama в gallery). Добавлены 3 CC/PD ≤200КБ по темам статьи: пляж/купание (`beach.webp`, Ivka20 · CC0), Bay of Bones (`bay-of-bones.webp`, BrankaVV · CC BY-SA 4.0), нацпарк Галичица (`galicica.webp`, Taskosmileski · CC BY-SA 3.0). qa=GO, test:links=GO.

### P3 — наполнение (поздние этапы, НЕ сейчас)
- [ ] Pillar «What to eat in North Macedonia» (`/food/`) — мост уже готов, появится автоматически.
- [x] City-гайды (`category=cities`): Skopje ✅ (24.06), Ohrid ✅ (22.06, якорь). Осталось: Bitola — мост готов.
- [ ] Insurance-гайд `how-to-choose-travel-insurance` — мост готов.

### Owner actions (сводно)
- [x] Домен `macedoniaguidebook.com` — куплен.
- [x] Cloudflare Workers Build + bind домена + TLS — **сайт live**.
- [ ] GSC: sitemap + переиндексация.
- [ ] Партнёрские аккаунты под сегментацию (DiscoverCars для EN-аренды; SafetyWing/Airalo/Wise; проверить вывод средств Travelpayouts).
- [ ] Решения O2 / O5 (порядок входа контента, дисплей-реклама) — см. `docs/STRATEGY.md`. _(O4 закрыт: сайт EN-only, 2026-06-22.)_
