/*
  Main JavaScript – DOM manipulation without jQuery
  Handles navigation, footer, theme toggle, language toggle
*/

// ======== CONFIGURATION ========
const config = {
  themes: {
    light: 'light',
    dark: 'dark',
  },
  langs: {
    pt: 'pt',
    en: 'en',
  },
  defaultTheme: 'light',
  defaultLang: 'pt',
};

// ======== UTILITIES ========
const select = (sel, parent = document) => parent.querySelector(sel);
const selectAll = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

// Persist state
const getState = (key, fallback) => JSON.parse(localStorage.getItem(key)) ?? fallback;
const setState = (key, value) => localStorage.setItem(key, JSON.stringify(value));

// ======== TEXT SAMPLES - i18n ========
const texts = {
  pt: {
    navHome: 'Home',
    navProjetos: 'Projetos',
    navSobre: 'Sobre Mim',
    heroTitle: 'Oi! Eu sou',
    heroSub: 'Desenvolvedora Back‑End apaixonada por APIs, banco de dados e soluções tecnológicas.',
    skillButton: 'Ver Doc',
    footerHeading: 'Entre em contato comigo!',
    footerForm: 'Entre em contato!',
    footerMessageInfo: 'Quer discutir um projeto ou apenas dizer oi? Minha caixa de entrada está aberta para todos.',
    footerOpportunities: 'Aberto&nbsp;para oportunidades: <span id="oportunidade">Sim</span>',
    emailSuccess: '✅ Mensagem enviada com sucesso! ✔️',
    emailError: '❌ Erro ao enviar: ',
    curriculo: 'Currículo',
    languageToggle: 'En',
    themeToggle: '🌙',
  },
  en: {
    navHome: 'Home',
    navProjetos: 'Projects',
    navSobre: 'About Me',
    heroTitle: 'Hi! I am',
    heroSub: 'Back‑End Developer passionate about APIs, databases and tech solutions.',
    skillButton: 'View Docs',
    footerHeading: 'Get in touch with me!',
    footerForm: 'Contact me!',
    footerMessageInfo: 'Want to discuss a project or just say hi? My inbox is open for everyone.',
    footerOpportunities: 'Open&nbsp;to opportunities: <span id="oportunidade">Yes</span>',
    emailSuccess: '✅ Message sent successfully! ✔️',
    emailError: '❌ Error sending: ',
    curriculo: 'Resume',
    languageToggle: 'Pt',
    themeToggle: '☀',
  },
};

// ======== THEME HANDLER ========
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  setState('theme', theme);
}

function toggleTheme() {
  const current = getState('theme', config.defaultTheme);
  const next = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
}

// ======== LANGUAGE HANDLER ========
function applyLang(lang) {
  const strings = texts[lang] || texts['pt'];
  $$('.nav-link').forEach((el, idx) => {
    const key = ['navHome', 'navProjetos', 'navSobre'][idx];
    el.textContent = strings[key];
  });

  // Hero texts
  $('#hero-title span').textContent = strings.heroTitle;
  $('#hero-desc').textContent = strings.heroSub;

  // Button label
  $('.curriculo').textContent = strings.curriculo;
  // Mode switcher - will be updated later
  $('#lang-toggle').textContent = strings.languageToggle;
  $('#theme-toggle').textContent = strings.themeToggle;

  setState('lang', lang);
}

function switchLang() {
  const current = getState('lang', config.defaultLang);
  const next = current === 'pt' ? 'en' : 'pt';
  applyLang(next);
}

// ======== BUILD COMPONENTS ========
function buildNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';

  const brand = document.createElement('a');
  brand.className = 'navbar-brand';
  brand.href = 'index.html';
  brand.textContent = 'Sabrina Gama';

  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'theme-toggle';
  toggleBtn.id = 'theme-toggle';
  toggleBtn.setAttribute('aria-label', 'Toggle Theme');
  toggleBtn.onclick = toggleTheme;

  const langBtn = document.createElement('button');
  langBtn.className = 'lang-switch';
  langBtn.id = 'lang-toggle';
  langBtn.setAttribute('aria-label', 'Toggle Language');
  langBtn.onclick = switchLang;

  const ul = document.createElement('ul');
  ul.className = 'navbar-nav';

  const items = [
    { to: 'index.html', key: 'navHome' },
    { to: 'projetos.html', key: 'navProjetos' },
    { to: 'sobreMim.html', key: 'navSobre' },
  ];
  items.forEach((it, idx) => {
    const li = document.createElement('li');
    li.className = 'nav-item';
    const a = document.createElement('a');
    a.className = 'nav-link';
    a.href = it.to;
    a.dataset.idx = idx;
    a.textContent = ''; // will be set via i18n
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(brand);
  nav.appendChild(toggleBtn);
  nav.appendChild(langBtn);
  nav.appendChild(ul);

  return nav;
}

function buildFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
  <div class="footer-container">
    <div class="footer-left">
      <img src="assets/img/foto-sabrina.jpg" alt="Foto de Sabrina" width="200" height="200"/>
      <h3>Entre em contato comigo!</h3>
      <p id="footer-message-info"></p>
      <p id="footer-opportunities"></p>
      <div class="social-icons">
        <a href="https://github.com/SabrinaGamaa" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/sabrina-gama/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
        <a href="mailto:sabrinagama0027@gmail.com"><i class="fa-solid fa-envelope"></i></a>
        <a href="https://www.instagram.com/sabrina_gama27" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      </div>
    </div>
    <div class="footer-right">
      <h6>Entre em contato!</h6>
      <form id="contact-form">
        <input type="text" name="user_name" placeholder="Seu nome" required>
        <input type="email" name="user_email" placeholder="Seu email" required>
        <textarea name="message" placeholder="Sua mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <p id="status"></p>
    </div>
  </div>
  <p class="foot">&copy; 2025 Sabrina Gama. Todos os direitos reservados.</p>
  `;

  // I18n placeholders
  $('#footer-message-info').textContent = texts[config.defaultLang].footerMessageInfo;
  $('#footer-opportunities').innerHTML = texts[config.defaultLang].footerOpportunities;

  // EmailJS listener
  const form = $('#contact-form');
  const status = $('#status');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jewicbf', 'template_v4edrc4', form).then(
      () => {
        status.textContent = texts[config.defaultLang].emailSuccess;
        form.reset();
      },
      (err) => {
        status.textContent = texts[config.defaultLang].emailError + JSON.stringify(err);
      }
    );
  });

  return footer;
}

// ======== INITIALISER ========
function init() {
  // Build and inject navbar and footer
  const navbar = buildNavbar();
  const footer = buildFooter();

  document.body.prepend(navbar);
  document.body.append(footer);

  // Apply persisted theme & language
  applyTheme(getState('theme', config.defaultTheme));
  applyLang(getState('lang', config.defaultLang));
}

window.addEventListener('DOMContentLoaded', init);
