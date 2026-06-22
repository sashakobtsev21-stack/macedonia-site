# PROGRESS — North Macedonia Guidebook

> Статус и роадмап. **Обновляется после КАЖДОЙ доработки** (правило дисциплины — `CLAUDE.md`).

**Дата:** 2026-06-22 · **Стадия:** контент-наполнение (Неделя 1 KALENDAR) — опубликованы статья-столица Скопье и статья-якорь Охрид.

## Состояние по факту
- **Контент:** 2 реальные статьи-города — **`things-to-do-in-skopje`** (столица, 16 CC-фото) и **`things-to-do-in-ohrid`** (якорь, category=cities, тройка en/ru/uk, `draft:false`, 13 CC-фото: cover + 12) + 2 demo-сид-материала (`lake-ohrid` attractions, `north-macedonia-7-day-itinerary` route; оба `demo:true`/noindex). **2 город-статьи, 0 ресторанов, 0 услуг, 0 новостей.**
- **Сборка:** `build`/`check`/`test`/`links`/`lint` — зелёные. `npm run qa` = NO-GO **только** из-за известного hero главной `ohrid-kaneo` >200КБ (ROADMAP-FIX п.19, не связан со статьями; обе статьи опубликованы при остальных зелёных гейтах; собственные фото статьи Охрид все ≤200КБ). Lighthouse mobile: a11y/SEO/best-practices = 100, perf 86–92.
- **Движок:** EN-first (en на корне, ru `/ru/`, uk `/uk/`); 8 статрегионов в enum; англ. слаги; hero / `partners.json` / иконки / `og-default` — македонские; погода Скопье/Охрид/Битола/Маврово; RSS en/ru/uk; `/go/` с языковой сегментацией; новости 10/2 дня + `daily-news-rebuild.yml`.
- **Домен:** `macedoniaguidebook.com` — куплен, НЕ задеплоен / не в GSC.

## Сделано на Этапе 1 (2026-06-22)
- Технический аудит → `AUDIT-2026-06-22.md`. NO-GO оказался **ложным** (грузинский `ORIGIN` в `qa.mjs`) — исправлено; битые мосты-ссылки закрыты условным рендером; реальные обложки.
- Чистка грузинских следов в тулинге (`qa.mjs`, qa-скрипты) и хабах (insurance-слаг).
- Redo-проход: вычищены остатки, что пропустил первый проход — грузинский лари `₾`→`$` в ценах (CityFoodPage/EdaDirectory/RestaurantCard; маппинг priceRange был сломан), `addressCountry GE→MK` в schema ресторанов, грузинские URL-слаги в комментариях движка (12 файлов). `src` чист от Georgia-следов.
- Локализация `/news` под Македонию; `full-audit`/`add-content` descriptions.
- Стандарты контента + правило дисциплины — в `CLAUDE.md` и `CONTENT_GUIDE.md`.
- Инфра-доки: `PROGRESS.md` / `HANDOFF.md` созданы, `docs/memory/MEMORY.md` наполнен; стале-доки приведены к реальному состоянию.

## Контент (KALENDAR)
- **2026-06-24 · Неделя 1 · Скопье (столица):** опубликована `things-to-do-in-skopje` (category=cities, тройка en/ru/uk). Структура: лид-ответ → что посмотреть (Старый базар, Каменный мост, Скопье 2014/Воин на коне, крепость Кале, мечеть Мустафы-паши, Водно/Крест Тысячелетия, Матка) → где жить → как добраться (аэропорт SKP → центр; нет прямого автобуса в Охрид) → где поесть → практика (без FAQ). Фото: **16** CC (Commons, CC0/CC BY/CC BY-SA, webp ≤200КБ, `coverCredit` у каждого). AffiliateBox: `/go/trip-tours`, `/go/trip-hotels`. Перелинк: `/cities/`, `/planning/`, `/transport/`, `/car-rental/`, `/routes/north-macedonia-7-day-itinerary/`, `/attractions/lake-ohrid/`. Гейты check/build/test/links/lint — зелёные.
- **2026-06-22 · Неделя 1 · Охрид (якорь):** опубликована `things-to-do-in-ohrid` (category=cities, тройка en/ru/uk, slug отдельный от demo `lake-ohrid` — темы разведены: город vs озеро + перелинк). EN ведущий (~1730 слов; ru ~1420, uk ~1400). Структура: лид → что посмотреть (старый город/дома, Канео, Св. София, крепость Самуила, античный театр, Плаошник) → озеро Охрид UNESCO → лодки/пляжи (Св. Наум) → где жить → как добраться (нет прямого автобуса аэропорт Скопье→Охрид; OHD сезонный) → где поесть → практика (без FAQ). Фото: **13** (cover Канео + 12) CC/CC0/PD (Commons, webp ≤200КБ, кредиты у каждого). AffiliateBox: `/go/trip-tours`, `/go/trip-hotels`. Перелинк: `/cities/`, `/cities/things-to-do-in-skopje/`, `/transport/`, `/planning/`, `/routes/north-macedonia-7-day-itinerary/`, `/attractions/lake-ohrid/`. Гейты check/build/test/links/lint — зелёные; qa NO-GO только из-за hero главной (см. выше).

## Дальше
- **P1:** деплой + домен + GSC (owner); оптимизация hero-perf главной (`ohrid-kaneo` >200КБ — единственный критический в qa).
- **P2:** полный добор фото у сид-материалов.
- **Контент:** Неделя 1 продолжение — `is-north-macedonia-worth-visiting` (Пт 26.06). Охрид (Вс 28.06) — опубликован раньше плана.
Детали — `ROADMAP-FIX.md`; план — `KALENDAR.md`; стратегические фазы — `docs/ROADMAP.md`.
