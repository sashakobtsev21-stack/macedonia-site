<!--
ВНУТРЕННИЙ ДОКУМЕНТ (на сайт не попадает). Контент-план North Macedonia Guidebook:
pillar+spoke по кластерам, интерлинк-карта, балканские кросс-сетевые страницы и
поименная очередь первых ~30 страниц. Источник приоритетов — docs/STRATEGY.md;
факты и порядок входа — docs/MACEDONIA-ANALYSIS-2026-06-21.md (§5 конкуренты, §6.1
контент-план); фазы — docs/ROADMAP.md (R0–R6). Процесс написания — CONTENT_GUIDE.md.

СТАТУС: ЧЕРНОВИК. Порядок входа и парность языков помечены «ожидает O2/O4» —
зафиксировать решения владельца (ROADMAP §0) до старта R2. Слаги — английские
(EN-first); category совпадает с CATEGORIES в src/content.config.ts.
-->

# North Macedonia Guidebook — контент-план

**Дата:** 2026-06-21 · **Статус:** черновик (ожидает O2/O4) · **Связано:** `STRATEGY.md` · `MACEDONIA-ANALYSIS-2026-06-21.md` · `ROADMAP.md` · `CONTENT_GUIDE.md`

> **Зачем документ:** единый источник очереди публикаций и интерлинков. Каждая статья знает своих соседей и pillar ДО написания (топическая авторитетность + взаимная перелинковка — гейт). Темы и порядок — из анализа §5–6; пишем по конвейеру `CONTENT_GUIDE.md`.

---

## 0. Принципы

- **EN-first.** Основной язык — EN (корень `/`), затем ru (`/ru/`), uk (`/uk/`). Целевой запрос формулируем по-английски. Слаги — английские, едины для всех языков.
- **Pillar + spoke.** В каждом кластере 1 опорная (pillar) страница-хаб + спицы. Спица ссылается на pillar и ≥1 соседа; pillar ссылается на все спицы (двусторонне, во всех 3 языках).
- **Парность.** `check-parity` требует пару **ru+uk** (en — приоритетный, но по гейту опционален). ⚠ **Ожидает O4:** если RU откладывается — фиксируем, что обязательная пара на старте = **en+uk** (релокация-клин — украинский приоритет, анализ §5).
- **Тип страницы:** **TRAFFIC** (верх воронки, донор) или **MONEY** (транзакционная, несёт 1–3 AffiliateBox через `/go/`). Денежная связка указана у каждой.
- **YMYL** (визы/налоги/ВНЖ): факты только из `briefs/_SOURCES-YMYL.md` + видимый дисклеймер. Ловушки: **РФ нужна виза**, **номад-визы нет**, налог **10%**, денар **~61,5/EUR**.
- **Title/SEO (SPEC §14):** title ≤60, description ≤155, взаимные hreflang, schema по типу. «Денежные» гайды — с `yearInTitle: true` (год в title/H1).

---

## 1. Порядок входа (рекомендуемый — ожидает O2)

Порядок контента **≠** порядок приоритета кластеров: сперва строим донор трафика и интерлинков, затем сажаем на него денежные кластеры (логика анализа §5 + ROADMAP).

| Очередь | Кластер | Зачем сначала | Фаза |
|---|---|---|---|
| 1 | **Планирование** | Верх воронки, донор трафика и интерлинков для всего сайта | R2 |
| 2 | **Охрид-пиллар + Битола/города** | Тур-якорь (28,8% туристов) + самая тонкая конкуренция → реальный трафик без проживания | R2 |
| 3 | **MONEY** (аренда/страховка/eSIM) | Монетизирует уже идущий трафик; пик Q3 | R3 |
| 4 | **Релокация/Номады** (UK + EN-с-опытом) | Маржинальный Tier-1, почти пустое поле; **НЕ** заходить через «cost of living»/«register company» | R3 |
| 5 | **Города/Достопримечательности/Маршруты** (масштаб) + балканские петли | Расширяют якорь и сеть; маршруты AIO-стойкие | R4 |
| 6 | **Еда** | Кормит города/маршруты | R4 |
| 7 | **Развлечения** + сезонный Охрид | Наименьший приоритет, сезонный множитель Q3 | R5 |

> Избегать первой точкой (анализ §5): EN «cost of living North Macedonia» (доминируют Numbeo/livingcost), EN «register company / taxes» (локальные .mk-юрфирмы + Nomad Capitalist), RU-травел-Охрид (плотно занят живыми блогами).

---

## 2. Кластеры: pillar + спицы

Слаги — предложенные (финал при написании). `cat` = category. Тип: TR=traffic, MO=money.

### 2.1 Планирование `/planning/` — донор воронки
**Pillar:** `plan-a-trip-to-north-macedonia` — «North Macedonia travel guide / plan a trip» (TR)

| Слаг | Целевой EN-запрос | Тип | Денежная связка |
|---|---|---|---|
| `best-time-to-visit-north-macedonia` | best time to visit North Macedonia | TR | — |
| `north-macedonia-visa-requirements` | North Macedonia visa requirements | TR·YMYL | eSIM/страховка |
| `currency-in-north-macedonia` | currency in North Macedonia (denar) | TR | Wise |
| `getting-to-north-macedonia` | how to get to North Macedonia / Skopje airport | TR | Aviasales/трансфер |
| `getting-around-north-macedonia` | getting around North Macedonia | TR | аренда авто |
| `is-north-macedonia-safe` | is North Macedonia safe | TR | страховка |

### 2.2 MONEY `/car-rental/` · `/insurance/` · `/transport/`
**Pillar:** `renting-a-car-in-north-macedonia` — «Renting a car in North Macedonia» (MO, `yearInTitle`)

| Слаг | cat | Целевой EN-запрос | Тип | Связка |
|---|---|---|---|---|
| `car-rental-skopje-airport` | car-rental | car rental Skopje airport | MO | DiscoverCars / LocalRent |
| `car-rental-ohrid` | car-rental | car rental Ohrid | MO | DiscoverCars / LocalRent |
| `travel-insurance-north-macedonia` | insurance | travel insurance North Macedonia | MO | SafetyWing (+EKTA по O5) |
| `best-esim-for-north-macedonia` | planning | best eSIM for North Macedonia | MO | Airalo (A1) |
| `skopje-airport-to-city` | transport | Skopje airport to city centre | MO | трансфер |
| `skopje-to-ohrid` | transport | Skopje to Ohrid (bus/car) | TR·MO | аренда/трансфер |

### 2.3 Релокация/Номады `/relocation/` — приоритетный маржинальный клин (UK-first)
**Pillar:** `moving-to-north-macedonia` — «Moving to North Macedonia» (MO: Wise/SafetyWing рекуррент)

| Слаг | Целевой EN-запрос | Тип | Связка / нота |
|---|---|---|---|
| `living-in-skopje` | living in Skopje (районы, реальные цены) | TR·MO | Wise · **через лонгтейл, не «cost of living»** |
| `living-in-ohrid` | living in Ohrid as a digital nomad | TR·MO | Wise/SafetyWing |
| `north-macedonia-taxes-for-expats` | North Macedonia taxes for expats (flat 10%) | MO·YMYL | PwC/ujp.gov.mk + дисклеймер |
| `north-macedonia-residence-permit` | North Macedonia residence permit | YMYL | ВНЖ через работу/бизнес — **не номад-виза** |
| `cost-of-living-in-skopje` | cost of living in Skopje | TR | вход через город, не страну |
| `banking-in-north-macedonia` | opening a bank account in North Macedonia | TR | Wise |

_Директория услуг `/relocation/services/` — каркас (2–3 реальные услуги ИЛИ честная заглушка), ROADMAP C-R3-03._

### 2.4 Достопримечательности `/attractions/` — якорь Охрид + природа
**Pillar:** `things-to-do-in-ohrid` — «Things to do in Ohrid» (TR; cover + ≥3 figure)

| Слаг | Целевой EN-запрос | attractionType / region |
|---|---|---|
| `lake-ohrid` | Lake Ohrid guide (UNESCO) | waterfalls-canyons-lakes / southwestern |
| `church-of-st-john-kaneo` | Church of St. John at Kaneo | churches-monasteries / southwestern |
| `monastery-of-saint-naum` | Monastery of Saint Naum | churches-monasteries / southwestern |
| `matka-canyon` | Matka Canyon (from Skopje) | waterfalls-canyons-lakes / skopje |
| `pelister-national-park` | Pelister National Park | mountains-nature / pelagonia |
| `mavrovo-national-park` | Mavrovo National Park | mountains-nature / polog |
| `galicica-national-park` | Galičica National Park | mountains-nature / southwestern |
| `heraclea-lyncestis` | Heraclea Lyncestis (Bitola) | museums-urban / pelagonia |
| `old-bazaar-skopje` | Old Bazaar Skopje | museums-urban / skopje |

### 2.5 Города `/cities/`
**Pillar-узлы — путеводители-города.** Битола = самый лёгкий вход (анализ §5).

| Слаг | Целевой EN-запрос | region | Нота |
|---|---|---|---|
| `ohrid-travel-guide` | Ohrid travel guide | southwestern | связан с Охрид-пилларом 2.4 |
| `skopje-travel-guide` | things to do in Skopje | skopje | hotelWidget, Matka |
| `bitola-travel-guide` | Bitola travel guide | pelagonia | **лёгкий вход** |
| `tetovo` / `struga` / `prilep` / `stip` | {city} travel guide | polog/southwestern/pelagonia/eastern | вторичные точки, батчами (R4) |

_Коллекция `cities` (карточки) — Skopje/Ohrid/Bitola + по мере роста; связать с путеводителем (`article: reference`)._

### 2.6 Маршруты `/routes/` — AIO-стойкий формат
**Pillar:** `north-macedonia-7-day-itinerary` — «North Macedonia itinerary (7 days)» (TR; cover обязателен)

| Слаг | Целевой EN-запрос | Нота |
|---|---|---|
| `north-macedonia-10-day-itinerary` | North Macedonia 10-day itinerary | масштаб |
| `ohrid-weekend` | Ohrid weekend / 2-day | короткий формат |
| `mavrovo-loop` | Mavrovo & western North Macedonia road trip | природа |
| _балканские петли_ | — | см. §4 |

### 2.7 Еда `/food/`
**Pillar (статья):** `what-to-eat-in-north-macedonia` — «What to eat in North Macedonia» (TR)
**Директория (`/food/where-to-eat-{city}/`):** Skopje · Ohrid · Bitola (уже в `EDA_CITY_PAGES`). Карточки `restaurants` — по консенсусу **>4★** из нескольких источников, своё `ratingNote`/`review`, `$/$$/$$$`, `cuisineKey` (macedonian/balkan/grill/seafood…), `verifiedAt`. _Порог рейтинга — ожидает решения владельца._

### 2.8 Развлечения `/entertainment/` — сезонный множитель Q3
| Слаг | Целевой EN-запрос | razvlType |
|---|---|---|
| `lake-ohrid-beaches` | Lake Ohrid beaches | places |
| `ohrid-summer-festival` | Ohrid Summer Festival | events |
| `skopje-nightlife` | Skopje nightlife | nightlife |

### 2.9 Новости `/news/`
Не планируются заранее: ведутся скиллом `/news` (тревел-дайджест → превью → публикация). Ежедневный rebuild (`daily-news-rebuild.yml`) держит ленту/sitemap свежими (после починки CI-биллинга).

---

## 3. Интерлинк-карта

- **Планирование = хаб-донор:** pillar `plan-a-trip` ссылается во все кластеры; visa/currency/getting-around → MONEY (страховка/аренда/eSIM/трансфер).
- **Города ↔ всё:** путеводитель города ссылается на свои достопримечательности, `where-to-eat-{city}`, ближайшие маршруты, аренду/транспорт.
- **Охрид-узел:** Охрид-пиллар (2.4) ↔ `ohrid-travel-guide` (2.5) ↔ `lake-ohrid`/Kaneo/Naum ↔ `where-to-eat-ohrid` ↔ `ohrid-weekend`/балканская петля ↔ `living-in-ohrid`.
- **Релокация ↔ MONEY/Планирование:** релокейшн-страницы ссылаются на страховку, аренду, транспорт, города, eSIM, банкинг.
- **Маршруты = сшивка:** каждый маршрут ссылается на города/достопримечательности остановок + аренду.
- **Правило:** каждая страница — ≥2 внутренние + ≥1 кросс-кластерная ссылка; pillar↔spoke двусторонне во всех 3 языках.

---

## 4. Балканские кросс-сетевые страницы (USP сети)

Маршруты с кросс-линками на сайты сети (Албания/Черногория/Хорватия) — недублируемый актив (анализ §8). Взаимность ссылок — ожидает O3.

| Слаг | Что | Партнёр сети |
|---|---|---|
| `lake-ohrid-two-country-guide` | Охрид + Поградец (Албания), ~40 км/1 ч — двухстрановой гайд | **албанский** (уникальный кросс-граничный USP) |
| `balkan-grand-loop` | North Macedonia → Albania → Montenegro → Croatia | все три |
| `ohrid-to-tirana` | переезд/маршрут Охрид↔Тирана (~130 км) | албанский/черногорский |

---

## 5. Очередь первых ~30 страниц (ожидает O2/O4)

Каждая = тройка **en + ru/uk** (по O4). MO несут AffiliateBox через `/go/`.

| # | Страница | Кластер | Тип | Фаза |
|---|---|---|---|---|
| 0a | demo: `lake-ohrid` (demo) + `north-macedonia-7-day-itinerary` (demo) — эталон качества | — | — | R1 |
| 1 | `plan-a-trip-to-north-macedonia` (pillar) | Планирование | TR | R2 |
| 2 | `north-macedonia-visa-requirements` | Планирование | TR·YMYL | R2 |
| 3 | `currency-in-north-macedonia` | Планирование | TR | R2 |
| 4 | `best-time-to-visit-north-macedonia` | Планирование | TR | R2 |
| 5 | `getting-to-north-macedonia` | Планирование | TR | R2 |
| 6 | `things-to-do-in-ohrid` (pillar) | Достопр. | TR | R2 |
| 7 | `ohrid-travel-guide` (+city-карточка) | Города | TR | R2 |
| 8 | `bitola-travel-guide` (+city-карточка) — лёгкий вход | Города | TR | R2 |
| 9 | `lake-ohrid` | Достопр. | TR | R2 |
| 10 | `skopje-travel-guide` (+city-карточка) | Города | TR | R2 |
| 11 | `renting-a-car-in-north-macedonia` (pillar) | MONEY | MO | R3 |
| 12 | `car-rental-skopje-airport` | MONEY | MO | R3 |
| 13 | `travel-insurance-north-macedonia` | MONEY | MO | R3 |
| 14 | `best-esim-for-north-macedonia` | MONEY | MO | R3 |
| 15 | `skopje-airport-to-city` | Транспорт | MO | R3 |
| 16 | `moving-to-north-macedonia` (pillar) | Релокация | MO | R3 |
| 17 | `living-in-skopje` | Релокация | TR·MO | R3 |
| 18 | `north-macedonia-taxes-for-expats` | Релокация | MO·YMYL | R3 |
| 19 | `north-macedonia-residence-permit` | Релокация | YMYL | R3 |
| 20 | `living-in-ohrid` | Релокация | TR·MO | R3 |
| 21 | `matka-canyon` | Достопр. | TR | R4 |
| 22 | `monastery-of-saint-naum` + `church-of-st-john-kaneo` | Достопр. | TR | R4 |
| 23 | `pelister-national-park` + `mavrovo-national-park` | Достопр. | TR | R4 |
| 24 | `north-macedonia-7-day-itinerary` (реальный) | Маршруты | TR | R4 |
| 25 | `lake-ohrid-two-country-guide` (кросс-сеть) | Маршруты | TR | R4 |
| 26 | `tetovo` / `struga` / `prilep` (батч вторичных городов) | Города | TR | R4 |
| 27 | `what-to-eat-in-north-macedonia` (pillar) | Еда | TR | R4 |
| 28 | `where-to-eat-ohrid` + `where-to-eat-skopje` (директория + карточки) | Еда | TR | R4 |
| 29 | `lake-ohrid-beaches` + `ohrid-summer-festival` (к лету) | Развлечения | TR | R5 |
| 30 | `balkan-grand-loop` (кросс-сеть) | Маршруты | TR | R5 |

---

## 6. Открытые решения (блокируют финал плана)
- **O2 — порядок входа язык×кластер:** подтвердить рекомендацию §1 (Планирование+Охрид/Битола → MONEY → релокация-клин) или вывести релокацию в самый перёд.
- **O4 — RU-кластер при визе РФ:** обязательная пара на старте = ru+uk или en+uk (релокация — украинский приоритет)? Это меняет, какие версии генерим в R2–R3.
- **Порог рейтинга директории еды** (≈≥4.3★ Google+TripAdvisor) + список источников — до §2.7 (R4).
- **O3 — взаимность кросс-сети:** подтверждены ли албанский/черногорский/хорватский сайты для ответных ссылок (нужно для §4).

---

_Очередь и темы пересматриваются по данным GSC после запуска (ROADMAP R6-ритуал): дописывать спицы по реальному спросу, а не по гипотезам._
