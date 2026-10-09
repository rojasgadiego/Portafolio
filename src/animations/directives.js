import { gsap, reduceMotion, finePointer } from './gsap'

const enabled = finePointer && !reduceMotion

/*
  v-tilt: inclinación 3D siguiendo el mouse + reflejo de luz.
  Uso: v-tilt  ó  v-tilt="{ max: 10, lift: 6 }"
*/
export const tilt = {
  mounted(el, binding) {
    if (!enabled) return
    const { max = 8, lift = 0 } = binding.value || {}

    const glare = document.createElement('div')
    glare.className = 'tilt-glare'
    el.appendChild(glare)
    if (getComputedStyle(el).position === 'static') el.style.position = 'relative'

    gsap.set(el, { transformPerspective: 900, transformStyle: 'preserve-3d' })
    const rotX = gsap.quickTo(el, 'rotationX', { duration: 0.6, ease: 'power3.out' })
    const rotY = gsap.quickTo(el, 'rotationY', { duration: 0.6, ease: 'power3.out' })

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      rotY((px - 0.5) * max * 2)
      rotX((0.5 - py) * max * 2)
      glare.style.setProperty('--gx', `${px * 100}%`)
      glare.style.setProperty('--gy', `${py * 100}%`)
    }
    const onEnter = () => {
      gsap.to(glare, { opacity: 1, duration: 0.4 })
      if (lift) gsap.to(el, { y: -lift, duration: 0.5 })
    }
    const onLeave = () => {
      rotX(0)
      rotY(0)
      gsap.to(glare, { opacity: 0, duration: 0.5 })
      if (lift) gsap.to(el, { y: 0, duration: 0.6 })
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
    el._tiltCleanup = () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      glare.remove()
    }
  },
  unmounted(el) {
    el._tiltCleanup?.()
  }
}

/*
  v-magnetic: el elemento se "pega" levemente al cursor.
  Uso: v-magnetic  ó  v-magnetic="0.4"  (fuerza)
*/
export const magnetic = {
  mounted(el, binding) {
    if (!enabled) return
    const strength = typeof binding.value === 'number' ? binding.value : 0.3
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' })

    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      xTo((e.clientX - (r.left + r.width / 2)) * strength)
      yTo((e.clientY - (r.top + r.height / 2)) * strength)
    }
    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1, 0.4)' })
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    el._magneticCleanup = () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  },
  unmounted(el) {
    el._magneticCleanup?.()
  }
}
