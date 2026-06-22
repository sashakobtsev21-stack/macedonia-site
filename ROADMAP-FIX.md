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

## Открыто

### P1 — перед/для запуска
- [ ] **owner action:** деплой на Cloudflare Workers Build + привязать домен `macedoniaguidebook.com` (www→apex, TLS).
- [ ] **owner action:** после деплоя — отправить `sitemap-index.xml` в Google Search Console + переиндексация главной (тогда же Google подхватит новый фавикон).
- [ ] **[perf]** оптимизировать hero `ohrid-kaneo` (LCP главной) до ≤200КБ webp — снизить качество/ширину в `astro:assets` (сейчас >200КБ, ловит `qa.mjs`).

### P2 — полный добор фото до нормы (отложено с Этапа 1; НЕ контент-генерация)
- [ ] `lake-ohrid`: cover + ≥4 инлайн-figure (норма статьи ≥5 фото). Сейчас только cover.
- [ ] `north-macedonia-7-day-itinerary`: cover + фото **каждой остановки** (Скопье / Маврово / Охрид / Битола). Сейчас только cover.

### P3 — наполнение (поздние этапы, НЕ сейчас)
- [ ] Pillar «What to eat in North Macedonia» (`/food/`) — мост уже готов, появится автоматически.
- [ ] City-гайды (`category=cities`): Skopje / Ohrid / Bitola — мосты готовы.
- [ ] Insurance-гайд `how-to-choose-travel-insurance` — мост готов.

### Owner actions (сводно)
- [x] Домен `macedoniaguidebook.com` — куплен.
- [ ] Cloudflare Workers Build + bind домена + TLS.
- [ ] GSC: sitemap + переиндексация (после деплоя).
- [ ] Партнёрские аккаунты под сегментацию (DiscoverCars для EN-аренды; SafetyWing/Airalo/Wise; проверить вывод средств Travelpayouts).
- [ ] Решения O2 / O4 / O5 (порядок входа контента, обязательная языковая пара, дисплей-реклама) — см. `docs/STRATEGY.md`.
