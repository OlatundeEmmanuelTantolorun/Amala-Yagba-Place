import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { config } from "../config"
import { hero } from "../data/hero"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const section = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [scene, setScene] = useState(0)

  useLayoutEffect(() => {
    const sectionEl = section.current
    const video = videoRef.current
    if (!sectionEl || !video) return

    const mobileQuery = window.matchMedia("(max-width: 899px)")
    let raf = 0
    let targetProgress = 0
    let activeSource = ""

    const seekVideo = (progress: number) => {
      targetProgress = Math.max(0, Math.min(1, progress))
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        if (video.readyState < HTMLMediaElement.HAVE_METADATA || !Number.isFinite(video.duration)) return
        const target = Math.max(0, Math.min(video.duration - 0.03, targetProgress * video.duration))
        // Avoid hammering the media decoder when the browser reports tiny scroll deltas.
        if (Math.abs(video.currentTime - target) > 0.025) video.currentTime = target
      })
    }

    const updateSource = () => {
      const mobile = mobileQuery.matches
      const source = mobile ? config.video.mobileSrc : config.video.src
      const poster = mobile ? config.video.mobilePoster : config.video.poster
      if (source && source !== activeSource) {
        activeSource = source
        video.pause()
        video.src = source
        video.poster = poster ?? ""
        video.load()
      } else if (poster) {
        video.poster = poster
      }
      seekVideo(targetProgress)
    }

    const onLoadedMetadata = () => seekVideo(targetProgress)
    const onViewportChange = () => {
      updateSource()
      requestAnimationFrame(() => ScrollTrigger.refresh())
    }

    video.addEventListener("loadedmetadata", onLoadedMetadata)
    mobileQuery.addEventListener("change", onViewportChange)
    video.muted = true
    video.playsInline = true
    // The hero is scrubbed, so buffering more of the short hero clip makes seeking much more stable.
    video.preload = "auto"
    updateSource()

    const context = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const state = { progress: 0 }
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.18,
            invalidateOnRefresh: true,
            fastScrollEnd: true,
          },
        })
          .to(".h-title", { scale: 0.84, y: -52, duration: 0.18, ease: "power2.inOut" }, 0)
          .to(".h-title", { opacity: 0, duration: 0.12 }, 0.13)
          .to(".h-cue", { opacity: 0, y: 12, duration: 0.08 }, 0)
          .to(".h-film", { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 0.22, ease: "power2.inOut" }, 0.04)
          .to(".h-film-shade", { opacity: 1, duration: 0.16 }, 0.2)
          .to(".h-cap", { opacity: 1, y: 0, duration: 0.12 }, 0.24)
          .to(state, {
            progress: 1,
            duration: 0.72,
            ease: "none",
            onUpdate: () => {
              seekVideo(state.progress)
              const nextScene = Math.min(hero.scenes.length - 1, Math.floor(state.progress * hero.scenes.length))
              setScene(current => current === nextScene ? current : nextScene)
            },
          }, 0.25)
          .to(".h-cta", { opacity: 1, y: 0, duration: 0.1 }, 0.91)
        return () => timeline.scrollTrigger?.kill()
      })

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(".h-film", { clipPath: "inset(0% 0% 0% 0% round 0px)" })
        gsap.set([".h-film-shade", ".h-cap", ".h-cta"], { opacity: 1, y: 0 })
        gsap.set([".h-title", ".h-cue"], { opacity: 0 })
        seekVideo(0.58)
        setScene(Math.min(hero.scenes.length - 1, Math.floor(0.58 * hero.scenes.length)))
      })
    }, sectionEl)

    return () => {
      context.revert()
      video.removeEventListener("loadedmetadata", onLoadedMetadata)
      mobileQuery.removeEventListener("change", onViewportChange)
      if (raf) cancelAnimationFrame(raf)
      video.pause()
      video.removeAttribute("src")
      video.load()
    }
  }, [])

  return (
    <section ref={section} id="top" aria-label="Amala Yagba Place introduction" className="relative h-[340svh] min-[900px]:h-[500svh]">
      <div className="sticky top-0 h-svh min-h-[520px] overflow-hidden bg-[#0a2b25] text-[#F3E9D7]">
        <div className="h-title absolute inset-0 z-10 flex flex-col items-center justify-center px-5 pb-12 text-center">
          <p className="mb-7 text-[10px] font-medium uppercase tracking-[.42em] text-[#C28A25] sm:text-xs">Amala Yagba Place · Lokoja</p>
          <h1 className="font-display text-[clamp(4.5rem,15vw,13rem)] leading-[.76] tracking-[-.075em]">
            Amala<br /><span className="ml-[.18em] italic font-normal text-[#C28A25]">Yagba</span>
          </h1>
          <p className="mt-9 max-w-[28rem] text-[11px] uppercase leading-[1.9] tracking-[.22em] text-white/65 sm:text-xs">{config.tagline}</p>
          <span className="mt-12 h-px w-12 bg-[#C28A25]/70" />
          <p className="mt-4 text-[9px] uppercase tracking-[.3em] text-white/45">{config.edition}</p>
        </div>

        <div className="h-film absolute inset-0 overflow-hidden bg-[#0a2b25]" style={{ clipPath: "inset(50% 50% 50% 50% round 50%)" }}>
          <video ref={videoRef} className="absolute inset-0 size-full object-cover" muted playsInline preload="metadata" poster={config.video.poster ?? undefined} aria-hidden="true" tabIndex={-1} />
          <div className="h-film-shade absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,.62),transparent_70%),linear-gradient(0deg,rgba(8,7,6,.78),transparent_58%,rgba(8,7,6,.18))] opacity-0" aria-hidden="true" />
          <div className="absolute left-5 top-24 z-10 flex items-center gap-3 text-[9px] uppercase tracking-[.28em] text-white/70 sm:left-10 sm:top-28 md:left-16">
            <span className="h-px w-8 bg-[#C28A25]" /> Welcome in
          </div>
          <div className="h-cap absolute bottom-28 left-5 z-10 max-w-[min(88vw,42rem)] translate-y-5 text-white opacity-0 sm:bottom-32 sm:left-10 md:bottom-36 md:left-16">
            <p className="mb-3 text-[9px] uppercase tracking-[.34em] text-[#C28A25]">0{scene + 1} / 0{hero.scenes.length} <span className="mx-2 text-white/35">—</span> {hero.scenes[scene][0]}</p>
            <h2 className="font-display text-5xl leading-[.9] tracking-[-.04em] sm:text-6xl md:text-8xl">{hero.scenes[scene][0]}<span className="text-[#C28A25]">.</span></h2>
            <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-white/75 sm:text-base">{hero.scenes[scene][1]}</p>
          </div>
          <a href="#menu" className="h-cta absolute bottom-6 right-5 z-10 inline-flex min-h-12 translate-y-3 items-center justify-center border border-white/65 px-6 text-[10px] uppercase tracking-[.2em] text-white opacity-0 transition-colors hover:border-[#C28A25] hover:bg-[#C28A25] hover:text-[#0a2b25] focus-visible:outline-white sm:bottom-10 sm:right-10 md:bottom-14 md:right-16">
            Discover the menu <span className="ml-5 text-base" aria-hidden="true">↗</span>
          </a>
          <span className="absolute bottom-8 left-5 z-10 hidden text-[9px] uppercase tracking-[.24em] text-white/45 sm:block md:bottom-14 md:left-16">Dine-in · Takeaway · Delivery · Catering</span>
        </div>

        <span className="h-cue absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-[9px] uppercase tracking-[.35em] text-[#F3E9D7]/65">Scroll to enter <span className="ml-3">↓</span></span>
      </div>
    </section>
  )
}
