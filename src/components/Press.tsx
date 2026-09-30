'use client';

import { useState } from 'react';
import { pressItems, video, kindLabel, type PressKind } from '@/data/press';

const filters: { id: 'all' | PressKind; label: string }[] = [
  { id: 'all', label: 'Все' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'article', label: 'Статьи' },
  { id: 'message', label: 'Обращения' },
];

function KindIcon({ kind }: { kind: PressKind }) {
  if (kind === 'instagram') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <rect x="1.5" y="1.5" width="13" height="13" rx="4" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" fill="none" />
        <circle cx="11.8" cy="4.2" r=".9" fill="currentColor" />
      </svg>
    );
  }
  if (kind === 'message') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h9A1.5 1.5 0 0 1 14 3.5v6A1.5 1.5 0 0 1 12.5 11H6l-3.2 2.6c-.3.2-.8 0-.8-.4V3.5z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 1.5h7l3 3v10H3z" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
      <path d="M5.5 7h5M5.5 9.5h5M5.5 12h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function VideoCard() {
  const [playing, setPlaying] = useState(false);
  return (
    <article className="video">
      <div className="video__frame">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button className="video__poster" onClick={() => setPlaying(true)} aria-label={`Смотреть: ${video.title}`}>
            <span className="video__fallback" aria-hidden="true">Aqyl Jol на заседании при «Amanat»</span>
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="video__play" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 22 22"><path d="M7 4.5v13l11-6.5z" fill="currentColor" /></svg>
            </span>
          </button>
        )}
      </div>
      <div className="video__body">
        <span className="press-kind"><svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><rect x="1.5" y="3" width="13" height="10" rx="3" stroke="currentColor" strokeWidth="1.4" fill="none" /><path d="M6.5 6v4l3.5-2z" fill="currentColor" /></svg>Видео на YouTube</span>
        <h3 className="video__title">{video.title}</h3>
        <p className="video__text">{video.text}</p>
        <a className="text-link" href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
          Открыть на YouTube
        </a>
      </div>
    </article>
  );
}

export default function Press() {
  const [filter, setFilter] = useState<'all' | PressKind>('all');
  const featured = pressItems.find((p) => p.id === 'gov-meta-llama')!;
  const list = pressItems
    .filter((p) => p.id !== featured.id)
    .filter((p) => filter === 'all' || p.kind === filter)
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <section className="press" id="press">
      <div className="container">
        <div className="press__head">
          <h2 className="h2">О нас пишут</h2>
          <p className="body-lg">
            Октябрь 2025 года: Aqyl Jol проходит Meta Llama Accelerator, выигрывает на Digital Bridge
            и получает поддержку государства, города и региона.
          </p>
        </div>

        <div className="press__top">
          <a className="feature-story" href={featured.href} target="_blank" rel="noopener noreferrer">
            <div className="feature-story__visual" aria-hidden="true">
              <span className="feature-story__llama">Meta Llama<br />Accelerator</span>
              <span className="feature-story__place">1 из 5</span>
              <span className="feature-story__place-note">команд-победителей</span>
            </div>
            <div className="feature-story__body">
              <span className="press-kind"><KindIcon kind={featured.kind} />{featured.source}</span>
              <h3 className="feature-story__title">{featured.title}</h3>
              <p className="feature-story__text">{featured.text}</p>
              <p className="feature-story__meta">{featured.author}</p>
              <span className="text-link">Читать на gov.kz</span>
            </div>
          </a>
          <VideoCard />
        </div>

        <div className="press__filters" role="group" aria-label="Фильтр публикаций">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`chip${filter === f.id ? ' is-on' : ''}`}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ol className="timeline">
          {list.map((p) => (
            <li key={p.id} className="timeline__item">
              <time className="timeline__date" dateTime={p.date}>{p.dateLabel}</time>
              <a className="post" href={p.href} target="_blank" rel="noopener noreferrer">
                <span className="press-kind"><KindIcon kind={p.kind} />{kindLabel[p.kind]}</span>
                <h3 className="post__title">{p.title}</h3>
                <p className="post__text">{p.text}</p>
                <p className="post__source">
                  <strong>{p.source}</strong>
                  {p.author && p.author !== p.source && <span>{p.author}</span>}
                </p>
              </a>
            </li>
          ))}
          {list.length === 0 && (
            <li className="timeline__empty">В этой категории пока нет публикаций. Выберите «Все».</li>
          )}
        </ol>
      </div>
    </section>
  );
}
