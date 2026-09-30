const nav = [
  { href: '#how', label: 'Как работает' },
  { href: '#features', label: 'Приложение' },
  { href: '#results', label: 'Результаты' },
  { href: '#press', label: 'О нас пишут' },
  { href: '#contact', label: 'Запросить демо' },
];

const mentions = [
  { href: 'https://www.gov.kz/memleket/entities/maidd/press/news/details/1085723?lang=ru', label: 'Gov.kz' },
  { href: 'https://www.instagram.com/p/DPx90iFjasg/', label: 'Министерство ИИ' },
  { href: 'https://www.instagram.com/p/DPWia_bCnkk/', label: 'Astana Innovations' },
  { href: 'https://www.instagram.com/p/DPykpi2CHc6/', label: 'BAITC' },
  { href: 'https://www.youtube.com/watch?v=2K4B1VjTi2A', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src="/white-logo-trim.png" alt="BizAI" className="footer__logo" width={664} height={263} />
          <p className="footer__tagline">Aqyl Jol — ИИ для дорог Астаны и городов Казахстана.</p>
          <p className="footer__note">Участник и победитель Meta Llama Accelerator Kazakhstan 2025.</p>
        </div>

        <nav className="footer__col" aria-label="Разделы">
          <p className="footer__heading">Разделы</p>
          {nav.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
        </nav>

        <div className="footer__col">
          <p className="footer__heading">О нас пишут</p>
          {mentions.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
          ))}
        </div>

        <div className="footer__col">
          <p className="footer__heading">Контакты</p>
          <a href="tel:+77089050559">+7 (708) 905 05 59</a>
          <a href="mailto:izbassar.eng@gmail.com">izbassar.eng@gmail.com</a>
          <p className="footer__city">Астана, Казахстан</p>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© 2025 BizAI Team. Aqyl Jol.</span>
        <a href="https://drive.google.com/file/d/1Q0gWyvSnRc1-gxodW0C68S4zFUrgtd_x/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          Пользовательское соглашение
        </a>
      </div>
    </footer>
  );
}
