import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Онлайн-платформа для автоматизации грузоперевозок и логистики',
  description:
    'Забудьте про опоздания и снизьте затраты до 25%. Получите полный контроль над перевозками с помощью GPS-трекера, цифровых документов и аналитики в реальном времени.',
  keywords: 'грузоперевозки, логистика, казахстан, biny, TMS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}