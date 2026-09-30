const results = [
  { value: '95%', label: 'точность распознавания инцидентов моделями, обученными на данных Астаны' },
  { value: '30–40%', label: 'быстрее реакция коммунальных служб' },
  { value: '12%', label: 'меньше расход топлива спецтехники' },
  { value: '15%', label: 'меньше задержек на дорогах' },
];

export default function Results() {
  return (
    <section className="results" id="results">
      <div className="results__bg" aria-hidden="true" />
      <div className="container results__inner">
        <div className="results__head">
          <h2 className="h2">Что показал пилот на данных Астаны</h2>
          <p className="body-lg">
            Aqyl Jol находит угрозу до первого звонка, выбирает технику и маршрут сам.
            ЖКХ становится понятным для жителей: видно, кто, где и когда чистит дорогу.
          </p>
        </div>
        <dl className="results__grid">
          {results.map((r, i) => (
            <div key={r.value} className={`results__cell${i === 0 ? ' results__cell--lead' : ''}`}>
              <dt>{r.value}</dt>
              <dd>{r.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
