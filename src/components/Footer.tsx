import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/', label: 'Команда' },
  { href: '/', label: 'О проекте' },
  { href: '', label: 'Блог' },
];
{/* team */}
{/* about */}
{/* /blog */}

const socialLinks = [
  {
    href: '',
    label: 'YouTube',
    icon: <svg width="20" height="20" viewBox="0 0 29 29" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M24.4097 7.27543C25.0275 7.44697 25.5126 7.9526 25.6752 8.59546C25.9714 9.76267 25.9714 12.1972 25.9714 12.1972C25.9714 12.1972 25.9714 14.6318 25.6752 15.799C25.5126 16.4418 25.0275 16.9475 24.4097 17.119C23.2836 17.4273 18.7143 17.4273 18.7143 17.4273C18.7143 17.4273 14.145 17.4273 13.0189 17.119C12.401 16.9475 11.916 16.4418 11.7533 15.799C11.4571 14.6318 11.4571 12.1972 11.4571 12.1972C11.4571 12.1972 11.4571 9.76267 11.7533 8.59546C11.916 7.9526 12.401 7.44697 13.0189 7.27543C14.145 6.96716 18.7143 6.96716 18.7143 6.96716C18.7143 6.96716 23.2836 6.96716 24.4097 7.27543ZM21.198 12.1972L17.1429 14.5758V9.81861L21.198 12.1972Z" fill="white"/></svg>,
  },
  {
    href: '',
    label: 'Instagram',
    icon: <svg width="20" height="20" viewBox="0 0 29 29" fill="none"><path d="M14.9545 10.614C12.9131 10.614 11.2582 12.2661 11.2582 14.3042C11.2582 16.3422 12.9131 17.9943 14.9545 17.9943C16.996 17.9943 18.6509 16.3422 18.6509 14.3042C18.6509 12.2661 16.996 10.614 14.9545 10.614Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M9.00571 4.17779C12.9274 3.74022 16.9817 3.74022 20.9034 4.17779C23.0625 4.4187 24.804 6.11705 25.0574 8.2801C25.5263 12.2825 25.5263 16.3258 25.0574 20.3282C24.804 22.4913 23.0625 24.1896 20.9034 24.4305C16.9817 24.8681 12.9274 24.8681 9.00571 24.4305C6.84658 24.1896 5.10509 22.4913 4.85168 20.3282C4.38277 16.3258 4.38277 12.2825 4.85168 8.2801C5.10509 6.11705 6.84658 4.4187 9.00571 4.17779ZM20.6412 7.49158C20.0131 7.49158 19.5039 7.99992 19.5039 8.62701C19.5039 9.25409 20.0131 9.76243 20.6412 9.76243C21.2694 9.76243 21.7786 9.25409 21.7786 8.62701C21.7786 7.99992 21.2694 7.49158 20.6412 7.49158ZM9.55216 14.3042C9.55216 11.3255 11.9709 8.91086 14.9545 8.91086C17.9382 8.91086 20.3569 11.3255 20.3569 14.3042C20.3569 17.2828 17.9382 19.6974 14.9545 19.6974C11.9709 19.6974 9.55216 17.2828 9.55216 14.3042Z" fill="white"/></svg>,
  },
  {
    href: '',
    label: 'LinkedIn',
    icon: <svg width="20" height="20" viewBox="0 0 29 29" fill="none"><path d="M7.34041 1.93945C6.03429 1.93945 4.97546 3.02234 4.97546 4.35815C4.97546 5.69395 6.03429 6.77684 7.34041 6.77684C8.64653 6.77684 9.70535 5.69395 9.70535 4.35815C9.70535 3.02234 8.64653 1.93945 7.34041 1.93945Z" fill="white"/><path d="M5.11458 8.7687C5.03775 8.7687 4.97546 8.8324 4.97546 8.91098V23.7077C4.97546 23.7863 5.03775 23.85 5.11458 23.85H9.56624C9.64307 23.85 9.70535 23.7863 9.70535 23.7077V8.91098C9.70535 8.8324 9.64307 8.7687 9.56624 8.7687H5.11458Z" fill="white"/><path d="M12.3485 8.7687C12.2717 8.7687 12.2094 8.8324 12.2094 8.91098V23.7077C12.2094 23.7863 12.2717 23.85 12.3485 23.85H16.8002C16.877 23.85 16.9393 23.7863 16.9393 23.7077V15.7402C16.9393 15.1742 17.1591 14.6314 17.5505 14.2312C17.9418 13.8309 18.4726 13.6061 19.026 13.6061C19.5794 13.6061 20.1102 13.8309 20.5015 14.2312C20.8929 14.6314 21.1127 15.1742 21.1127 15.7402V23.7077C21.1127 23.7863 21.175 23.85 21.2518 23.85H25.7035C25.7803 23.85 25.8426 23.7863 25.8426 23.7077V13.8966C25.8426 11.1345 23.4937 8.97357 20.8065 9.22342C19.9778 9.30047 19.1584 9.51117 18.3933 9.84652L16.9393 10.4838V8.91098C16.9393 8.8324 16.877 8.7687 16.8002 8.7687H12.3485Z" fill="white"/></svg>,
  },
  {
    href: '',
    label: 'Facebook',
    icon: <svg width="20" height="20" viewBox="0 0 29 29" fill="none"><path d="M25.4091 14.7636C25.4091 8.74177 20.5219 3.85449 14.5 3.85449C8.47822 3.85449 3.59094 8.74177 3.59094 14.7636C3.59094 20.0436 7.34367 24.4399 12.3182 25.4545V18.0363H10.1364V14.7636H12.3182V12.0363C12.3182 9.93086 14.0309 8.21813 16.1364 8.21813H18.8637V11.4909H16.6819C16.0819 11.4909 15.5909 11.9818 15.5909 12.5818V14.7636H18.8637V18.0363H15.5909V25.6181C21.1 25.0727 25.4091 20.4254 25.4091 14.7636Z" fill="white"/></svg>,
  },
  {
    href: '',
    label: 'TikTok',
    icon: <svg width="20" height="20" viewBox="0 0 29 29" fill="none"><path d="M19.834 7.12537C19.0414 6.21887 18.6046 5.05471 18.6049 3.84961H15.0219V18.2536C14.9943 19.0331 14.6658 19.7714 14.1056 20.3131C13.5454 20.8548 12.7972 21.1576 12.0186 21.1577C10.3721 21.1577 9.0038 19.8102 9.0038 18.1375C9.0038 16.1395 10.9287 14.641 12.9115 15.2567V11.586C8.91104 11.0516 5.40918 14.1648 5.40918 18.1375C5.40918 22.0057 8.60955 24.7587 12.007 24.7587C15.648 24.7587 18.6049 21.7966 18.6049 18.1375V10.8309C20.0578 11.8762 21.8022 12.437 23.591 12.434V8.84456C23.591 8.84456 21.411 8.9491 19.834 7.12537Z" fill="white"/></svg>,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">

        {/* Column 1: Brand */}
        <div className="footer__brand">
          <div className="footer__brand-logo">
            <img
              src="/white-logo.png"
              alt="Logo"
              className="footer__logo"
            />
          </div>
          <p className="footer__brand-tagline">Умное управление дорогами<br/>Астаны и СНГ</p>
          <p className="footer__brand-desc">
            AQYL JOL — AI-платформа для мониторинга трафика, диспетчеризации спецтехники и повышения дорожной безопасности
          </p>
        </div>

        {/* Column 2: Nav */}
        <nav className="footer__nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="footer__nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Column 3: Partners + Social + Contacts */}
        <div className="footer__right">
          {/* Partner logos — replace divs with <img> when you have the files */}
          <div className="footer__partners">
            {/* <img src="/astana_hub.svg" alt="Astana Hub" className="partner-logo" /> */}
            {/* <img src="/amanat.svg" alt="Amanat" className="partner-logo" /> */}
            <span className="partner-text">⬤ astana hub</span>
            <span className="partner-text">amanat</span>
          </div>
          <p className="footer__partner-desc">
            Участники программы Meta Llama Accelerator. Партнеры AI Hub. Трек: Astana Innovations
          </p>

          <p className="footer__social-label">мы в социальных сетях</p>
          <div className="footer__socials">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="social-icon" title={s.label}>
                {s.icon}
              </a>
            ))}
          </div>

          <p className="footer__contacts-title">Контакты</p>
          <a href="tel:++77089040559" className="footer__contact-link">+7 (708) 905 05 59</a>
          <a href="mailto:izbassar.eng@gmail.com" className="footer__contact-link">izbassar.eng@gmail.com</a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <span className="footer__copyright">© BizAI Team — AQYL JOL 2025</span>
        <a href="https://drive.google.com/file/d/1Q0gWyvSnRc1-gxodW0C68S4zFUrgtd_x/view?usp=sharing" target="_blank"
          rel="noopener noreferrer" className="footer__policy">
          Пользовательское соглашение
        </a>
        { /*https://app.biny.co/privacy-policy.pdf */ }
      </div>
    </footer>
  );
}

{ /*
import Link from 'next/link';
import BinyLogo from './icons/BinyLogo';

const navLinks = [
  { href: '/', label: 'Главная' },
  { href: '/team', label: 'Команда' },
  { href: '/about', label: 'О проекте' },
  { href: '/blog', label: 'Блог' },
];

const socialLinks = [
  {
    href: 'https://www.youtube.com/@biny.co',
    label: 'YouTube',
    icon: <svg width="20" height="20" viewBox="0 0 29 29" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M24.4097 7.27543C25.0275 7.44697 25.5126 7.9526 25.6752 8.59546C25.9714 9.76267 25.9714 12.1972 25.9714 12.1972C25.9714 12.1972 25.9714 14.6318 25.6752 15.799C25.5126 16.4418 25.0275 16.9475 24.4097 17.119C23.2836 17.4273 18.7143 17.4273 18.7143 17.4273C18.7143 17.4273 14.145 17.4273 13.0189 17.119C12.401 16.9475 11.916 16.4418 11.7533 15.799C11.4571 14.6318 11.4571 12.1972 11.4571 12.1972C11.4571 12.1972 11.4571 9.76267 11.7533 8.59546C11.916 7.9526 12.401 7.44697 13.0189 7.27543C14.145 6.96716 18.7143 6.96716 18.7143 6.96716C18.7143 6.96716 23.2836 6.96716 24.4097 7.27543ZM21.198 12.1972L17.1429 14.5758V9.81861L21.198 12.1972Z" fill="white"/></svg>,
  },
  {
    href: 'https://www.instagram.com/biny__co/',
    label: 'Instagram',
    icon: <svg width="20" height="20" viewBox="0 0 29 29" fill="none"><path d="M14.9545 10.614C12.9131 10.614 11.2582 12.2661 11.2582 14.3042C11.2582 16.3422 12.9131 17.9943 14.9545 17.9943C16.996 17.9943 18.6509 16.3422 18.6509 14.3042C18.6509 12.2661 16.996 10.614 14.9545 10.614Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M9.00571 4.17779C12.9274 3.74022 16.9817 3.74022 20.9034 4.17779C23.0625 4.4187 24.804 6.11705 25.0574 8.2801C25.5263 12.2825 25.5263 16.3258 25.0574 20.3282C24.804 22.4913 23.0625 24.1896 20.9034 24.4305C16.9817 24.8681 12.9274 24.8681 9.00571 24.4305C6.84658 24.1896 5.10509 22.4913 4.85168 20.3282C4.38277 16.3258 4.38277 12.2825 4.85168 8.2801C5.10509 6.11705 6.84658 4.4187 9.00571 4.17779ZM20.6412 7.49158C20.0131 7.49158 19.5039 7.99992 19.5039 8.62701C19.5039 9.25409 20.0131 9.76243 20.6412 9.76243C21.2694 9.76243 21.7786 9.25409 21.7786 8.62701C21.7786 7.99992 21.2694 7.49158 20.6412 7.49158ZM9.55216 14.3042C9.55216 11.3255 11.9709 8.91086 14.9545 8.91086C17.9382 8.91086 20.3569 11.3255 20.3569 14.3042C20.3569 17.2828 17.9382 19.6974 14.9545 19.6974C11.9709 19.6974 9.55216 17.2828 9.55216 14.3042Z" fill="white"/></svg>,
  },
  {
    href: 'https://www.linkedin.com/company/biny.co/',
    label: 'LinkedIn',
    icon: <svg width="20" height="20" viewBox="0 0 29 29" fill="none"><path d="M7.34041 1.93945C6.03429 1.93945 4.97546 3.02234 4.97546 4.35815C4.97546 5.69395 6.03429 6.77684 7.34041 6.77684C8.64653 6.77684 9.70535 5.69395 9.70535 4.35815C9.70535 3.02234 8.64653 1.93945 7.34041 1.93945Z" fill="white"/><path d="M5.11458 8.7687C5.03775 8.7687 4.97546 8.8324 4.97546 8.91098V23.7077C4.97546 23.7863 5.03775 23.85 5.11458 23.85H9.56624C9.64307 23.85 9.70535 23.7863 9.70535 23.7077V8.91098C9.70535 8.8324 9.64307 8.7687 9.56624 8.7687H5.11458Z" fill="white"/><path d="M12.3485 8.7687C12.2717 8.7687 12.2094 8.8324 12.2094 8.91098V23.7077C12.2094 23.7863 12.2717 23.85 12.3485 23.85H16.8002C16.877 23.85 16.9393 23.7863 16.9393 23.7077V15.7402C16.9393 15.1742 17.1591 14.6314 17.5505 14.2312C17.9418 13.8309 18.4726 13.6061 19.026 13.6061C19.5794 13.6061 20.1102 13.8309 20.5015 14.2312C20.8929 14.6314 21.1127 15.1742 21.1127 15.7402V23.7077C21.1127 23.7863 21.175 23.85 21.2518 23.85H25.7035C25.7803 23.85 25.8426 23.7863 25.8426 23.7077V13.8966C25.8426 11.1345 23.4937 8.97357 20.8065 9.22342C19.9778 9.30047 19.1584 9.51117 18.3933 9.84652L16.9393 10.4838V8.91098C16.9393 8.8324 16.877 8.7687 16.8002 8.7687H12.3485Z" fill="white"/></svg>,
  },
  {
    href: 'https://www.facebook.com/profile.php?id=100095442646646',
    label: 'Facebook',
    icon: <svg width="20" height="20" viewBox="0 0 29 29" fill="none"><path d="M25.4091 14.7636C25.4091 8.74177 20.5219 3.85449 14.5 3.85449C8.47822 3.85449 3.59094 8.74177 3.59094 14.7636C3.59094 20.0436 7.34367 24.4399 12.3182 25.4545V18.0363H10.1364V14.7636H12.3182V12.0363C12.3182 9.93086 14.0309 8.21813 16.1364 8.21813H18.8637V11.4909H16.6819C16.0819 11.4909 15.5909 11.9818 15.5909 12.5818V14.7636H18.8637V18.0363H15.5909V25.6181C21.1 25.0727 25.4091 20.4254 25.4091 14.7636Z" fill="white"/></svg>,
  },
  {
    href: 'https://www.tiktok.com/@biny.co',
    label: 'TikTok',
    icon: <svg width="20" height="20" viewBox="0 0 29 29" fill="none"><path d="M19.834 7.12537C19.0414 6.21887 18.6046 5.05471 18.6049 3.84961H15.0219V18.2536C14.9943 19.0331 14.6658 19.7714 14.1056 20.3131C13.5454 20.8548 12.7972 21.1576 12.0186 21.1577C10.3721 21.1577 9.0038 19.8102 9.0038 18.1375C9.0038 16.1395 10.9287 14.641 12.9115 15.2567V11.586C8.91104 11.0516 5.40918 14.1648 5.40918 18.1375C5.40918 22.0057 8.60955 24.7587 12.007 24.7587C15.648 24.7587 18.6049 21.7966 18.6049 18.1375V10.8309C20.0578 11.8762 21.8022 12.437 23.591 12.434V8.84456C23.591 8.84456 21.411 8.9491 19.834 7.12537Z" fill="white"/></svg>,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">


        <div className="footer__brand">
          <div className="footer__brand-logo">
            <BinyLogo />
          </div>
          <p className="footer__brand-tagline">Умное управление дорогами<br/>Астаны и СНГ</p>
          <p className="footer__brand-desc">
            AQYL JOL — AI-платформа для мониторинга трафика, диспетчеризации спецтехники и повышения дорожной безопасности
          </p>
        </div>


        <nav className="footer__nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="footer__nav-link">
              {link.label}
            </Link>
          ))}
        </nav>


        <div className="footer__right">
          <div className="footer__partners">
            <span className="partner-text">⬤ astana hub</span>
            <span className="partner-text">amanat</span>
          </div>
          <p className="footer__partner-desc">
            Участник программы Meta Llama Accelerator. Резидент Astana HUB. Трек: Astana Innovations
          </p>

          <p className="footer__social-label">мы в социальных сетях</p>
          <div className="footer__socials">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="social-icon" title={s.label}>
                {s.icon}
              </a>
            ))}
          </div>

          <p className="footer__contacts-title">Контакты</p>
          <a href="tel:+77000000000" className="footer__contact-link">+7 (700) 000 00 00</a>
          <a href="mailto:gizatovdusolei@gmail.com" className="footer__contact-link">gizatovdusolei@gmail.com</a>
        </div>

      </div>

      <div className="footer__bottom">
        <span className="footer__copyright">© BizAI Team — AQYL JOL 2025</span>
        <a href="/aqyljol_privacy_policy.pdf" target="_blank"
          rel="noopener noreferrer" className="footer__policy">
          Пользовательское соглашение
        </a>
      </div>
    </footer>
  );
}
*/}