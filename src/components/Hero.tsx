import { useLayoutEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { config } from "../config"
import { hero } from "../data/hero"

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const section = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef(0)
  const frameRef = useRef<number | null>(null)
  const readyRef = useRef(false)
  const [scene, setScene] = useState(0)

  useLayoutEffect(() => {
    const video = videoRef.current
    if (!video) return

    const mobileQuery = window.matchMedia("(max-width: 899px)")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const desktop = () => !mobileQuery.matches && !reducedMotion.matches

    let lastAppliedTarget = -1

    const applySeek = () => {
      frameRef.current = null
      if (!video || !readyRef.current || video.readyState < HTMLMediaElement.HAVE_METADATA) return

      // Keep only the newest scroll position. Do not continuously write currentTime
      // while the browser is still decoding the previous seek; that is what can
      // produce the visible shaky/jittery scrub effect on some browsers.
      if (video.seeking) return

      const target = Math.max(
        0,
        Math.min(Math.max(video.duration - 0.04, 0), progressRef.current * video.duration),
      )

      if (Math.abs(lastAppliedTarget - target) < 0.025 || Math.abs(video.currentTime - target) < 0.02) return

      lastAppliedTarget = target
      video.currentTime = target
    }

    const seekTo = (progress: number) => {
      progressRef.current = Math.max(0, Math.min(1, progress))
      if (frameRef.current === null) frameRef.current = requestAnimationFrame(applySeek)
    }

    const onSeeked = () => {
      // Apply the newest scroll position once the previous seek has completed.
      if (desktop()) seekTo(progressRef.current)
    }

    const onReady = () => {
      readyRef.current = true
      lastAppliedTarget = -1
      seekTo(progressRef.current)
    }

    const updateSource = () => {
      const mobile = mobileQuery.matches
      const source = mobile ? config.video.mobileSrc : config.video.src
      const poster = mobile ? config.video.mobilePoster : config.video.poster

      if (!source) return

      const currentSource = video.getAttribute("src")
      if (currentSource !== source) {
        readyRef.current = false
        video.pause()
        video.src = source
        video.poster = poster ?? ""
        video.preload = "auto"
        video.load()
      } else if (poster) {
        video.poster = poster
      }

      if (mobile) {
        // Mobile is deliberately normal video playback: no scroll seeking.
        video.loop = true
        video.autoplay = true
        video.muted = true
        video.playsInline = true
        void video.play().catch(() => undefined)
      } else {
        video.loop = false
        video.autoplay = false
        video.pause()
        seekTo(progressRef.current)
      }
    }

    video.addEventListener("loadedmetadata", onReady)
    video.addEventListener("loadeddata", onReady)
    video.addEventListener("seeked", onSeeked)
    mobileQuery.addEventListener("change", updateSource)

    video.muted = true
    video.playsInline = true
    video.preload = "auto"
    updateSource()

    const context = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: "bottom bottom",
            // Exact scroll mapping. No smoothing means pausing the page also
            // pauses the video at the exact frame instead of letting a scrub
            // tween continue moving after the user stops.
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: self => {
              seekTo(self.progress)
              const nextScene = Math.min(
                hero.scenes.length - 1,
                Math.floor(self.progress * hero.scenes.length),
              )
              setScene(current => current === nextScene ? current : nextScene)
            },
          },
        })
          .to(".h-title", { scale: 0.84, y: -52, duration: 0.18, ease: "power2.inOut" }, 0)
          .to(".h-title", { opacity: 0, duration: 0.12 }, 0.13)
          .to(".h-cue", { opacity: 0, y: 12, duration: 0.08 }, 0)
          .to(".h-film", { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 0.22, ease: "power2.inOut" }, 0.04)
          .to(".h-film-shade", { opacity: 1, duration: 0.16 }, 0.2)
          .to(".h-cap", { opacity: 1, y: 0, duration: 0.12 }, 0.24)
          .to(".h-cta", { opacity: 1, y: 0, duration: 0.1 }, 0.91)

        return () => timeline.scrollTrigger?.kill()
      })

      mm.add("(max-width: 899px), (prefers-reduced-motion: reduce)", () => {
        // Mobile gets a cinematic one-screen landing state instead of expensive
        // scroll-scrubbing. This is intentionally light enough for low-end phones.
        gsap.set(".h-film", { clipPath: "inset(0% 0% 0% 0% round 0px)" })
        gsap.set(".h-title", { opacity: 1, scale: 1, y: 0 })
        gsap.set(".h-cue", { opacity: 1, y: 0 })
        gsap.set(".h-film-shade", { opacity: 1 })
        gsap.set(".h-cap", { opacity: 1, y: 0 })
        gsap.set(".h-cta", { opacity: 1, y: 0 })
        setScene(0)
        return () => undefined
      })
    }, section)

    return () => {
      context.revert()
      video.removeEventListener("loadedmetadata", onReady)
      video.removeEventListener("loadeddata", onReady)
      video.removeEventListener("seeked", onSeeked)
      mobileQuery.removeEventListener("change", updateSource)
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
      video.pause()
      video.removeAttribute("src")
      video.load()
    }
  }, [])

  return (
    <section
      ref={section}
      id="top"
      aria-label="Amala Yagba Place introduction"
      className="relative h-svh min-h-[680px] min-[900px]:h-[500svh]"
    >
      <div className="sticky top-0 h-svh min-h-[680px] overflow-hidden bg-[#0a2b25] text-[#F3E9D7]">
        <div className="h-title absolute inset-0 z-20 flex flex-col items-center justify-center px-5 pb-12 text-center min-[900px]:pb-12">
          <p className="mb-5 text-[9px] font-medium uppercase tracking-[.38em] text-[#C28A25] sm:mb-7 sm:text-xs sm:tracking-[.42em]">
            Amala Yagba Place · Lokoja
          </p>
          <h1 className="font-display text-[clamp(4rem,18vw,13rem)] leading-[.78] tracking-[-.075em] min-[900px]:text-[clamp(4.5rem,15vw,13rem)]">
            Amala<br /><span className="ml-[.18em] italic font-normal text-[#C28A25]">Yagba</span>
          </h1>
          <p className="mt-7 max-w-[25rem] text-[10px] uppercase leading-[1.85] tracking-[.2em] text-white/70 sm:mt-9 sm:text-xs sm:tracking-[.22em]">
            {config.tagline}
          </p>
          <span className="mt-9 h-px w-10 bg-[#C28A25]/70 sm:mt-12 sm:w-12" />
          <p className="mt-3 text-[8px] uppercase tracking-[.28em] text-white/45 sm:mt-4 sm:text-[9px] sm:tracking-[.3em]">
            {config.edition}
          </p>
        </div>

        <div
          className="h-film absolute inset-0 overflow-hidden bg-[#0a2b25]"
          style={{ clipPath: "inset(50% 50% 50% 50% round 50%)" }}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 size-full object-cover"
            muted
            playsInline
            preload="auto"
            poster={config.video.poster ?? undefined}
            aria-hidden="true"
            tabIndex={-1}
          />

          <div
            className="h-film-shade absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,6,.42),rgba(8,7,6,.08)_75%),linear-gradient(0deg,rgba(8,7,6,.48),transparent_55%,rgba(8,7,6,.12))] opacity-0"
            aria-hidden="true"
          />

          <div className="absolute left-5 top-20 z-10 flex items-center gap-3 text-[8px] uppercase tracking-[.25em] text-white/65 sm:left-10 sm:top-28 sm:text-[9px] sm:tracking-[.28em] md:left-16">
            <span className="h-px w-7 bg-[#C28A25] sm:w-8" /> Welcome in
          </div>

          <div className="h-cap absolute bottom-28 left-5 z-10 max-w-[min(88vw,42rem)] translate-y-5 text-white opacity-0 sm:bottom-32 sm:left-10 md:bottom-36 md:left-16">
            <p className="mb-3 text-[9px] uppercase tracking-[.34em] text-[#C28A25]">
              0{scene + 1} / 0{hero.scenes.length}
              <span className="mx-2 text-white/35">—</span>
              {hero.scenes[scene][0]}
            </p>
            <h2 className="font-display text-5xl leading-[.9] tracking-[-.04em] sm:text-6xl md:text-8xl">
              {hero.scenes[scene][0]}<span className="text-[#C28A25]">.</span>
            </h2>
            <p className="mt-4 max-w-[32ch] text-sm leading-relaxed text-white/75 sm:text-base">
              {hero.scenes[scene][1]}
            </p>
          </div>

          <a
            href="#menu"
            className="h-cta absolute bottom-6 right-5 z-10 inline-flex min-h-12 translate-y-3 items-center justify-center border border-white/65 px-5 text-[9px] uppercase tracking-[.18em] text-white opacity-0 transition-colors hover:border-[#C28A25] hover:bg-[#C28A25] hover:text-[#0a2b25] focus-visible:outline-white sm:bottom-10 sm:right-10 sm:px-6 sm:text-[10px] sm:tracking-[.2em] md:bottom-14 md:right-16"
          >
            Discover the menu <span className="ml-4 text-base" aria-hidden="true">↗</span>
          </a>

          <span className="absolute bottom-8 left-5 z-10 hidden text-[9px] uppercase tracking-[.24em] text-white/45 sm:block md:bottom-14 md:left-16">
            Dine-in · Takeaway · Delivery · Catering
          </span>
        </div>

        <span className="h-cue absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center text-[8px] uppercase tracking-[.32em] text-[#F3E9D7]/65 sm:text-[9px] sm:tracking-[.35em]">
          <span className="min-[900px]:inline">Scroll to enter</span>
          <span className="min-[900px]:hidden">Explore the place</span>
          <span className="ml-2 sm:ml-3">↓</span>
        </span>
      </div>
    </section>
  )
}
