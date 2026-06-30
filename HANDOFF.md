# HANDOFF — North Macedonia Guidebook
> Снимок для возобновления (обновляется после каждой доработки). Подробная история — `PROGRESS.md`; план — `ROADMAP.md`/`KALENDAR.md`; аудит — `AUDIT.md`.

**Дата:** 2026-07-01 · **Фаза:** R4 наполнение · **Статей:** ~30 (цель ~80) · **Сайт:** live (`macedoniaguidebook.com`) · **Язык:** en (EN-only) · **Последний коммит:** `publish(macedonia): 3 where-to-stay/beaches articles 01.07 (Skopje, Bitola, Lake Ohrid)`

## /work 01.07 — опубликованы 3 коммерческие статьи (where-to-stay кластер, темп 3/будень)
- `/planning/where-to-stay-in-skopje/` (1695 сл), `/planning/where-to-stay-in-bitola/` (1500 сл), `/planning/lake-ohrid-beaches-swimming/` (1687 сл). Все 5 фото, 💰 trip-hotels, ценовые бэнды помечены «indicative + checkedAt 2026-07-01», без выдуманных отелей/цен (правило 4). Независимое ревью: тон+факты PASS; единственный блокер — отсутствовали **входящие** ссылки (сироты на входе) → добавил по 1 контекстной входящей из живых гайдов (things-to-do-in-skopje → where-to-stay-in-skopje; things-to-do-in-bitola → where-to-stay-in-bitola; things-to-do-in-ohrid «Boat trips and beaches» → lake-ohrid-beaches). Фото 202–203 КБ (десятич.) = 197–198 KiB < порога 200×1024 → check-photos OK, не пережимал. **qa=GO (критич. 0) + links=GO.** KALENDAR 01.07 = `[x]`.

## Фикс акцент-токена: баннер cookies + иконка приватности (2026-06-30, `--color-sea` → `--color-wine`)
- **6 свойств ссылались на несуществующий токен `--color-sea`** → резолвились в invalid-at-computed-value, цвет падал на наследуемый/initial (не тиловый). `src/components/CookieConsent.astro` (5): фон+`border-color` кнопки «Принять» `.cc__btn--accept`, `outline` `.cc__btn:focus-visible`, `color`+focus-`outline` ссылки `.cc__link`. `src/layouts/PrivacyPage.astro` (1): `color` `.contact__icon`. Латентный баг баннера + свежие вхождения в `PrivacyPage`.
- **Заменено на `--color-wine`** (`#0e6a73`, «Ohrid teal») — реальный акцент форка и конвенция всего движка (~50 файлов; `--color-lake` — алиас, в компонентах не используется). Новый токен НЕ заводился.
- **Гейты:** `qa`=**GO** (ВЕРДИКТ; крит. 0 / сред. 0; миноры — довоенные alt/CLS на index/404).

## B3: тап-таргет стрелок витрины ≥44px (2026-06-30, эталон gruzia ShowcaseRail)
- **Кликабельная зона стрелок карусели заведений `.scard__nav` (ShowcaseRail) увеличена до ≥44×44px** (WCAG 2.5.5, мобайл): кнопка `min-width/min-height:44px` с центрированным контентом; видимая пилюля ~30px — псевдоэлемент `::before` по центру тап-зоны, иконка над ней (`svg z-index:1`). Контраст-фикс a11y сохранён один-в-один (slate 60% + обводка 40%, hover 78%) на `::before`. `--prev`/`--next` смещены на `calc(var(--space-2) - 7px)` — видимая пилюля у края медиа, лишняя площадь тап-зоны внутрь карточки (стрелки не перекрывают карточки уродливо).
- **Гейты:** `qa`=**GO** (крит. 0 / сред. 0), `qa:responsive`=**GO** (0 переполнений, 11 шаблонов × 5 ширин), `test:links`=**GO** (2812 ссылок, 0 битых, 48 страниц).

## Де-сиротинг вечнозелёных статей (2026-06-30)
- **4 орфана (0 входящих ред. ссылок) получили контекстные входящие из родственных** (новости-2026 не трогались):
  - `cost-of-living-north-macedonia` ← `north-macedonia-trip-cost` (body «bottom line» + Read also) + `is-north-macedonia-worth-visiting` (инлайн на long-stay nomads).
  - `skopje-airport-to-city-center` ← `things-to-do-in-skopje` (раздел «How to get to Skopje») + `how-to-get-to-ohrid-from-skopje` (шаттл 199 MKD).
  - `tirana-to-ohrid-skopje` ← `getting-to-north-macedonia` + `how-to-get-to-ohrid-from-skopje` (Read also). Исходящая на Албанию уже была — добавлены входящие.
  - `skopje-nightlife` ← `things-to-do-in-skopje` (Debar Maalo, инлайн). **2-го естественного родителя нет** (нет гайда Скопье/where-to-stay-in-skopje) — оставлена 1 контекстная (правило 1–2), отмечено честно.
- Ссылки `/{категория}/{slug}/` со слешем, осмысленные анкоры, без дублей. **Гейты:** `qa`=**GO** (крит. 0 / сред. 0), `test:links`=**GO** (2804 ссылки, 0 битых).

## B2: перенос длинных URL в фото-кредитах (2026-06-30, порт из albania 9f0d46f)
- **Анти-overflow от длинных URL источников в фото-кредитах** (`sourceUrl` Wikimedia `commons.wikimedia.org/wiki/File:…` в `coverCredit`/`figure__credit`, напр. `/attractions/matka-canyon/`): правило `.prose figcaption, .prose .figure__credit, .cover__credit { overflow-wrap:anywhere; word-break:break-word }` в `src/styles/global.css`. Покрыты тело статьи (figcaption/`figure__credit` в `.prose`) и обложка (`cover__credit` в ArticlePage, вне `.prose`). В `scripts/qa-responsive.mjs` PAGES добавлена `/attractions/matka-canyon/`, чтобы проверка прогоняла кредит.
- **Гейты:** `qa:responsive` ДО=**NO-GO** (+147/+107/+53px @320/360/414 на matka-canyon) → ПОСЛЕ=**GO** (0 переполнений, 11 шаблонов × 5 ширин); `qa`=**GO** (крит. 0 / сред. 0); `test:links`=**GO** (2804 ссылки, 0 битых).

## B1: адаптивные контентные таблицы (2026-06-30)
- **Анти-overflow контентных таблиц на мобайле** (движок общий с Грузией): правило `.prose table { display:block; max-width:100%; overflow-x:auto; -webkit-overflow-scrolling:touch }` в `src/styles/global.css`. Покрывает все три рендера контента в `<div class="prose">` (ArticlePage / RoutePage / InsuranceHub). Широкая таблица скроллится внутри своего блока, не растягивая страницу.
- **Гейты:** `qa:responsive`=**GO** (0 переполнений, 10 шаблонов × 5 ширин), `qa`=**GO** (ВЕРДИКТ, крит. 0 / сред. 0), `test:links`=**GO** (2804 ссылки, 0 битых).

## A11y-серия портирована с движка (gruzia 284cb30) (2026-06-30)
- **11 a11y-фиксов портированы с эталонного движка Грузии** (коммит `284cb30`), EN-эквиваленты с бренд-токенами Македонии: разные `aria-label` у двух `<nav>` (новый `header.menuNav`); уникальные per-instance `id` (PhotoGallery/VisitInfo/RelatedPosts/TOC); контраст стрелок витрины `.scard__nav` (WCAG 1.4.11); имя лайтбокса = «Photo viewer» (`gallery.dialogName`, WCAG 4.1.2); Esc+возврат фокуса в `showcase-rail.js`; `aria-label` `.gallery__item` (`gallery.open`); фокус-кольцо-пилюля `.cmap__btn`/`.hero__credit`; skip-link = видимая пилюля (`--color-wine`/`--text-on-wine`); тач-чипы `/food/` ≥44px; `noindex, follow`; резерв витрины 188px.
- **Пропущено:** под-пункт «переключатель языка ≥44px» — сайт EN-only, `LangSwitcher` отсутствует.
- **Гейты:** qa=GO (крит. 0 / сред. 0), test:links=GO (2804 ссылки, 0 битых).

## Добор фото P2 (2026-06-30)
- **`ROADMAP-FIX.md` P2 закрыт.** Проверено реальное число фото: `lake-ohrid` (cover + 5 инлайн) и `north-macedonia-7-day-itinerary` (cover + фото каждой из 6 остановок) **уже были в норме — не трогались**. _(Маршрут не содержит остановки Маврово — в ROADMAP-FIX опечатка.)_
- **`things-to-do-in-ohrid`** усилен с 12 до **15 уникальных** фото: +beach (Ivka20 · CC0), +bay-of-bones (BrankaVV · CC BY-SA 4.0, +абзац), +galicica (Taskosmileski · CC BY-SA 3.0, +абзац). qa=GO, test:links=GO.

## Чистка доков (2026-06-30)
- **Удалён дубль `docs/ROADMAP.md`** (застрял на 22.06); уникальные ID-таблицы R0–R6, owner-развилки и сквозные YMYL-правила перенесены в корневой `ROADMAP.md` (сворачиваемая секция «Архив деталей»). Источник фазового плана — теперь только корневой `ROADMAP.md`.
- `ROADMAP-FIX.md`: деплой+домен live отмечены `[x]`; открыты — GSC sitemap, perf hero, добор фото сидов.
- `docs/CONTENT_PLAN.md`: усилен статус «СПРАВОЧНИК, не активный план»; убраны устаревшие маркеры/«ожидает O2/O4» (O4 закрыт), §5-очередь помечена исторической; кластерная/интерлинк/денежная справка сохранена.
- Ссылки на удалённый файл починены в `README.md` и `PROGRESS.md`.

## Где остановились
- Контент: последние опубликованные — **транспортный кластер «routes» (3 статьи, 30.06):** `ohrid-to-bitola`, `getting-to-north-macedonia` (Sofia/Thessaloniki/Pristina→Skopje), `driving-in-north-macedonia` (rules & tips) — все `/transport/…/`, `draft:false`, qa=GO, test:links=GO, по 5 уник. CC-фото, бэклинки добавлены. Слот KALENDAR Вт 30.06 закрыт. Перед ними — кластер «A→B» (29.06: `skopje-airport-to-city-center`, `tirana-to-ohrid-skopje`, `skopje-to-bitola`). Полный лог — `PROGRESS.md`.
- Календарь вычищен: будущие даты = только `○` к написанию (выполненного на будущих датах нет); **план продлён до 31.07** (KALENDAR v5, 2026-06-30): добор до **ровно 3 статьи/будний день** на 01–31.07 — добавлено 19 новых коммерческих decision-stage тем (транспорт A→B / аренда+eSIM / where-to-stay / сравнения / day-trips), заведена Неделя 5 (27.07–31.07); сверка скриптом — все 23 будня = 3. Темп 3/будний день; маршруты по Вс.
- Сеть: доки выровнены (ядро 12/12, добавлены ROADMAP.md+AUDIT.md); дашборд `grafana/dashboard.html` актуален; `/work` публикует автономно при полной уверенности.

## Что дальше
- Следующий слот — **Ср 01.07** по `KALENDAR.md` (далее темы where-to-stay/сравнения/релокация P0). Воскресные маршруты: ближайший — Вс 05.07. SEO-актуализация по GSC ~06.07.

## Блокеры владельца
- GSC: Request Indexing + sitemap. Партнёрки (Travelpayouts: DiscoverCars/GetYourGuide/Booking + EKTA). Моат-решение (владелец не в стране). Дисплей-реклама (рек.: старт без).

## Не ломать (уже работает)
- Механика новостей: `NEWS_SECTION_WINDOW=10`, `NEWS_HOME_WINDOW=2`, `.github/workflows/daily-news-rebuild.yml`.
- hero-изображения, `partners.json` (Trip.com North Macedonia + Travelpayouts), enum 8 регионов, иконки/`og-default` — уже македонские.
- `/go/` логика (`worker/index.ts`) — менять только с обновлением `SPEC §16`.

## Команды
- `npm run qa` — гейты + dist-аудит (GO/NO-GO). `npm run qa:browser` — Lighthouse + адаптив.
- `npm run new -- <тип> <slug> --title "…"` — скелет en-версии (сайт одноязычный).
- Скиллы: `/full-audit`, `/add-content`, `/news`.
