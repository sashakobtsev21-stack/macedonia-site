/**
 * Снапшот «живых» данных для шапки (§8.4): погода в Скопье, Охриде, Битоле и Маврово.
 *
 * Это BUILD-TIME слой гибрида: при сборке тянем данные и зашиваем в HTML
 * (мгновенно видно, 0 CLS, работает без JS). Клиент потом обновляет свежими
 * значениями (/js/live-data.js). Любой сбой источника → null → в UI «—», сборка
 * не падает (try/catch + таймаут). Кэш на уровне модуля: один fetch на сборку,
 * даже если компонент рендерится на нескольких страницах (en/ru/uk).
 *
 * Источник: open-meteo (погода, без ключей, CORS ok). Македония внутриконтинентальная
 * (моря нет) → показываем 4 города-базы, включая горное Маврово, а НЕ температуру воды
 * (marine-API не покрывает Охридское озеро). Курс денара (евро-пег) — фича контент-фазы.
 */

export interface LiveSnapshot {
  air: {
    skopje: number | null;
    ohrid: number | null;
    bitola: number | null;
    mavrovo: number | null;
  };
}

// Скопье, Охрид, Битола, Маврово (4 точки в одном запросе open-meteo).
const AIR_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=41.9981,41.1172,41.0297,41.6692&longitude=21.4254,20.8019,21.3292,20.7497&current=temperature_2m';

async function jget(url: string, ms = 6000): Promise<unknown> {
  try {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), ms);
    const res = await fetch(url, { signal: ctl.signal });
    clearTimeout(timer);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

const temp = (loc: unknown): number | null => {
  const c = (loc as { current?: { temperature_2m?: unknown } } | null)?.current?.temperature_2m;
  return typeof c === 'number' ? c : null;
};

let cached: Promise<LiveSnapshot> | null = null;

export function getLiveSnapshot(): Promise<LiveSnapshot> {
  if (!cached) cached = build();
  return cached;
}

async function build(): Promise<LiveSnapshot> {
  const air = await jget(AIR_URL);
  const airArr = Array.isArray(air) ? air : [];
  return {
    air: {
      skopje: temp(airArr[0]),
      ohrid: temp(airArr[1]),
      bitola: temp(airArr[2]),
      mavrovo: temp(airArr[3]),
    },
  };
}
