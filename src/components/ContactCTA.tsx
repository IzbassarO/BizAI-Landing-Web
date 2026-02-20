'use client';
import { useState } from 'react';

export default function ContactCTA() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <section className="cta-section" id="contact">
      <div className="cta-container">

        <div className="cta-left">
          <div className="cta-logo-wrap">
            <img src="/black-logo.png" alt="Logo" className="case-logo-large" />
          </div>
          <h2 className="cta-title">AQYL JOL — больше, чем навигация</h2>
          <p className="cta-subtitle">
            Это городская AI-инфраструктура для проактивного управления дорогами, спецтехникой
            и безопасностью жителей Астаны
          </p>
        </div>

        <div className="cta-card">
          <p className="cta-card__text">
            Оставьте контакты — мы покажем, как AQYL JOL может сократить время реакции
            служб и снизить число ДТП в вашем районе.
          </p>
          <input className="cta-input" type="text" placeholder="Введите имя и фамилию"
            value={name} onChange={(e) => setName(e.target.value)} />
          <input className="cta-input" type="tel" placeholder="+7 Номер телефона"
            value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button className="cta-submit">Запросить демо</button>
        </div>

      </div>
    </section>
  );
}