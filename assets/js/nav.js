export function initNavigation() {
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-navigation');

  const closeMenu = () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', document.documentElement.lang === 'en' ? 'Open menu' : 'Abrir menu');
    navigation.classList.remove('is-open');
  };

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen
      ? (document.documentElement.lang === 'en' ? 'Open menu' : 'Abrir menu')
      : (document.documentElement.lang === 'en' ? 'Close menu' : 'Fechar menu'));
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}
