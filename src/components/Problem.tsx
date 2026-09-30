const stats = [
  { value: '16 000+', label: 'жителей пострадали от гололёда за одну зиму' },
  { value: '31 597', label: 'ДТП зарегистрировано в 2024 году' },
  { value: '60 млн ₸', label: 'город теряет на пробках каждый день' },
  { value: '40+', label: 'единиц спецтехники уходит на одно подтопление проспекта' },
];

export default function Problem() {
  return (
    <section className="problem" id="problem">
      <div className="container problem__grid">
        <div className="problem__intro">
          <h2 className="h2">Службы узнают о проблеме последними</h2>
          <p className="body-lg">
            Сегодня дорожная ситуация в Астане доходит до диспетчера через звонки жителей.
            Пока звонок принят и техника найдена, лёд уже стал травмой, а лужа — перекрытым
            проспектом. Единой картины в реальном времени нет.
          </p>
        </div>
        <dl className="problem__stats">
          {stats.map((s) => (
            <div key={s.value} className="problem__stat">
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
