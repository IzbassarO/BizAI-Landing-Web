import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="platform-container">

        <section className="hero">
          <h1 className="hero__title">AQYL JOL — умное управление дорогами Астаны</h1>
          <p className="hero__subtitle">
            AI-платформа для мониторинга трафика, диспетчеризации коммунальной спецтехники
            и безопасности дорог в реальном времени
          </p>
        </section>

        <div className="hero__actions">
          <button className="btn btn--accent">Узнать подробнее</button>
          <Link className="btn btn--outline" href="#contact">
            Запросить демо
          </Link>
        </div>

        {/* Platform screenshot — replace src once image is added to /public/ */}
        <div className="platform-demo">
          <div className="platform-mockup">
            <Image src="/hero_img.png" alt="Biny Platform" fill style={{objectFit:'cover',borderRadius:'inherit'}} />
            <div className="platform-mockup__placeholder">
              <span>Добавьте /public/aqyljol_preview.png</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}