export type PressKind = 'instagram' | 'article' | 'video' | 'message';

export interface PressItem {
  id: string;
  date: string; // ISO, used for sorting
  dateLabel: string;
  source: string;
  author?: string;
  kind: PressKind;
  title: string;
  text: string;
  href: string;
}

export const pressItems: PressItem[] = [
  {
    id: 'astana-innovations',
    date: '2025-10-03',
    dateLabel: '3 октября 2025',
    source: 'Astana Innovations',
    author: 'Компания и её директор',
    kind: 'instagram',
    title: 'Astana Innovations рассказывает об Aqyl Jol',
    text: 'Городской оператор инноваций Астаны и его директор отмечают проект как пример прикладного ИИ для городского хозяйства столицы.',
    href: 'https://www.instagram.com/p/DPWia_bCnkk/',
  },
  {
    id: 'gizatov-insta',
    date: '2025-10-03',
    dateLabel: '3 октября 2025',
    source: 'Асылбек Гизатов',
    author: 'Старший научный сотрудник, Атырау',
    kind: 'instagram',
    title: 'О проектах, которые уже работают',
    text: 'Асылбек Гизатов — о реализуемых проектах команды и о том, как ИИ помогает делать дороги безопаснее.',
    href: 'https://www.instagram.com/p/DPVXEBvCp82/',
  },
  {
    id: 'gov-meta-llama',
    date: '2025-10-13',
    dateLabel: 'Октябрь 2025',
    source: 'Gov.kz',
    author: 'Министерство ИИ и цифрового развития РК',
    kind: 'article',
    title: 'Aqyl Jol — среди победителей Meta Llama Accelerator',
    text: 'По итогам Digital Bridge 2025 выбраны пять команд-победителей акселератора Meta Llama. Aqyl Jol от BizAI вошёл в их число с решением для управления трафиком и коммунальной спецтехникой.',
    href: 'https://www.gov.kz/memleket/entities/maidd/press/news/details/1085723?lang=ru',
  },
  {
    id: 'ministry-insta',
    date: '2025-10-14',
    dateLabel: '14 октября 2025',
    source: 'Министерство ИИ и цифрового развития РК',
    kind: 'instagram',
    title: 'Министерство представляет победителей',
    text: 'Официальный аккаунт министерства публикует команды, прошедшие Meta Llama Accelerator Kazakhstan, — в том числе Aqyl Jol.',
    href: 'https://www.instagram.com/p/DPx90iFjasg/',
  },
  {
    id: 'baitc',
    date: '2025-10-14',
    dateLabel: '14 октября 2025',
    source: 'BAITC',
    author: 'Центр технологий блокчейна и ИИ',
    kind: 'instagram',
    title: 'BAITC — о командах акселератора',
    text: 'Оператор программы Meta Llama Accelerator рассказывает о проектах, созданных на открытых моделях Llama и KazLLM.',
    href: 'https://www.instagram.com/p/DPykpi2CHc6/',
  },
  {
    id: 'atyrau-amanat',
    date: '2025-10-14',
    dateLabel: '14 октября 2025',
    source: 'Атырауский университет и партия «Amanat»',
    author: 'Ректор университета им. Х. Досмухамедова, региональный центр «Amanat»',
    kind: 'message',
    title: 'Поддержка университета и региона',
    text: 'Ректор Атырауского университета имени Халела Досмухамедова и представитель регионального центра партии «Amanat» поздравили команду с результатом.',
    href: 'https://teams.microsoft.com/l/message/48:notes/1760446611150?context=%7B%22contextType%22%3A%22chat%22%2C%22oid%22%3A%228%3Aorgid%3Ad3570b78-62ad-4dcc-a39c-1896ee3827e5%22%7D',
  },
  {
    id: 'pricom',
    date: '2025-10-20',
    dateLabel: 'Есть мнение',
    source: 'Pricom.kz',
    author: 'Автор: Асылбек Гизатов',
    kind: 'article',
    title: '«Реальные шаги»',
    text: 'Колонка о прикладной науке: как ИИ-решения могут сократить смертность на дорогах, предсказывать пробки и считать часы, которые водители, спецтехника и общественный транспорт теряют за год.',
    href: 'https://pricom.kz/est-mnenie/realnye-shagi.html',
  },
];

export const video = {
  id: '2K4B1VjTi2A',
  title: 'Интервью и заседание при партии «Amanat»',
  text: 'Команда рассказывает о проекте Aqyl Jol и о том, как городская ИИ-платформа помогает службам Астаны реагировать быстрее.',
};

export const kindLabel: Record<PressKind, string> = {
  instagram: 'Пост в Instagram',
  article: 'Статья',
  video: 'Видео',
  message: 'Обращение',
};
