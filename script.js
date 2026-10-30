// Header: solid background once the page scrolls; mobile menu toggle
const header = document.getElementById('site-header')
const toggle = header.querySelector('.menu-toggle')
const nav = document.getElementById('nav')

const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20)
onScroll()
window.addEventListener('scroll', onScroll, { passive: true })

const setMenu = (open) => {
  header.classList.toggle('is-open', open)
  toggle.setAttribute('aria-expanded', String(open))
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
}
toggle.addEventListener('click', () => setMenu(!header.classList.contains('is-open')))
nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false) })
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false) })

// Highlight the nav link for the section in view
const links = [...nav.querySelectorAll('a[href^="#"]')]
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean)
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`))
  })
}, { rootMargin: '-45% 0px -50% 0px' })
sections.forEach(s => sectionObserver.observe(s))

// Reveal elements as they scroll into view, staggering siblings.
// The hero animates in on load so above-the-fold content never waits on scrolling.
document.querySelectorAll('.hero .reveal').forEach((el, i) => {
  el.style.setProperty('--delay', `${i * 0.1}s`)
  requestAnimationFrame(() => el.classList.add('is-visible'))
})
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return
    entry.target.classList.add('is-visible')
    revealObserver.unobserve(entry.target)
  })
}, { rootMargin: '0px 0px -8% 0px' })
document.querySelectorAll('main .reveal:not(.hero .reveal)').forEach((el) => {
  const siblings = [...el.parentElement.children].filter(c => c.classList.contains('reveal'))
  el.style.setProperty('--delay', `${Math.min(siblings.indexOf(el), 5) * 0.08}s`)
  revealObserver.observe(el)
})

// Service cards: glow follows the cursor
document.querySelectorAll('.service').forEach((card) => {
  card.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${e.clientX - r.left}px`)
    card.style.setProperty('--my', `${e.clientY - r.top}px`)
  })
})

// Before / after slider and vehicle tabs
const compare = document.getElementById('compare')
const range = compare.querySelector('.compare__range')
const before = document.getElementById('compare-before')
const after = document.getElementById('compare-after')
range.addEventListener('input', () => compare.style.setProperty('--pos', `${range.value}%`))

const tabs = [...document.querySelectorAll('.compare-tab')]
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.setAttribute('aria-selected', String(t === tab)))
    before.src = tab.dataset.before
    before.alt = tab.dataset.beforeAlt
    after.src = tab.dataset.after
    after.alt = tab.dataset.afterAlt
    range.value = 50
    compare.style.setProperty('--pos', '50%')
    compare.classList.remove('is-switching')
    void compare.offsetWidth
    compare.classList.add('is-switching')
  })
})

// Lightbox for the finished-details photos
const lightbox = document.getElementById('lightbox')
const lightboxImg = lightbox.querySelector('img')
document.querySelectorAll('.showcase__item').forEach((item) => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img')
    lightboxImg.src = item.dataset.full
    lightboxImg.alt = img.alt
    lightbox.showModal()
  })
})
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox || e.target.closest('.lightbox__close')) lightbox.close()
})

document.getElementById('year').textContent = new Date().getFullYear()
