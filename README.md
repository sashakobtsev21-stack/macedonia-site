# North Macedonia Guidebook

Контентный сайт-справочник по **Северной Македонии** на трёх языках
(**en — язык по умолчанию, на корне `/`**; ru → `/ru/`; uk → `/uk/`): города,
достопримечательности, еда, маршруты, транспорт и т.д. Статика на Astro, хостинг
Cloudflare Workers.

> **Статус: bootstrap.** Репозиторий форкнут с рабочего движка
> **Georgia Guidebook** (`gruzia-site`) с обнулённой git-историей. Грузинский
> **контент снят**, движок (компоненты/шаблоны/скрипты/CI/i18n-каркас) сохранён.
> Коллекции контента **пустые** (`src/content/**` — только `.gitkeep`); сайт
> собирается пустым по дизайну (SPEC §11).
>
> **Перемоделирование под Северную Македонию ещё не выполнено** — это следующий
> шаг: enum'ы регионов/городов (`src/content.config.ts`), тексты `src/i18n/`,
> `SPEC.md`/`CLAUDE.md`, бренд-ассеты (флаг в хедере, hero, manifest, robots,
> домен). Грузинские референс-документы — в `docs/_georgia-reference/`.

**Домен:** `https://northmacedoniaguidebook.com` — ⚠ **плейсхолдер, домен ещё не
куплен** (заглушка в `astro.config.mjs` и `wrangler.jsonc`).

## Стек

- **Astro 6** (полная статика SSG, без React) + **Content Collections**
- **Tailwind CSS 4**; дизайн-токены — только из `src/styles/tokens.css`
- Хостинг **Cloudflare Workers (Static Assets)** + Worker-роут `/go/` (`worker/index.ts`)
- Изображения webp/avif ≤ 200 КБ; PWA (установка + оффлайн)

## Команды

| Команда | Что делает |
|---|---|
| `npm run dev` | dev-сервер |
| `npm run build` | прод-сборка (проходит на пустых коллекциях) |
| `npm run check` | `astro check` — типы и схемы контента |
| `npm run lint` / `npm run format` | ESLint / Prettier |
| `npm test` | контент-гейты: enums · parity (ru/uk/en) · photos · interlinks (на пустом сайте — N/A) |
| `npm run qa` | финальный GO/NO-GO: чистая сборка + гейты + аудит `dist/` |

## Документация

- **`SPEC.md`** — продукт, шаблоны, контент-модель (источник правды; ещё под Грузию).
- **`CLAUDE.md`** — правила работы в репозитории.
- **`CONTENT_GUIDE.md`** — гайд по созданию контента.
- **`SETUP-GUIDE.md`** — подключение внешних агентов/плагинов (my_agents, ui-ux-pro-max).
- **`docs/memory/`** — проектная память (пока пустая).
- **`docs/_georgia-reference/`** — архив документов Georgia Guidebook (как шаблоны).
