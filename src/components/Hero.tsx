'use client';

import { useEffect, useState } from 'react';

const incidents = [
  { kind: 'ice', label: 'Гололёд', conf: '0.93', unit: 'Пескоразбрасыватель ПР-12', eta: '6 мин' },
  { kind: 'snow', label: 'Снежный занос', conf: '0.89', unit: 'Грейдер Г-04', eta: '9 мин' },
  { kind: 'flood', label: 'Подтопление', conf: '0.91', unit: 'Илосос ВС-02', eta: '11 мин' },
  { kind: 'crash', label: 'ДТП, 2 авто', conf: '0.95', unit: 'Патруль и эвакуатор', eta: '4 мин' },
];

const CYCLE_MS = 3800;

export default function Hero() {
  const [i, setI] = useState(0);
  const [vehicles, setVehicles] = useState(14);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % incidents.length), CYCLE_MS);
    const c = setInterval(() => setVehicles(12 + Math.floor(Math.random() * 6)), 1400);
    return () => { clearInterval(t); clearInterval(c); };
  }, []);

  const inc = incidents[i];

  return (
    <section className="hero" id="top">
      <div className="container">
        <a href="#press" className="award">
          <span className="award__mark" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 1.5l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.3l-3.8 2 .7-4.3-3.1-3 4.3-.6L8 1.5z" fill="currentColor" /></svg>
          </span>
          Победитель Meta Llama Accelerator Kazakhstan 2025
        </a>

        <div className="hero__grid">
          <h1 className="hero__title">
            Город замечает гололёд раньше, чем звонят жители
          </h1>
          <div className="hero__side">
            <p className="hero__lead">
              Aqyl Jol смотрит на улицы Астаны через городские камеры, распознаёт лёд, снег,
              подтопления и ДТП и сразу отправляет ближайшую спецтехнику.
            </p>
            <div className="hero__actions">
              <a href="#contact" className="btn btn--signal">Запросить демо</a>
              <a href="#how" className="btn btn--ghost">Как это работает</a>
            </div>
          </div>
        </div>

        <figure className="cam">
          <div className="cam__frame">
            <img src="/app7.png" alt="Кадр городской камеры Астаны с распознанными автомобилями" className="cam__img" width={1110} height={502} />
            <div className="cam__scan" aria-hidden="true" />
            <span className="cam__corner cam__corner--tl" aria-hidden="true" />
            <span className="cam__corner cam__corner--tr" aria-hidden="true" />
            <span className="cam__corner cam__corner--bl" aria-hidden="true" />
            <span className="cam__corner cam__corner--br" aria-hidden="true" />

            <div className="cam__hud cam__hud--top">
              <span className="cam__live"><span className="cam__dot" />LIVE</span>
              <span>CAM-014 / Астана</span>
            </div>
            <div className="cam__hud cam__hud--bottom">
              <span>vehicles {vehicles}</span>
              <span>latency 38ms</span>
              <span>model yolov8-astana</span>
            </div>

            <div className="incident" key={inc.kind} aria-live="polite">
              <div className="incident__head">
                <span className={`incident__tag incident__tag--${inc.kind}`}>{inc.label}</span>
                <span className="incident__conf">{inc.conf}</span>
              </div>
              <p className="incident__unit">{inc.unit} назначен</p>
              <div className="incident__eta">
                <span>Прибытие</span>
                <strong>{inc.eta}</strong>
              </div>
              <div className="incident__bar"><span style={{ animationDuration: `${CYCLE_MS}ms` }} /></div>
            </div>
          </div>
          <figcaption className="cam__caption">
            Кадр с камеры Астаны. Карточка инцидента — демонстрация интерфейса диспетчера.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
