/**
 * SC HUFALOU — _shared.js
 * Injection d'un header et footer 100% identiques sur toutes les pages.
 */

(function () {
  'use strict';

  /* ── HEADER HTML (Identique partout) ── */
  const navHTML = `
    <header id="site-header">
      <div class="header-inner">
        <a href="index.html" class="brand" aria-label="SC Hufalou — Accueil">
          <span class="brand-mark" aria-hidden="true">
            <img src="images/Logo_HUFALOU_transparent.png" alt="Logo">
          </span>
          <span class="brand-word"></span>
        </a>
        <nav class="main-nav" aria-label="Navigation principale">
          <ul>
            <li><a href="index.html#qui-sommes-nous">Qui sommes-nous</a></li>
            <li><a href="index.html#contact" class="nav-cta">Contact</a></li>
          </ul>
        </nav>
        <button class="nav-burger" id="nav-burger" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="mobile-nav">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav id="mobile-nav" class="mobile-nav" aria-label="Navigation mobile" aria-hidden="true">
        <ul>
          <li><a href="index.html#qui-sommes-nous">Qui sommes-nous</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  `;

  /* ── FOOTER HTML (Identique partout) ── */
  const footerHTML = `
    <footer id="site-footer">
      <div class="footer-inner-simple">
        <div class="footer-brand">
          <span class="footer-word">SC HUFALOU</span>
          <p class="footer-baseline">Investir durablement. <br>Valoriser le patrimoine. <br>Construire l'avenir.</p>
        </div>
        <nav class="footer-legal-nav" aria-label="Mentions légales">
          <a href="mentions-legales.html">Mentions légales</a>
          <a href="confidentialite.html">Politique de confidentialité</a>
        </nav>
      </div>
      <div class="footer-bottom">
        <span>© <span id="year"></span> SC HUFALOU. Tous droits réservés.</span>
      </div>
    </footer>
  `;

  /* ── INJECTION ── */
  const navTarget = document.getElementById('nav-inject');
  if (navTarget) navTarget.outerHTML = navHTML;

  const footerTarget = document.getElementById('footer-inject');
  if (footerTarget) footerTarget.outerHTML = footerHTML;

  /* ── COMPORTEMENT SHARED ── */
  function initShared() {
    const header = document.getElementById('site-header');
    const burger = document.getElementById('nav-burger');
    const mobileNav = document.getElementById('mobile-nav');
    
    if (header) {
      // Si la page a un fond sombre (comme l'accueil), on adapte les couleurs du header
      if (document.body.classList.contains('has-hero')) {
        header.classList.add('on-dark');
      }

      const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll(); // Vérification initiale
    }

    if (burger && mobileNav) {
      burger.addEventListener('click', () => {
        const isOpen = mobileNav.classList.toggle('open');
        burger.setAttribute('aria-expanded', String(isOpen));
        mobileNav.setAttribute('aria-hidden', String(!isOpen));
      });
      mobileNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          mobileNav.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
          mobileNav.setAttribute('aria-hidden', 'true');
        });
      });
    }

    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initShared);
  } else {
    initShared();
  }
})();