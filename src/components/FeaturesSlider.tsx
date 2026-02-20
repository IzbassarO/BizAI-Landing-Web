'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';

const features = [
  {
    id: 0,
    title: 'Мониторинг инцидентов в реальном времени',
    subtitle: 'Карта горячих точек, перекрытий и дорожных работ обновляется в режиме реального времени на основе данных CV-камер.',
  },
  {
    id: 1,
    title: 'Интеллектуальная диспетчеризация спецтехники',
    subtitle: 'IRKT-движок автоматически ранжирует участки дорог и направляет ближайшую подходящую технику с учётом трафика и погоды.',
  },
  {
    id: 2,
    title: 'Компьютерное зрение: лёд, снег, паводок, ДТП',
    subtitle: 'YOLOv8-модели, обученные на данных Астаны, выявляют гололёд, снежные заносы, затопления и аномальный трафик до звонков граждан.',
  },
  {
    id: 3,
    title: 'Прозрачность для жителей',
    subtitle: 'iOS-приложение показывает, где сейчас работает спецтехника, какие дороги перекрыты и предлагает безопасные альтернативные маршруты.',
  },
  {
    id: 4,
    title: 'AI-ассистент и голосовой поиск',
    subtitle: 'LLaMA-ассистент помогает операторам формировать наряды и отвечает жителям на вопросы об инцидентах и маршрутах.',
  },
];

const AUTO_ADVANCE_MS = 4000;

export default function FeaturesSlider() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const imageSrc = useMemo(() => `/app${active + 2}.png`, [active]);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / AUTO_ADVANCE_MS) * 100, 100);
      setProgress(pct);
      if (pct >= 100) setActive((prev) => (prev + 1) % features.length);
    }, 30);
    return () => clearInterval(tick);
  }, [active]);

  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">Полный контроль над дорожной ситуацией</h2>

        <div className="features-layout">
          <div className="features-list">
            {features.map((f) => (
              <div
                key={f.id}
                className={`features-item${active === f.id ? ' active' : ''}`}
                onClick={() => setActive(f.id)}
              >
                <h3 className="features-item__title">{f.title}</h3>
                {active === f.id && (
                  <p className="features-item__subtitle">{f.subtitle}</p>
                )}
                {active === f.id && (
                  <div className="features-item__progress-track">
                    <div className="features-item__progress-fill" style={{ width: `${progress}%` }} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="features-mockup">
                        <Image
                            key={imageSrc}
                            src={imageSrc}
                            alt="Platform screenshot"
                            width={1200}
                            height={800}
                            className="features-mockup__img"
                            priority
                        />
                    </div>
        </div>
      </div>
    </section>
  );
}
