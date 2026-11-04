import { useEffect, useRef, useState } from "react"
import { walkIns } from "../data/community"

function Clip({ src, poster, caption, onFail }: { src: string; poster?: string; caption: string; onFail: () => void }) {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => { // play only while visible, saves battery and data
    const v = ref.current; if (!v) return
    const io = new IntersectionObserver(([e]) => { e.isIntersecting ? v.play().catch(() => {}) : v.pause() }, { threshold: 0.4 })
    io.observe(v); return () => io.disconnect()
  }, [])
  return (
    <figure className="relative aspect-[9/16] overflow-hidden bg-night">
      <video ref={ref} src={src} poster={poster} muted loop playsInline preload="metadata" onError={onFail} className="absolute inset-0 size-full object-cover" aria-label={caption} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <figcaption className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[.22em] text-white">{caption}</figcaption>
    </figure>
  )
}

export default function WalkIns() {
  const [failed, setFailed] = useState<string[]>([])
  const shown = walkIns.filter(w => !failed.includes(w.src))
  if (!shown.length && failed.length) return null
  return (
    <section aria-label="Walk in with us" className="bg-paper px-5 py-24 sm:px-8 sm:py-32 md:px-12">
      <div className="mx-auto max-w-[1380px]">
        <p className="eyebrow text-ember">Walk in with us</p>
        <h2 className="mt-5 max-w-[14ch] font-display text-5xl tracking-[-.04em] sm:text-7xl">See it before you come.</h2>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3">
          {shown.map(w => <Clip key={w.src} {...w} onFail={() => setFailed(f => [...f, w.src])} />)}
        </div>
      </div>
    </section>
  )
}
