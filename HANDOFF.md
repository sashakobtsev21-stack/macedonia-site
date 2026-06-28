# HANDOFF — North Macedonia Guidebook
> Снимок для возобновления (обновляется после каждой доработки). Подробная история — `PROGRESS.md`; план — `ROADMAP.md`/`KALENDAR.md`; аудит — `AUDIT.md`.

**Дата:** 2026-06-29 · **Фаза:** R4 наполнение · **Статей:** ~24 (цель ~80) · **Сайт:** live (`macedoniaguidebook.com`) · **Язык:** en (EN-only) · **Последний коммит:** `publish(macedonia): transport A->B cluster -- airport->centre, Tirana->Ohrid/Skopje, Skopje->Bitola (3 articles)`

## Где остановились
- Контент: последние опубликованные — **транспортный кластер «A→B» (3 статьи, 29.06):** `skopje-airport-to-city-center`, `tirana-to-ohrid-skopje` (YMYL-визы, кросс-граница AL→MK), `skopje-to-bitola` — все `/transport/…/`, `draft:false`, qa=GO, test:links=GO. Слот KALENDAR Пн 29.06 закрыт. Перед ними — `where-to-stay-in-ohrid` и `cost-of-living-north-macedonia` (28.06). Полный лог — `PROGRESS.md`.
- Календарь вычищен: будущие даты = только `○` к написанию (выполненного на будущих датах нет); план до 26.07; темп 3/будний день; маршруты по Вс.
- Сеть: доки выровнены (ядро 12/12, добавлены ROADMAP.md+AUDIT.md); дашборд `grafana/dashboard.html` актуален; `/work` публикует автономно при полной уверенности.

## Что дальше
- Следующий слот — **Вт 30.06** (3 transport-связки: Ohrid↔Bitola, getting-to-NM из Sofia/Thessaloniki/Pristina, Driving in NM). Далее по `KALENDAR.md` (where-to-stay, сравнения, релокация P0). SEO-актуализация по GSC ~06.07.

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
