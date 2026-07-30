/**
 * SCI HUFALOU — script.js
 * ----------------------------------------------------------------
 * Gère uniquement les animations GSAP et les révélations au scroll.
 * (La navigation et le footer sont gérés par _shared.js)
 */

(function () {
  'use strict';

  /* ── RÉVÉLATIONS AU SCROLL ── */
  function initReveals() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (window.gsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 22 }, {
          opacity: 1, y: 0, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' }
        });
      });
      return;
    }

    // Fallback : simple révélation via IntersectionObserver
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in-view');
        io.unobserve(e.target);
      });
    }, { threshold: .1, rootMargin: '0px 0px -30px 0px' });
    
    items.forEach(el => io.observe(el));
  }

  /* ── HERO : Animation d'entrée ── */
  function initHeroIntro() {
    const hero = document.getElementById('hero');
    if (!hero || !window.gsap) return;
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.fromTo('.hero-seal', { opacity: 0, y: -10 }, { opacity: .85, y: 0, duration: 1 })
      .fromTo('.hero-title', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1 }, '-=.6')
      .fromTo('.hero-subtitle', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=.5')
      .fromTo('.hero-rule', { scaleY: 0 }, { scaleY: 1, duration: .8, transformOrigin: 'top' }, '-=.4')
      .fromTo('.hero-actions', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .8 }, '-=.3');
  }

  /* ── INITIALISATION ── */
  function init() {
    if (window.gsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
    initHeroIntro();
    initReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();