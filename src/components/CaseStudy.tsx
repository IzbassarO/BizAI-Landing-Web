export default function CaseStudy() {
  return (
    <section className="case-section">
      {/* Background: add /public/astana_bg.png — aerial city texture */}
      <div className="case-overlay" />

      <div className="case-container">

        <div className="case-top">
          <div className="case-left">
            <div className="case-logo-placeholder">
              <img src="/white-logo.png" alt="AqylJol" className="case-logo-large" />
            </div>

            <h2 className="case-headline">
              МЫ СОКРАТИЛИ ВРЕМЯ РЕАКЦИИ КОММУНАЛЬНЫХ СЛУЖБ НА 30–40%
            </h2>
            <p className="case-tagline">РЕЗУЛЬТАТЫ ПИЛОТА НА ДАННЫХ АСТАНЫ</p>
          </div>

          <div className="case-review-card">
            <span className="case-review-label">Результаты системы</span>
            <p className="case-review-white">
              AQYL JOL ОБНАРУЖИВАЕТ ГОЛОЛЁД, СНЕГОПАД И ЗАТОПЛЕНИЯ ДО ПОСТУПЛЕНИЯ ЗВОНКОВ
              ГРАЖДАН. CV-МОДЕЛИ ОБУЧЕНЫ СПЕЦИАЛЬНО НА ДАННЫХ АСТАНЫ И ДОСТИГЛИ 95%
              ТОЧНОСТИ ОПРЕДЕЛЕНИЯ ИНЦИДЕНТОВ.
            </p>
            <p className="case-review-green">
              IRKT-ДВИЖОК АВТОМАТИЧЕСКИ ВЫБИРАЕТ БЛИЖАЙШУЮ ПОДХОДЯЩУЮ СПЕЦТЕХНИКУ
              И СТРОИТ ОПТИМАЛЬНЫЙ МАРШРУТ С УЧЁТОМ ТРАФИКА, ПОГОДЫ И ТИПА УГРОЗЫ.
            </p>
            <p className="case-review-white">
              В РЕЗУЛЬТАТЕ — ВРЕМЯ РЕАКЦИИ СОКРАЩАЕТСЯ НА 30–40%, РАСХОД ТОПЛИВА
              УМЕНЬШАЕТСЯ НА 12%, ЗАДЕРЖКИ НА ДОРОГАХ — НА 15%. ЖКХ СТАНОВИТСЯ
              ПРОЗРАЧНЫМ ДЛЯ ЖИТЕЛЕЙ ГОРОДА.
            </p>
          </div>
        </div>

        <div className="case-stats">
          <div className="case-stat case-stat--accent">
            <span className="case-stat__label">Точность CV-моделей</span>
            <span className="case-stat__value">95%</span>
          </div>
          <div className="case-stat case-stat--light">
            <span className="case-stat__label">Сокращение времени реакции</span>
            <span className="case-stat__value">30–40%</span>
          </div>
          <div className="case-stat case-stat--light">
            <span className="case-stat__label">Экономия топлива спецтехники</span>
            <span className="case-stat__value">&lt;12%</span>
          </div>
        </div>

      </div>
    </section>
  );
}