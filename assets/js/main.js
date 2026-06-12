// Sluit het taalkeuze-paar: zodra de bezoeker een specifieke taalpagina
// bekijkt (manueel of via auto-redirect), markeren we dat in sessionStorage
// zodat de root-NL pagina niet opnieuw redirect.
try {
  var pageLang = document.documentElement.lang;
  if (pageLang && pageLang !== 'nl') {
    sessionStorage.setItem('langChosen', pageLang);
  }
} catch (e) {}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Scroll-reveal voor secties (subtiel)
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const targets = document.querySelectorAll('.section, .hero');
  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'none';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  targets.forEach(el => io.observe(el));
}
