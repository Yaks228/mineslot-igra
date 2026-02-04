import { Download, Gamepad2, Play } from "lucide-react";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Game",
    "name": "MineSlot",
    "description": "Mine Slot — онлайн-слот, вдохновлённый игрой Minecraft. Игра сохраняет узнаваемые черты оригинальной вселенной: пиксельную графику, характерные блоки и звуковые эффекты",
    "alternateName": "майн слот",
    "url": "https://mineslot-gold.vercel.app",
    "author": {
      "@type": "Organization",
      "name": "Lucky Bear"
    }
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Video Background */}
      <div className="hero-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="/gameplay.mp4" type="video/mp4" />
        </video>
      </div>

        {/* Content */}
        <div className="z-10 max-w-4xl w-full space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex flex-col items-center space-y-4">
            <img 
              src="/logo.svg" 
              alt="MineSlot Logo" 
              className="w-64 md:w-80 h-auto drop-shadow-[0_0_15px_rgba(255,222,0,0.3)]"
            />
            <h1 className="sr-only">
              Mine Slot
            </h1>
              <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl mx-auto">
              Mine Slot — онлайн-слот, вдохновлённый игрой Minecraft. Игра сохраняет узнаваемые черты оригинальной вселенной: пиксельную графику, характерные блоки и звуковые эффекты
            </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col gap-6 items-center w-full max-w-md mx-auto">
          {/* Main Play Button */}
          <a 
            href="https://lbgame777.xyz/6sj2Qj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative w-full bg-primary hover:bg-yellow-400 text-black font-black text-xl py-5 rounded-2xl flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,222,0,0.4)] transition-all active:scale-95 button-glow text-center"
          >
            <Play className="fill-current" />
            ИГРАТЬ НА САЙТЕ
          </a>

          {/* Telegram Button */}
          <div className="w-full space-y-2">
            <a 
              href="https://t.me/+pwc2OREp3-k0YjFi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#229ED9] hover:bg-[#28a1da] text-white font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 text-center"
            >
              <Gamepad2 />
              ИГРАТЬ В ТЕЛЕГРАМ
            </a>
            <p className="text-sm font-medium text-primary animate-pulse">
              🎁 забрать бонус от 50р на баланс в телеграм
            </p>
          </div>

          {/* VPN Button */}
          <div className="w-full space-y-2 pt-4">
            <a 
              href="https://t.me/VPN_OpenWorld_bot?start=NTcyNTIyNTQwMA" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-2xl flex items-center justify-center gap-3 border border-white/20 transition-all text-center"
            >
              <Download size={20} />
              СКАЧАТЬ VPN
            </a>
            <p className="text-xs text-gray-400">
              * для игры может потребоваться VPN
            </p>
          </div>
        </div>

        {/* SEO Content Section */}
        <section className="mt-20 py-12 border-t border-white/10 text-left space-y-10 max-w-3xl mx-auto opacity-80 hover:opacity-100 transition-opacity">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Mine Slot: Майн слот игра в Lucky Bear</h2>
              <p className="text-gray-400 leading-relaxed">
                Добро пожаловать в захватывающий мир <strong>Mine Slots</strong>! Если вы искали, где играть в майн слот, то вы попали по адресу. 
                В <strong>Mine Slot</strong> удобно играть в казино <strong>Лаки бир</strong>, к тому же там вас ждут большие приветственные бонусы! 
                Вы можете играть в <strong>mineslot</strong> как в телеграм боте так и на самом сайте <strong>Лаки бир казино</strong>!
              </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-bold text-white mb-2 uppercase">Почему выбирают майнслот?</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-500">
                <li>Быстрые выплаты в казино Лаки Бир</li>
                <li>Играть в телеграм удобно и безопасно</li>
                <li>Честные алгоритмы lucky bear mine slots</li>
                <li>Бонусы новым игрокам при регистрации</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-2 uppercase">Как начать играть?</h3>
              <p className="text-gray-500">
                Просто выберите удобный способ: через наш <strong>лаки бир телеграм бот</strong> или на основном сайте. 
                Не забудьте забрать свой приветственный бонус! Если сайт недоступен, рекомендуем использовать VPN.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-8 text-gray-600 text-xs">
        <p>© 2026 MineSlot. Все права защищены. 18+</p>
        <p className="mt-2">Майн слот, майнслот, лакибир, лаки бир телеграм бот - официальный лендинг.</p>
      </footer>
    </main>
  );
}
