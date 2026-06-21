/**
 * live-data.js — клиентский слой блока «Сейчас в Северной Македонии» (§8.4).
 *
 * Дотягивает свежую погоду поверх build-time снапшота. Принципы:
 *  - один fetch на загрузку (НЕ polling, §15/правило 8 — без фоновых таймеров);
 *  - кэш в localStorage на 30 мин → повторный заход не дёргает сеть;
 *  - любой сбой источника → значение не трогаем, остаётся снапшот из HTML;
 *  - источник тот же, что в build (src/lib/liveSnapshot.ts) — держать синхронно.
 *  Македония без моря → 4 города-базы (Скопье/Охрид/Битола/Маврово), без воды.
 */
(() => {
  'use strict';
  const root = document.querySelector('[data-live]');
  if (!root) return;

  const AIR_URL =
    'https://api.open-meteo.com/v1/forecast?latitude=41.9981,41.1172,41.0297,41.6692&longitude=21.4254,20.8019,21.3292,20.7497&current=temperature_2m';
  const CACHE_KEY = 'nmg-live-v2';
  const TTL = 30 * 60 * 1000; // 30 минут

  const set = (key, val) => {
    if (val == null) return; // нет свежего значения → оставляем снапшот
    const el = root.querySelector('[data-live="' + key + '"]');
    if (el) el.textContent = val;
  };
  const fmtT = (n) => (typeof n === 'number' ? Math.round(n) + '°' : null);

  function render(d) {
    if (!d) return;
    set('air-skopje', fmtT(d.air && d.air.skopje));
    set('air-ohrid', fmtT(d.air && d.air.ohrid));
    set('air-bitola', fmtT(d.air && d.air.bitola));
    set('air-mavrovo', fmtT(d.air && d.air.mavrovo));
    const u = root.querySelector('[data-live="updated"]');
    if (u) {
      try {
        u.textContent = new Intl.DateTimeFormat(undefined, {
          hour: '2-digit',
          minute: '2-digit',
        }).format(new Date());
      } catch {
        /* оставляем build-time отметку */
      }
    }
  }

  async function jget(url) {
    try {
      const ctl = new AbortController();
      const timer = setTimeout(() => ctl.abort(), 6000);
      const res = await fetch(url, { signal: ctl.signal });
      clearTimeout(timer);
      if (!res.ok) return null;
      return await res.json();
    } catch {
      return null;
    }
  }

  // Свежий кэш → рисуем из него и не трогаем сеть.
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (raw) {
      const c = JSON.parse(raw);
      if (c && c.t && Date.now() - c.t < TTL && c.d) {
        render(c.d);
        return;
      }
    }
  } catch {
    /* localStorage недоступен — просто идём в сеть */
  }

  const runFetch = async () => {
    const air = await jget(AIR_URL);
    const temp = (x) =>
      x && x.current && typeof x.current.temperature_2m === 'number'
        ? x.current.temperature_2m
        : null;
    const airArr = Array.isArray(air) ? air : [];
    const d = {
      air: {
        skopje: temp(airArr[0]),
        ohrid: temp(airArr[1]),
        bitola: temp(airArr[2]),
        mavrovo: temp(airArr[3]),
      },
    };
    render(d);
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ t: Date.now(), d }));
    } catch {
      /* квота/приватный режим — не критично */
    }
  };
  // Сеть — вне критического пути: дёргаем в idle, чтобы не конкурировать с LCP.
  if ('requestIdleCallback' in window) requestIdleCallback(() => runFetch(), { timeout: 3000 });
  else setTimeout(runFetch, 1200);
})();
