'use client';

import { useEffect, useState } from 'react';

const navLinks = [
  { href: '#how', label: 'Как работает' },
  { href: '#features', label: 'Приложение' },
  { href: '#results', label: 'Результаты' },
  { href: '#press', label: 'О нас пишут' },
];

const languages = ['Русский', 'Қазақша', 'English'];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState(languages[0]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <a href="#top" className="brand" aria-label="Aqyl Jol — на главную">
          <img src="/white-logo-trim.png" alt="BizAI" className="brand__logo" width={664} height={263} />
          <span className="brand__divider" aria-hidden="true" />
          <span className="brand__product">Aqyl Jol</span>
        </a>

        <nav className="site-nav" aria-label="Основная навигация">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="site-nav__link">{l.label}</a>
          ))}
        </nav>

        <div className="site-header__actions">
          <div className="lang">
            <button
              className="lang__btn"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              onClick={() => setLangOpen((v) => !v)}
            >
              {lang.slice(0, 2).toUpperCase()}
              <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>
            </button>
            {langOpen && (
              <ul className="lang__menu" role="listbox">
                {languages.map((l) => (
                  <li key={l}>
                    <button
                      role="option"
                      aria-selected={l === lang}
                      className="lang__option"
                      onClick={() => { setLang(l); setLangOpen(false); }}
                    >
                      {l}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a href="#contact" className="btn btn--signal btn--sm site-header__cta">Запросить демо</a>
          <button className="burger" onClick={() => setOpen(true)} aria-label="Открыть меню">
            <span /><span />
          </button>
        </div>
      </div>

      {open && (
        <div className="drawer" role="dialog" aria-modal="true" aria-label="Меню">
          <div className="drawer__top">
            <span className="brand__product">Aqyl Jol</span>
            <button className="drawer__close" onClick={() => setOpen(false)} aria-label="Закрыть меню">
              <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true"><path d="M5 5l12 12M17 5 5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
            </button>
          </div>
          <nav className="drawer__nav">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </nav>
          <a href="#contact" className="btn btn--signal" onClick={() => setOpen(false)}>Запросить демо</a>
        </div>
      )}
    </header>
  );
}
