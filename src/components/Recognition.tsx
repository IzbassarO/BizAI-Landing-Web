const orgs = [
  'Meta Llama Accelerator',
  'Министерство ИИ и цифрового развития РК',
  'Astana Innovations',
  'BAITC',
  'Digital Bridge 2025',
  'Атырауский университет им. Х. Досмухамедова',
  'Партия «Amanat»',
];

export default function Recognition() {
  return (
    <section className="recog" aria-label="Кто поддержал проект">
      <div className="container recog__inner">
        <p className="recog__lead">О проекте рассказывали</p>
        <ul className="recog__list">
          {orgs.map((o) => <li key={o}>{o}</li>)}
        </ul>
      </div>
    </section>
  );
}
