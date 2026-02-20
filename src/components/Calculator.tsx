'use client';

import { useState } from 'react';

const incidentTypes = [
  { id: 'ice',   label: 'Гололёд',    icon: '🧊' },
  { id: 'snow',  label: 'Снегопад',   icon: '❄️' },
  { id: 'flood', label: 'Затопление', icon: '🌊' },
  { id: 'crash', label: 'ДТП',        icon: '🚗' },
];

export default function Calculator() {
  const [selectedType, setSelectedType] = useState('');
  const [district, setDistrict] = useState('');
  const [street, setStreet] = useState('');

  return (
    <section className="calculator-section">
      <div className="calculator-template">

        {/* Left column */}
        <div className="calculator-template__word">
          <h2 className="calculator-template__title">
            Проблема дорожной безопасности Астаны в цифрах
          </h2>
          <p className="calculator-template__description">
            Ежедневно жители Астаны сталкиваются с последствиями несвоевременного реагирования
            коммунальных служб. Отсутствие единой системы мониторинга приводит к задержкам
            диспетчеризации, перерасходу топлива и росту числа ДТП. AQYL JOL меняет это —
            переводя городское управление дорогами в режим реального времени с помощью
            компьютерного зрения и AI-оптимизации маршрутов.
          </p>

          {/* Stats list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
            {[
              { label: 'пострадавших за зиму от гололёда', value: '16 000+' },
              { label: 'ДТП зарегистрировано в 2024 году', value: '31 597' },
              { label: 'убытков ежедневно от пробок', value: '60 млн ₸' },
              { label: 'спецтехники на 1 затопление проспекта', value: '40+ ед.' },
            ].map((s) => (
              <div key={s.label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 22, fontWeight: 800, color: '#FA1861' }}>{s.value}</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.4 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: app screenshot */}
        <div className="calc-phones-wrap">
          <img
            src="/app_preview.png"
            alt="AQYL JOL мобильное приложение"
            className="calc-phones-img"
          />
        </div>

      </div>
    </section>
  );
}