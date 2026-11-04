import { useEffect } from "react"
import { motion } from "framer-motion"
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa"
import { config, wa } from "./config"
import { images } from "./data/images"
import { services, placePhotos, testimonials } from "./data/community"
import { useState } from "react"
import Hero from "./components/Hero"
import FeaturedMenu from "./components/FeaturedMenu"
import MenuPage from "./components/MenuPage"
import Feedback from "./components/Feedback"

const rise = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-70px" },
  transition: { duration: 0.85, ease: [0.2, 0.7, 0.2, 1] as const },
}

export default function App() {
  useEffect(() => { document.title = config.seo.title }, [])
  const [badPhotos, setBadPhotos] = useState<string[]>([])
  const photos = placePhotos.filter(p => !badPhotos.includes(p.src))
  const [first, last] = config.shortName
  if (window.location.pathname.replace(/\/$/, "") === "/menu") return <MenuPage />
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <nav aria-label="Main navigation" className="site-nav fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-5 text-white sm:px-8 md:px-14">
        <a href="#top" aria-label={config.name} className="font-display text-xl tracking-tight sm:text-2xl">
          {config.logo ? <img src={config.logo} alt={config.name} className="h-9 w-auto" /> : <>{first} <span className="italic text-gold">{last}</span></>}
        </a>
        <div className="flex items-center gap-5 text-[9px] uppercase tracking-[.2em] sm:gap-8 sm:text-[10px]">
          <a className="nav-link hidden sm:inline" href="#story">Our story</a>
          <a className="nav-link" href="/menu">Menu</a>
          <a className="nav-link hidden md:inline" href="#place-gallery">Gallery</a>
          <a className="nav-link hidden md:inline" href="#voices">Voices</a>
          <a className="nav-book" href="#visit">{config.navigation.reserveLabel} <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <main id="main-content">
        <Hero />

        <FeaturedMenu />

        <section id="story" className="relative overflow-hidden bg-paper px-6 py-24 sm:py-32 md:px-12 md:py-44">
          <div className="mx-auto grid max-w-[1380px] gap-12 md:grid-cols-[1.15fr_.85fr] md:items-end md:gap-20">
            <motion.div {...rise}>
              <p className="eyebrow text-ember">Welcome</p>
              <h2 className="mt-8 max-w-[11ch] font-display text-[clamp(3.5rem,8vw,8rem)] leading-[.86] tracking-[-.055em]">Real food.<br /><em className="font-normal text-ember">Real</em> welcome.</h2>
            </motion.div>
            <motion.div {...rise} className="max-w-[34rem] pb-1 md:pb-3">
              <p className="font-display text-2xl leading-[1.35] sm:text-3xl">{config.sub}</p>
              <p className="mt-6 text-sm leading-[1.9] text-[#6d6254] sm:text-base">{config.description}</p>
              <a href="#menu" className="editorial-link mt-8 inline-flex">See the menu <span aria-hidden="true">↓</span></a>
            </motion.div>
          </div>
        </section>

        <section id="services" className="bg-teal px-6 py-20 text-paper sm:py-28 md:px-12">
          <div className="mx-auto max-w-[1380px]">
            <p className="eyebrow text-gold">However you like it</p>
            <div className="mt-10 grid gap-x-10 gap-y-10 border-t border-white/25 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(([h, t], i) => (
                <motion.div key={h} {...rise}>
                  <p className="text-[10px] tracking-[.25em] text-gold">0{i + 1}</p>
                  <h3 className="mt-4 font-display text-3xl sm:text-4xl">{h}</h3>
                  <p className="mt-3 max-w-[28ch] text-sm leading-[1.8] text-white/80">{t}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative grid min-h-[620px] overflow-hidden bg-night text-white md:grid-cols-2">
          <div className="relative min-h-[380px] overflow-hidden md:min-h-[700px]">
            <img src={images.sections.story} alt="Amala served fresh" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>
          <div className="flex flex-col justify-center px-7 py-20 sm:px-12 md:px-16 lg:px-24">
            <motion.div {...rise}>
              <p className="eyebrow text-gold">Our place</p>
              <h2 className="mt-8 max-w-[10ch] font-display text-[clamp(3.4rem,7vw,7rem)] leading-[.88] tracking-[-.05em]">Come as<br /><em className="font-normal text-gold">you are.</em></h2>
              <p className="mt-8 max-w-[38ch] text-sm leading-[1.95] text-white/75 sm:text-base">{config.story}</p>
              <a href="#visit" className="editorial-link editorial-link-light mt-9 inline-flex">Find us <span aria-hidden="true">↗</span></a>
            </motion.div>
          </div>
        </section>

        <section aria-labelledby="experience-heading" className="overflow-hidden bg-paper px-6 py-24 sm:py-32 md:px-12">
          <div className="mx-auto grid max-w-[1180px] items-center gap-12 md:grid-cols-[1fr_.78fr] md:gap-20">
            <motion.div {...rise}>
              <p className="eyebrow text-ember">A little look inside</p>
              <h2 id="experience-heading" className="mt-8 max-w-[10ch] font-display text-[clamp(3.5rem,8vw,7.5rem)] leading-[.88] tracking-[-.055em]">A taste of<br /><em className="font-normal text-ember">the experience.</em></h2>
              <p className="mt-7 max-w-[39ch] text-sm leading-[1.95] text-[#6d6254] sm:text-base">Good food, warm faces and a place to feel at home. Take a quick look at the Amala Yagba Place experience.</p>
              <a href="#menu" className="editorial-link mt-8 inline-flex">Explore the menu <span aria-hidden="true">↓</span></a>
            </motion.div>
            <motion.div {...rise} className="mx-auto w-full max-w-[390px] md:max-w-[420px]">
              <div className="relative overflow-hidden bg-night shadow-[0_24px_70px_rgba(10,43,37,.18)]">
                <video
                  className="block aspect-[9/16] w-full object-cover"
                  src="/videos/amala-yagba-experience.mp4"
                  poster="/images/amala-yagba-experience-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  aria-label="A short look at Amala Yagba Place, its food and dining experience"
                />
              </div>
              <p className="mt-4 text-center text-[9px] uppercase tracking-[.22em] text-[#766d64]">A glimpse of Amala Yagba Place · Lokoja</p>
            </motion.div>
          </div>
        </section>

        {testimonials.length > 0 && (
          <section id="voices" aria-label="A visit shared by a guest" className="bg-ember px-6 py-24 text-paper sm:py-32 md:px-12">
            <div className="mx-auto max-w-[1100px]">
              <p className="eyebrow text-gold">A visit shared</p>
              <h2 className="mt-5 max-w-[12ch] font-display text-5xl leading-none sm:text-7xl">Real visits. Shared moments.</h2>
              <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-white/70">A glimpse of the restaurant through the eyes of a guest. Explore the original visit below.</p>
              <div className="mt-10 grid gap-12 md:grid-cols-2">
                {testimonials.map(t => (
                  <motion.blockquote key={t.name} {...rise} className={testimonials.length === 1 ? "md:col-span-2" : ""}>
                    <p className="font-display text-3xl leading-[1.2] sm:text-5xl">“{t.quote}”</p>
                    <footer className="mt-6 text-sm text-white/85">
                      <a className="underline underline-offset-4" href={t.url}>{t.name} · {t.handle}</a>
                      <span className="block text-white/60">{t.note}</span>
                    </footer>
                  </motion.blockquote>
                ))}
              </div>
            </div>
          </section>
        )}

        {photos.length > 0 && (
          <section id="place-gallery" aria-label="The place" className="bg-paper px-5 py-24 sm:px-8 sm:py-32 md:px-12">
            <div className="mx-auto max-w-[1380px]">
              <p className="eyebrow text-ember">The place</p>
              <h2 className="mt-5 font-display text-5xl tracking-[-.04em] sm:text-7xl">Find us in Lokoja.</h2>
              <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {photos.map((p, i) => {
                  const subordinateAspect = ["aspect-[4/5]", "aspect-[16/10]", "aspect-[3/4]", "aspect-[4/5]"][i - 1] ?? "aspect-[4/5]"
                  const imageAspect = i === 0 && photos.length > 2 ? "aspect-square" : subordinateAspect
                  return (
                    <motion.figure key={p.src} {...rise} className={`group relative overflow-hidden ${i === 0 && photos.length > 2 ? "col-span-2 row-span-2" : ""}`}>
                      <img src={p.src} alt={p.label} loading="lazy" decoding="async" onError={() => setBadPhotos(b => [...b, p.src])} className={`${imageAspect} size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <figcaption className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[.22em] text-white">{p.label}</figcaption>
                    </motion.figure>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        <Feedback />

        <section id="visit" className="relative overflow-hidden bg-night px-6 py-24 text-paper sm:py-32 md:px-12 md:py-44">
          <div aria-hidden className="pointer-events-none absolute -right-40 top-0 size-[650px] rounded-full bg-[radial-gradient(circle,rgba(194,138,37,.18),transparent_68%)]" />
          <div className="relative mx-auto max-w-[1380px]">
            <p className="eyebrow text-gold">Visit us</p>
            <div className="mt-8 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <h2 className="max-w-[9ch] font-display text-[clamp(4rem,10vw,10rem)] leading-[.84] tracking-[-.06em]">Your table<br /><em className="font-normal text-gold">awaits.</em></h2>
              <a href={wa(`Hello ${config.name}, I'd like to place an order / make a booking.`)} className="inline-flex min-h-14 w-fit items-center gap-3 bg-ember px-7 py-4 text-[11px] uppercase tracking-[.18em] text-white transition-colors hover:bg-gold hover:text-night">
                <FaWhatsapp size={18} aria-hidden="true" /> {config.labels.reserveOnWhatsapp}
              </a>
            </div>
            <div className="my-16 grid gap-10 border-y border-white/20 py-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
              <div><h3 className="eyebrow text-gold">{config.labels.location}</h3><p className="mt-4 leading-[1.8] text-white/75">{config.visit.address}</p><a className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.16em] text-gold underline underline-offset-4 transition-colors hover:text-white" href={config.visit.directions} target="_blank" rel="noopener noreferrer">{config.labels.directions} <span aria-hidden="true">↗</span></a></div>
              <div><h3 className="eyebrow text-gold">{config.labels.hours}</h3><dl className="mt-4 space-y-2 text-white/75">{config.visit.hours.map(([day, time]) => <div key={day} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-2 text-xs"><dt>{day}</dt><dd className="whitespace-nowrap text-right text-white">{time}</dd></div>)}</dl></div>
              <div><h3 className="eyebrow text-gold">{config.labels.contact}</h3><p className="mt-4 text-white/75">{config.visit.phone}</p></div>
              <div><h3 className="eyebrow text-gold">{config.labels.follow}</h3><div className="mt-4 flex gap-5">
                <a aria-label="TikTok" href={config.social.TikTok}><FaTiktok size={19} /></a>
                <a aria-label="Instagram" href={config.social.Instagram}><FaInstagram size={20} /></a>
                <a aria-label="Facebook" href={config.social.Facebook}><FaFacebookF size={19} /></a></div></div>
            </div>
            <div className="mt-14 overflow-hidden border border-white/15 bg-white/5">
              <div className="flex flex-col justify-between gap-4 px-5 py-5 sm:flex-row sm:items-center sm:px-7">
                <div><p className="eyebrow text-gold">Find your way here</p><p className="mt-2 font-display text-2xl sm:text-3xl">Right here in Lokoja.</p></div>
                <a href={config.visit.directions} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 w-fit items-center gap-3 border border-white/35 px-5 py-3 text-[10px] uppercase tracking-[.16em] text-white transition-colors hover:border-gold hover:bg-gold hover:text-night">Open in Google Maps <span aria-hidden="true">↗</span></a>
              </div>
              <iframe title={`Map showing ${config.name}`} src={config.visit.mapEmbed} className="block h-[320px] w-full border-0 sm:h-[420px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
            <div className="mt-14 grid gap-8 border-t border-white/20 pt-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="lg:col-span-1"><a href="#top" className="font-display text-2xl">{first} <span className="italic text-gold">{last}</span></a><p className="mt-3 max-w-[25ch] text-xs leading-relaxed text-white/55">Good food. Good company. Made for the table.</p></div>
              <div><h3 className="eyebrow text-gold">Explore</h3><div className="mt-4 grid gap-2 text-xs text-white/70"><a href="#top" className="hover:text-gold">Home</a><a href="/menu" className="hover:text-gold">Full menu</a><a href="#story" className="hover:text-gold">Our story</a><a href="#place-gallery" className="hover:text-gold">Gallery</a></div></div>
              <div><h3 className="eyebrow text-gold">Visit</h3><div className="mt-4 grid gap-2 text-xs text-white/70"><a href={config.visit.directions} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Get directions</a><a href="#visit" className="hover:text-gold">Opening hours</a><a href={`tel:${config.visit.phone.replace(/[^+\d]/g, "")}`} className="hover:text-gold">{config.visit.phone}</a></div></div>
              <div><h3 className="eyebrow text-gold">Order & follow</h3><div className="mt-4 grid gap-2 text-xs text-white/70"><a href={wa(`Hello ${config.name}, I'd like to place an order.`)} className="hover:text-gold">WhatsApp</a><a href={config.social.Instagram} className="hover:text-gold">Instagram</a><a href={config.social.TikTok} className="hover:text-gold">TikTok</a></div></div>
            </div>
            <div className="mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[.14em] text-white/40 sm:flex-row"><span>© {new Date().getFullYear()} {config.name}. All rights reserved.</span><span>{config.footer}</span></div>
          </div>
        </section>
      </main>
    </>
  )
}
