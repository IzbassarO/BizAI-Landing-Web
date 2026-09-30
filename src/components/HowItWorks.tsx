const steps = [
  {
    title: 'Камера видит',
    text: 'Городские камеры передают видеопоток. Своих датчиков ставить не нужно.',
  },
  {
    title: 'Модель распознаёт',
    text: 'Модели YOLOv8, обученные на кадрах Астаны, находят гололёд, снег, воду на дороге и аварии с точностью 95%.',
  },
  {
    title: 'Движок IRKT решает, что важнее',
    text: 'Участки ранжируются по угрозе, трафику и погоде: сначала школа и мост, потом двор.',
  },
  {
    title: 'Выезжает ближайшая техника',
    text: 'Система подбирает подходящую машину и строит маршрут с учётом пробок. Диспетчер подтверждает одним нажатием.',
  },
  {
    title: 'Жители видят в приложении',
    text: 'Где работает техника, какие улицы перекрыты и как объехать. Ассистент на Llama отвечает на вопросы.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how" id="how">
      <div className="container">
        <h2 className="h2 how__title">От кадра до выезда техники — без звонка в диспетчерскую</h2>
        <ol className="how__road">
          {steps.map((s, i) => (
            <li key={s.title} className="how__step">
              <span className="how__num" aria-hidden="true">{i + 1}</span>
              <h3 className="how__step-title">{s.title}</h3>
              <p className="how__step-text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
