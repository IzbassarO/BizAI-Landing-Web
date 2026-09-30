import type { Metadata, Viewport } from 'next';
import { Unbounded, Onest, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Onest({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin', 'cyrillic'],
  weight: ['500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Aqyl Jol — ИИ для дорог Астаны',
  description:
    'Aqyl Jol от BizAI находит гололёд, снежные заносы, подтопления и ДТП по городским камерам и направляет ближайшую спецтехнику. Победитель Meta Llama Accelerator Kazakhstan 2025.',
  keywords: 'Aqyl Jol, BizAI, Астана, компьютерное зрение, гололёд, спецтехника, Meta Llama, KazLLM, умный город',
  openGraph: {
    title: 'Aqyl Jol — ИИ для дорог Астаны',
    description: 'Городская ИИ-платформа: детекция дорожных угроз по камерам и диспетчеризация спецтехники.',
    locale: 'ru_KZ',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0f1822',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
