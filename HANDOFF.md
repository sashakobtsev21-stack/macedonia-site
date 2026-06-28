# HANDOFF — North Macedonia Guidebook
> Снимок для возобновления (обновляется после каждой доработки). Подробная история — `PROGRESS.md`; план — `ROADMAP.md`/`KALENDAR.md`; аудит — `AUDIT.md`.

**Дата:** 2026-06-29 · **Фаза:** R4 наполнение · **Статей:** ~21 (цель ~80) · **Сайт:** live (`macedoniaguidebook.com`) · **Язык:** en (EN-only) · **Последний коммит:** `a226a1f docs(macedonia): ROADMAP -- live status + count/horizon (21->~80, until 26.07)`

## Где остановились
- Контент: последние опубликованные — `where-to-stay-in-ohrid` (planning, where-to-stay hub) и `cost-of-living-north-macedonia` (relocation, голова кластера, обе 28.06). Полный лог — `PROGRESS.md`.
- Календарь вычищен: будущие даты = только `○` к написанию (выполненного на будущих датах нет); план до 26.07; темп 3/будний день; маршруты по Вс.
- Сеть: доки выровнены (ядро 12/12, добавлены ROADMAP.md+AUDIT.md); дашборд `grafana/dashboard.html` актуален; `/work` публикует автономно при полной уверенности.

## Что дальше
- Темы из `KALENDAR.md` на ближайшие дни (релокация, транспорт, города, Охрид-якорь). SEO-актуализация по GSC ~06.07.

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
