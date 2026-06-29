# HANDOFF — North Macedonia Guidebook
> Снимок для возобновления (обновляется после каждой доработки). Подробная история — `PROGRESS.md`; план — `ROADMAP.md`/`KALENDAR.md`; аудит — `AUDIT.md`.

**Дата:** 2026-06-30 · **Фаза:** R4 наполнение · **Статей:** ~27 (цель ~80) · **Сайт:** live (`macedoniaguidebook.com`) · **Язык:** en (EN-only) · **Последний коммит:** `chore(macedonia): remove stale duplicate docs/ROADMAP, trim superseded CONTENT_PLAN/done FIX items`

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
