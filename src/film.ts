import { hero } from "./data/hero"

export const scenes = hero.scenes

export function sceneIndex(p: number) {
  return Math.min(scenes.length - 1, Math.floor(p * scenes.length))
}

const sparks = Array.from({ length: 60 }, (_, i) => ({
  x: (i * 37 % 100) / 100,
  y: (i * 53 % 100) / 100,
  s: 0.4 + (i % 5) / 6,
  r: 1 + (i % 4),
}))

export function drawFilm(cv: HTMLCanvasElement, p: number) {
  const c = cv.getContext("2d")!, w = cv.width, h = cv.height, s = Math.min(w, h)
  const t = p * scenes.length
  const k = sceneIndex(p)
  const f = t - k
  const cx = w / 2, cy = h * 0.5

  c.fillStyle = "#12100e"
  c.fillRect(0, 0, w, h)

  const fire = k === 2 ? 1 : k === 1 ? f : k === 3 ? 1 - f : k === 0 ? 0 : 0.3
  const g = c.createRadialGradient(cx, h * 0.78, 0, cx, h * 0.78, s * (0.6 + fire * 0.5))
  g.addColorStop(0, `rgba(255,150,60,${0.25 + fire * 0.6})`)
  g.addColorStop(0.5, `rgba(217,66,28,${0.15 + fire * 0.3})`)
  g.addColorStop(1, "rgba(18,16,14,0)")
  c.fillStyle = g
  c.fillRect(0, 0, w, h)

  sparks.forEach(q => {
    const y = ((q.y - p * q.s * 1.5) % 1 + 1) % 1
    c.fillStyle = `rgba(255,${150 + q.r * 20},70,${0.15 + fire * 0.6})`
    c.beginPath()
    c.arc(q.x * w, y * h, q.r * s / 450, 0, 7)
    c.fill()
  })

  if (k === 0) {
    for (let i = 0; i < 7; i++) {
      const a = i * 0.9 + f
      c.fillStyle = ["#7a8f4b", "#c85a2d", "#e8dcc6", "#4a6b3a"][i % 4]
      c.beginPath()
      c.arc(cx + Math.cos(a) * s * 0.25, cy + Math.sin(a * 1.3) * s * 0.2, s * (0.05 + (i % 3) * 0.03) * (0.8 + f * 0.3), 0, 7)
      c.fill()
    }
  } else if (k === 1) {
    c.fillStyle = "#e8dcc6"
    c.fillRect(cx - s * 0.32, cy + s * 0.08, s * 0.64, s * 0.04)
    for (let i = 0; i < 8; i++) {
      const sl = Math.min(1, f * 9 - i * 0.8)
      if (sl > 0) {
        c.fillStyle = i % 2 ? "#c85a2d" : "#7a8f4b"
        c.fillRect(cx - s * 0.3 + i * s * 0.075, cy + s * 0.08 - s * 0.1 * sl, s * 0.05, s * 0.1 * sl)
      }
    }
  } else if (k === 2) {
    for (let i = 0; i < 5; i++) {
      const fl = Math.sin(p * 60 + i * 2) * 0.1 + 1
      const x = cx + (i - 2) * s * 0.1
      const lg = c.createLinearGradient(0, cy + s * 0.25, 0, cy - s * 0.2 * fl)
      lg.addColorStop(0, "#d9421c")
      lg.addColorStop(0.6, "#ff9a3c")
      lg.addColorStop(1, "rgba(255,220,120,0)")
      c.fillStyle = lg
      c.beginPath()
      c.moveTo(x - s * 0.06, cy + s * 0.25)
      c.quadraticCurveTo(x, cy - s * 0.28 * fl, x + s * 0.06, cy + s * 0.25)
      c.fill()
    }
    c.fillStyle = "#2a221d"
    c.fillRect(cx - s * 0.35, cy + s * 0.25, s * 0.7, s * 0.03)
  } else {
    const sc = k === 3 ? 0.75 + f * 0.25 : 1
    c.fillStyle = "#efe9df"
    c.beginPath()
    c.ellipse(cx, cy + s * 0.05, s * 0.34 * sc, s * 0.2 * sc, 0, 0, 7)
    c.fill()
    c.fillStyle = "#d6cdbf"
    c.beginPath()
    c.ellipse(cx, cy + s * 0.05, s * 0.24 * sc, s * 0.14 * sc, 0, 0, 7)
    c.fill()
    if (k === 4 || f > 0.4) {
      c.fillStyle = "#6a3a24"
      c.beginPath()
      c.ellipse(cx, cy + s * 0.03, s * 0.12 * sc, s * 0.07 * sc, 0, 0, 7)
      c.fill()
      c.fillStyle = "#7a8f4b"
      for (let i = 0; i < 6; i++) {
        c.beginPath()
        c.arc(cx + (i - 2.5) * s * 0.04, cy - s * 0.04, s * 0.012, 0, 7)
        c.fill()
      }
    }
  }
}
