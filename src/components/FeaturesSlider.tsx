'use client';

import { useEffect, useState } from 'react';

const features = [
  {
    title: 'Карта инцидентов в реальном времени',
    text: 'Горячие точки, перекрытия и дорожные работы обновляются по данным камер, а не по звонкам.',
    img: '/app1.png',
    wide: false,
  },
  {
    title: 'Диспетчеризация спецтехники',
    text: 'Движок IRKT ранжирует участки и направляет ближайшую подходящую машину с учётом трафика и погоды.',
    img: '/app3.png',
    wide: false,
  },
  {
    title: 'Компьютерное зрение',
    text: 'Модели YOLOv8, обученные на данных Астаны, находят гололёд, снежные заносы, подтопления и аномальный трафик.',
    img: '/hero_img.png',
    wide: true,
  },
  {
    title: 'Прозрачность для жителей',
    text: 'iOS-приложение показывает, где работает техника, какие дороги перекрыты, и предлагает безопасный объезд.',
    img: '/app8.png',
    wide: false,
  },
  {
    title: 'Навигация с учётом угроз',
    text: 'Маршрут обходит гололёд и подтопленные участки, голосовые подсказки ведут до места.',
    img: '/app6.png',
    wide: false,
  },
];

const AUTO_MS = 5000;

export default function FeaturesSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % features.length), AUTO_MS);
    return () => clearTimeout(t);
  }, [active, paused]);

  const f = features[active];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="h2 features__title">Одна платформа для диспетчера и для жителя</h2>
        <div
          className="features__layout"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="features__list" role="tablist" aria-label="Возможности платформы">
            {features.map((item, i) => (
              <button
                key={item.title}
                role="tab"
                aria-selected={active === i}
                className={`features__item${active === i ? ' is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="features__item-title">{item.title}</span>
                <span className="features__item-text">{item.text}</span>
                {active === i && (
                  <span className="features__progress" aria-hidden="true">
                    <span
                      key={`${active}-${paused}`}
                      style={{ animationDuration: `${AUTO_MS}ms`, animationPlayState: paused ? 'paused' : 'running' }}
                    />
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="features__stage" role="tabpanel">
            <img
              key={f.img}
              src={f.img}
              alt={f.title}
              className={`features__img${f.wide ? ' features__img--wide' : ''}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
