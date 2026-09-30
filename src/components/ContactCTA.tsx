'use client';

import { useState } from 'react';

const roles = ['Акимат или госорган', 'Коммунальная служба', 'Инвестор или партнёр', 'СМИ'];

export default function ContactCTA() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState(roles[0]);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) return setError('Укажите имя, чтобы мы знали, к кому обращаться.');
    if (phone.replace(/\D/g, '').length < 10) return setError('Номер телефона должен содержать не меньше 10 цифр.');
    setError('');
    setSent(true);
  };

  return (
    <section className="cta" id="contact">
      <div className="container cta__grid">
        <div className="cta__copy">
          <h2 className="h2">Покажем Aqyl Jol на камерах вашего района</h2>
          <p className="body-lg">
            За 30 минут разберём, какие участки у вас самые проблемные зимой и весной, и покажем,
            как система распределила бы технику.
          </p>
          <ul className="cta__points">
            <li>Работает на существующих городских камерах</li>
            <li>Модели дообучаются на данных вашего города</li>
            <li>Приложение для жителей на русском и казахском</li>
          </ul>
        </div>

        <div className="cta__card">
          {sent ? (
            <div className="cta__done" role="status">
              <span className="cta__check" aria-hidden="true">
                <svg width="28" height="28" viewBox="0 0 28 28"><path d="M7 14.5l5 5 9-11" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <h3>Заявка отправлена</h3>
              <p>{name.split(' ')[0]}, мы позвоним на {phone} в течение рабочего дня.</p>
              <button className="text-link" onClick={() => { setSent(false); setName(''); setPhone(''); }}>
                Отправить ещё одну
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <fieldset className="cta__roles">
                <legend>Вы представляете</legend>
                <div className="cta__role-list">
                  {roles.map((r) => (
                    <label key={r} className={`chip chip--dark${role === r ? ' is-on' : ''}`}>
                      <input type="radio" name="role" value={r} checked={role === r} onChange={() => setRole(r)} />
                      {r}
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="field">
                <span>Имя и фамилия</span>
                <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Айгерим Садыкова" />
              </label>
              <label className="field">
                <span>Телефон</span>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" autoComplete="tel" placeholder="+7 700 000 00 00" />
              </label>
              {error && <p className="cta__error" role="alert">{error}</p>}
              <button type="submit" className="btn btn--signal btn--block">Запросить демо</button>
              <p className="cta__legal">
                Нажимая кнопку, вы соглашаетесь с{' '}
                <a href="https://drive.google.com/file/d/1Q0gWyvSnRc1-gxodW0C68S4zFUrgtd_x/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  пользовательским соглашением
                </a>.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
