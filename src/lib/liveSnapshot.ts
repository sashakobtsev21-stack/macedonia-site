/**
 * Снапшот «живых» данных для шапки (§8.4): погода в Скопье, Охриде и Битоле +
 * температура воды Охридского озера.
 *
 * Это BUILD-TIME слой гибрида: при сборке тянем данные и зашиваем в HTML
 * (мгновенно видно, 0 CLS, работает без JS). Клиент потом обновляет свежими
 * значениями (/js/live-data.js). Любой сбой источника → null → в UI «—», сборка
 * не падает (try/catch + таймаут). Кэш на уровне модуля: один fetch на сборку,
 * даже если компонент рендерится на нескольких страницах (en/ru/uk).
 *
 * Источник: open-meteo (погода/вода, без ключей, CORS ok). Цифры не выдумываем
 * (CLAUDE правило 4): нет данных — поле пустое. Курс денара (евро-пег ~61,5/EUR)
 * — отдельная фича контент-фазы (нужен источник по MKD), здесь не показываем.
 */

export interface LiveSnapshot {
  air: { skopje: number | null; ohrid: number | null; bitola: number | null };
  /** Температура воды Охридского озера (если источник отдаст; иначе null). */
  sea: number | null;
}

const AIR_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=41.9981,41.1172,41.0297&longitude=21.4254,20.8019,21.3292&current=temperature_2m';
const SEA_URL =
  'https://marine-api.open-meteo.com/v1/marine?latitude=41.07&longitude=20.71&current=sea_surface_temperature';

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
  const [air, sea] = await Promise.all([jget(AIR_URL), jget(SEA_URL)]);

  const airArr = Array.isArray(air) ? air : [];
  const seaVal = (sea as { current?: { sea_surface_temperature?: unknown } } | null)?.current
    ?.sea_surface_temperature;

  return {
    air: { skopje: temp(airArr[0]), ohrid: temp(airArr[1]), bitola: temp(airArr[2]) },
    sea: typeof seaVal === 'number' ? seaVal : null,
  };
}
