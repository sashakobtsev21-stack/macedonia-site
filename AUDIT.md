# AUDIT — ledger macedonia-site

> Сводный журнал аудитов: что закрыто, что открыто. Детальные прогоны — отдельными датированными файлами (`AUDIT-YYYY-MM-DD.md`). Обновляется при каждом аудите/закрытии находки.

## Прогоны
- **`AUDIT-2026-06-22.md`** — Этап 1, полный тех-аудит. `qa`=GO (0 крит/0 сред; 76 минорных = ложные срабатывания декоративных alt). Lighthouse mobile a11y/SEO/BP=100, perf 86–92. Critical/High — нет.

## Закрыто (Этап 1, 2026-06-22)
- ✅ **Корень NO-GO:** `scripts/qa.mjs` `ORIGIN='georgiaguidebook.com'` (домен Грузии) → 180 ложных critical по hreflang → `macedoniaguidebook.com`.
- ✅ **[ГРУЗ-ХВОСТ]** Ценовые тиры сравнивались с грузинским лари `₾` в `CityFoodPage`/`EdaDirectory`/`RestaurantCard` (фильтр цен тихо сломан) → `$`/`$$`/`$$$`.
- ✅ **[ГРУЗ-ХВОСТ]** `addressCountry: 'GE'` в schema `Restaurant` → `MK`; грузинские слаги в комментариях/JSDoc 12 файлов `src` → македонские; `og-default` (Гергети/Казбек) → Охрид; favicon/иконки → флаг СМ; `partners.json`, hero-фото, орфаны.
- ✅ **[BUG]** Битые внутренние ссылки (`test:links`, 24): мосты на ещё не созданные pillar/city/insurance-гайды → **условный рендер** (ссылка появляется, когда статья создана).
- ✅ **EN-only:** ru/uk полностью удалены (2026-06-22); `LANGS=['en']`, hreflang self `en`+`x-default`, старые `/ru/*`,`/uk/*` → 301 на корень.
- ✅ Безопасность: CSP строгий (`default-src 'self'`, GA4 inline по sha256, без `unsafe-eval`); `/go/` НЕ open-redirect (только ключи `partners.json`, https-target, иначе фолбэк на свой сайт); `robots` Disallow `/go/`; секретов нет.

## Открыто (см. `ROADMAP-FIX.md` с приоритетами)
- 🟡 **[perf]** hero `ohrid-kaneo.webp` >200КБ (LCP главной, на 2 страницах) — единственная оставшаяся «критическая» в dist-аудите. Оптимизировать в фото-фазе.
- ⚪ **[a11y, low]** ложные срабатывания «пустой alt» у декоративных `mk-flag`/`hero__bg` (намеренный `alt=""`/`aria-hidden`; Lighthouse a11y=100 — чинить нечего; опц. закрепить явными ARIA).
- ⚪ **[Low]** `npm audit`: dev — 24 (только dev-tooling, не в прод-бандле; high/critical нет). Мониторить квартально.
- ⏳ Полный добор фото у сид-материалов до нормы (≥5); далее — наполнение по `KALENDAR.md` (R4).
