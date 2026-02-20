'use client';

import { useState } from 'react';
import Link from 'next/link';
import BinyLogo from './icons/BinyLogo';

const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/', label: 'Водителям' },
  { href: '/', label: 'Блог' },
  { href: '/', label: 'О нас' },
];

{ /* drivers */}
{ /* blog */}
{ /* about-company */}

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#wa-clip)">
      <path d="M0.0836 9.877C0.083 11.618 0.541 13.318 1.413 14.816L0 19.934L5.279 18.56C6.734 19.347 8.371 19.762 10.038 19.763H10.042C15.53 19.763 19.998 15.331 20 9.885C20.001 7.246 18.966 4.764 17.086 2.897C15.206 1.03 12.706 0.001 10.042 0C4.553 0 0.086 4.431 0.084 9.877H0.0836ZM3.227 14.558L3.03 14.247C2.202 12.94 1.764 11.429 1.765 9.878C1.767 5.351 5.48 1.668 10.045 1.668C12.256 1.669 14.334 2.524 15.897 4.076C17.459 5.628 18.319 7.69 18.319 9.885C18.317 14.411 14.604 18.095 10.042 18.095H10.039C8.553 18.094 7.096 17.698 5.826 16.95L5.524 16.772L2.391 17.587L3.227 14.558Z" fill="white"/>
      <path d="M7.553 5.748C7.367 5.337 7.17 5.328 6.993 5.321C6.848 5.315 6.682 5.315 6.516 5.315C6.35 5.315 6.081 5.377 5.853 5.624C5.625 5.871 4.982 6.469 4.982 7.683C4.982 8.898 5.874 10.072 5.998 10.237C6.122 10.401 7.719 12.974 10.248 13.963C12.35 14.786 12.778 14.622 13.234 14.581C13.69 14.54 14.706 13.984 14.914 13.407C15.121 12.831 15.121 12.337 15.059 12.234C14.997 12.131 14.831 12.069 14.582 11.946C14.333 11.822 13.11 11.225 12.882 11.142C12.653 11.06 12.488 11.019 12.322 11.266C12.156 11.513 11.679 12.069 11.534 12.234C11.389 12.399 11.244 12.419 10.995 12.296C10.746 12.172 9.945 11.911 8.994 11.07C8.254 10.416 7.755 9.608 7.61 9.361C7.465 9.114 7.594 8.98 7.719 8.857C7.831 8.746 7.968 8.569 8.092 8.425C8.216 8.28 8.258 8.178 8.341 8.013C8.424 7.848 8.382 7.704 8.32 7.58C8.258 7.457 7.774 6.236 7.553 5.748Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="wa-clip">
        <rect width="20" height="20" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.1858 15.375L11.3894 17.524C11.3445 17.6394 11.27 17.7337 11.1658 17.8069C11.0616 17.8801 10.9449 17.9167 10.8157 17.9167C10.602 17.9167 10.4311 17.8288 10.3028 17.6531C10.1746 17.4773 10.1527 17.2853 10.2371 17.0769L13.4759 8.71797C13.5293 8.60259 13.6068 8.50965 13.7083 8.43913C13.8098 8.36862 13.9225 8.33336 14.0464 8.33336H14.5112C14.6351 8.33336 14.7478 8.36862 14.8493 8.43913C14.9508 8.50965 15.0282 8.60259 15.0817 8.71797L18.3204 17.0898C18.4049 17.2895 18.3851 17.4773 18.2612 17.6531C18.1372 17.8288 17.9684 17.9167 17.7548 17.9167C17.6169 17.9167 17.4981 17.8801 17.3982 17.8069C17.2983 17.7337 17.2216 17.6351 17.1682 17.5112L16.3717 15.375H12.1858ZM7.48553 11.3253L3.78041 15.0257C3.66503 15.1464 3.52214 15.2089 3.35174 15.2132C3.18134 15.2174 3.0315 15.1549 2.90222 15.0257C2.7815 14.9049 2.72114 14.7586 2.72114 14.5866C2.72114 14.4146 2.7815 14.2682 2.90222 14.1475L6.60737 10.4343C6.12659 9.94821 5.66959 9.37128 5.23637 8.70355C4.80313 8.03581 4.44656 7.35686 4.16666 6.66669H5.49195C5.73233 7.17096 6.02479 7.67524 6.36935 8.17953C6.7139 8.68381 7.08596 9.14267 7.48553 9.55613C8.07744 8.95891 8.63728 8.23374 9.16506 7.38063C9.69283 6.52753 10.0657 5.734 10.2836 5.00003H2.03526C1.8579 5.00003 1.70939 4.9402 1.58974 4.82055C1.47009 4.7009 1.41026 4.55239 1.41026 4.37505C1.41026 4.1977 1.47009 4.0492 1.58974 3.92955C1.70941 3.80988 1.85792 3.75005 2.03526 3.75005H6.87497V3.0289C6.87497 2.85157 6.9348 2.70307 7.05445 2.5834C7.1741 2.46375 7.3226 2.40392 7.49995 2.40392C7.6773 2.40392 7.8258 2.46375 7.94545 2.5834C8.0651 2.70307 8.12493 2.85157 8.12493 3.0289V3.75005H12.9647C13.142 3.75005 13.2905 3.80988 13.4102 3.92955C13.5298 4.0492 13.5897 4.1977 13.5897 4.37505C13.5897 4.55239 13.5298 4.7009 13.4102 4.82055C13.2905 4.9402 13.142 5.00003 12.9647 5.00003H11.5496C11.2793 5.93592 10.8485 6.91428 10.2572 7.93511C9.66583 8.95594 9.03468 9.79756 8.36372 10.46L10.4198 12.5657L9.94707 13.8494L7.48553 11.3253ZM12.5865 14.2693H15.9711L14.2788 9.72276L12.5865 14.2693Z" fill="#6D7885"/>
  </svg>
);

const ChevronIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 13.677C9.88 13.677 9.767 13.658 9.664 13.619C9.56 13.581 9.461 13.515 9.367 13.421L4.873 8.927C4.735 8.788 4.664 8.614 4.661 8.405C4.657 8.195 4.728 8.018 4.873 7.873C5.018 7.728 5.194 7.656 5.4 7.656C5.606 7.656 5.782 7.728 5.927 7.873L10 11.946L14.073 7.873C14.212 7.735 14.386 7.664 14.595 7.661C14.805 7.657 14.982 7.728 15.127 7.873C15.272 8.018 15.344 8.194 15.344 8.4C15.344 8.606 15.272 8.782 15.127 8.927L10.633 13.421C10.539 13.515 10.44 13.581 10.337 13.619C10.233 13.658 10.121 13.677 10 13.677Z" fill="#6D7885"/>
  </svg>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-content">
          {/* Left: logo + lang */}
          <div className="left-section">
            <Link href="/" className="logo" aria-label="BinY Home">
              <img src="/white-logo.png" alt="Logo" className="case-logo-small" />
            </Link>
            <button className="lang-btn">
              <GlobeIcon />
              <span>Русский</span>
              <ChevronIcon />
            </button>
          </div>

          {/* Center: nav */}
          <nav className="nav-links">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTAs */}
          <div className="right-section">
            <a
              className="btn-consult"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* https://wa.me/77711031141?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5 */}
              <WhatsAppIcon />
              <span>Бесплатная консультация</span>
            </a>
            <a className="btn-login" href="">
              {/* https://saas.biny.co/login */}
              Войти
            </a>
            <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Открыть меню">
              <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
                <rect y="0" width="24" height="2" fill="white" rx="1" />
                <rect y="8" width="24" height="2" fill="white" rx="1" />
                <rect y="16" width="24" height="2" fill="white" rx="1" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <Link href="/" className="logo" onClick={() => setMobileOpen(false)}>
              <BinyLogo />
            </Link>
            <button className="mobile-menu-close" onClick={() => setMobileOpen(false)} aria-label="Закрыть">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-menu-actions">
            <a
              className="btn-consult"
              href="https://wa.me/77711031141"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
            >
              <WhatsAppIcon />
              <span>Бесплатная консультация</span>
            </a>
            <a className="btn-login" href="https://saas.biny.co/login" onClick={() => setMobileOpen(false)}>
              Войти
            </a>
          </div>
        </div>
      )}
    </>
  );
}