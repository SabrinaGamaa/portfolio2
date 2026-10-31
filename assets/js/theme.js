export function initTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme');
  const theme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
  applyTheme(theme);

  document.querySelector('#theme-toggle').addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('portfolio-theme', theme);
  document.querySelector('#theme-color').content = theme === 'dark' ? '#141714' : '#f6f7f1';

  const button = document.querySelector('#theme-toggle');
  const nextThemeIsLight = theme === 'dark';
  const isEnglish = document.documentElement.lang === 'en';
  const label = nextThemeIsLight
    ? (isEnglish ? 'Switch to light theme' : 'Ativar tema claro')
    : (isEnglish ? 'Switch to dark theme' : 'Ativar tema escuro');
  button.setAttribute('aria-label', label);
  button.title = label;
  button.querySelector('span').textContent = nextThemeIsLight ? '☼' : '◐';
}
