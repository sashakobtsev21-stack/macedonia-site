# Бриф: {slug}

> Вход контент-конвейера (SPEC §12). Заполняет владелец/ресёрч ДО написания.
> Факты не выдумываем (CLAUDE правило 4): нет данных → TODO. YMYL (визы/налоги/ВНЖ)
> — только из первоисточников, список в `briefs/_SOURCES-YMYL.md` + дисклеймер.

- **Тип:** article | news | route | restaurant | service | city
- **Раздел (category):** attractions | cities | food | entertainment | routes | transport | car-rental | relocation | insurance | news | planning
- **Целевой EN-запрос (главный):** TODO  _(EN-first; + 2–3 связанных лонгтейла)_
- **Город/гео:** Skopje | Ohrid | Bitola | Tetovo | Struga | Mavrovo | … (+ `region` из enum: skopje/polog/eastern/northeastern/southeastern/southwestern/vardar/pelagonia)

## Вопросы читателя (5–7) — на них отвечает материал
1. TODO
2. TODO

## Факты (каждый — с источником)
- TODO факт — _источник: URL · дата проверки_
- Цены/часы/контакты: TODO — _источник + дата_ (нет данных → не указывать или «уточняйте»)
- **YMYL** (визы/налоги/ВНЖ): только из `briefs/_SOURCES-YMYL.md` + видимый дисклеймер

## Фото (CC/PD/своё)
- Кандидаты: TODO _(Wikimedia Commons / Openverse / Unsplash; webp ≤200 КБ)_
- Атрибуция (автор + лицензия) для CC/чужого — обязательна (`coverCredit`)

## Партнёрки (1–3, через `/go/{partner}?c={slug}`)
- TODO: aviasales | airalo | safetywing | discovercars | localrent | booking | getyourguide | viator | wise

## Внутренние ссылки (≥2)
- TODO: на pillar раздела + 1–2 связанные статьи (pillar↔spoke двусторонне)

## Личный опыт / заметки (E-E-A-T)
- TODO: личные детали, если есть (фото со своим EXIF, цены в денарах, наблюдения)
