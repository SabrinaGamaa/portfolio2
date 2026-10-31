import { applyLanguage, getCurrentLanguage } from './i18n.js?v=resume-fix-20261031';
import { initNavigation } from './nav.js?v=resume-fix-20261031';
import { initTheme } from './theme.js?v=resume-fix-20261031';

function initPortfolio() {
  initNavigation();
  applyLanguage(getCurrentLanguage());
  initTheme();

  document.querySelector('#language-toggle').addEventListener('click', () => {
    const nextLanguage = getCurrentLanguage() === 'pt' ? 'en' : 'pt';
    applyLanguage(nextLanguage);
  });

  const resumeDialog = document.querySelector('#resume-dialog');
  document.querySelector('#resume-open').addEventListener('click', () => resumeDialog.showModal());
  document.querySelector('#resume-close').addEventListener('click', () => resumeDialog.close());
  resumeDialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    resumeDialog.close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && resumeDialog.open) resumeDialog.close();
  });
  resumeDialog.addEventListener('click', (event) => {
    if (event.target === resumeDialog) resumeDialog.close();
  });

  document.querySelector('#current-year').textContent = String(new Date().getFullYear());

  const revealItems = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js');
    revealItems.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  document.documentElement.classList.add('js');
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((element) => observer.observe(element));

  document.querySelectorAll('.project-image-wrap img').forEach((image) => {
    image.addEventListener('error', () => {
      console.warn(`Não foi possível carregar a imagem: ${image.currentSrc}`);
      image.closest('.project-image-wrap').classList.add('image-unavailable');
    }, { once: true });
  });
}

initPortfolio();
