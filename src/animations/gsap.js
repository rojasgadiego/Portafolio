import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

gsap.defaults({ ease: 'power3.out', duration: 0.8 })

// Si el usuario pidió reducir movimiento, las vistas se muestran sin animar
export const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Solo efectos de mouse (cursor, tilt, magnético) en dispositivos con puntero fino
export const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches

// La intro se muestra una vez por sesión; las vistas esperan a que termine
const INTRO_KEY = 'intro-seen'
let resolveIntro
export const introDone = new Promise(resolve => { resolveIntro = resolve })

export function shouldShowIntro() {
  if (reduceMotion) return false
  try {
    return !sessionStorage.getItem(INTRO_KEY)
  } catch {
    return false
  }
}

export function finishIntro() {
  try { sessionStorage.setItem(INTRO_KEY, '1') } catch { /* storage bloqueado */ }
  resolveIntro()
}

if (!shouldShowIntro()) resolveIntro()

export { gsap, ScrollTrigger, SplitText }
