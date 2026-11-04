import { config } from "../config";
import Menu from "./Menu";

export default function MenuPage() {
  const [first, second] = config.shortName;
  return (
    <div className="min-h-screen bg-paper">
      <nav aria-label="Main navigation" className="flex items-center justify-between border-b border-line bg-night px-5 py-5 text-paper sm:px-8 md:px-14">
        <a href="/" aria-label={config.name} className="font-display text-xl sm:text-2xl">{first} <span className="italic text-gold">{second}</span></a>
        <div className="flex items-center gap-5 text-[10px] uppercase tracking-[.16em] sm:gap-8">
          <a href="/" className="transition hover:text-gold">Home</a>
          <a href={`https://wa.me/${config.visit.whatsapp}?text=${encodeURIComponent(`Hello ${config.name}, I'd like to place an order.`)}`} className="border border-gold/70 px-4 py-2.5 text-gold transition hover:bg-gold hover:text-night">Order on WhatsApp ↗</a>
        </div>
      </nav>
      <header className="bg-night px-6 py-20 text-paper sm:py-28 md:px-12">
        <div className="mx-auto max-w-[1280px]">
          <p className="eyebrow text-gold">Our menu · Lokoja</p>
          <h1 className="mt-6 max-w-[9ch] font-display text-[clamp(4rem,10vw,9rem)] leading-[.86] tracking-[-.055em]">Good food.<br /><em className="font-normal text-gold">No fuss.</em></h1>
          <p className="mt-7 max-w-[40ch] text-sm leading-relaxed text-white/70 sm:text-base">Explore the dishes we're serving. Choose a category, find a favourite and open any dish to order directly on WhatsApp.</p>
        </div>
      </header>
      <Menu fullPage />
      <footer className="bg-night px-6 py-8 text-xs text-white/55 md:px-12">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-3 sm:flex-row"><span>{config.name} · {config.visit.address}</span><a href="/" className="text-gold hover:text-white">Back to home ↑</a></div>
      </footer>
    </div>
  );
}
