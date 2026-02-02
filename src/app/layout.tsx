import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MineSlot - Играть в Mine Slots | Казино Лаки Бир",
  description: "Играй в MineSlot (майн слот) - лучшая игра в телеграм боте Lucky Bear. Регистрация в казино Лаки Бир и огромные бонусы. Попробуй майнслот прямо сейчас!",
  keywords: "Mine slot, mine slots, игра, играть, майн слот, майнслот, регистрация, казино, лакибир, лаки бир, играть в телеграм, лаки бир телеграм бот, lucky bear mine slots",
  openGraph: {
    title: "MineSlot - Лучшая игра в телеграм",
    description: "Забирай бонус от 50р на баланс и начинай играть в Mine Slots!",
    type: "website",
    locale: "ru_RU",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
