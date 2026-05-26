(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  const navLinks = nav ? nav.querySelectorAll('a') : [];
  const themeToggleSelector = '[data-theme-toggle]';
  const navToggleSelector = '.nav-toggle';

  const navMarkup = `
    <nav class="main-nav" id="main-navigation" aria-label="Hauptnavigation">
      <ul>
        <li class="nav-group"><a href="index.html">Homepage</a></li>
        <li class="nav-group"><a href="skapulier-intro.html">Was ist das Skapulier</a></li>
        <li class="nav-group"><a href="skapulier-novene.html">Skapuliernovene</a></li>
        <li class="nav-group nav-group--has-dropdown">
          <a href="skapulierfest.html" class="nav-parent-link" aria-haspopup="true">Skapulierfest</a>
          <div class="dropdown" aria-label="Untermenü Skapulierfest">
            <a href="skapulierfest.html#fest-wien">Wien</a>
            <a href="skapulierfest.html#fest-linz">Linz</a>
          </div>
        </li>
        <li class="nav-group"><a href="wir-karmeliten.html">Über die Karmeliten</a></li>
      </ul>
    </nav>
  `;

  const navMount = document.querySelector('[data-nav-mount]');
  if (navMount) navMount.innerHTML = navMarkup;

  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);

  const updateThemeLabel = () => {
    if (!themeToggle) return;
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Hellen Modus aktivieren' : 'Dunklen Modus aktivieren');
    themeToggle.querySelector('.theme-toggle__icon').textContent = theme === 'dark' ? '☀' : '◐';
  };

  updateThemeLabel();

  themeToggle?.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    updateThemeLabel();
  });

  const closeNav = () => {
    if (!nav || !navToggle) return;
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  navToggle?.addEventListener('click', () => {
    if (!nav) return;
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 920) closeNav();
    });
  });

  document.addEventListener('click', (event) => {
    if (!nav || !navToggle || window.innerWidth > 920) return;
    const clickedInsideNav = nav.contains(event.target);
    const clickedToggle = navToggle.contains(event.target);
    if (!clickedInsideNav && !clickedToggle) closeNav();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNav();
  });
})();

  const mailchimpToggle = document.getElementById('mailchimp-toggle');
  const mailchimpWrap = document.getElementById('mailchimp-form-wrap');

  mailchimpToggle.addEventListener('click', function (event) {
    event.preventDefault();

    const isOpen = this.getAttribute('aria-expanded') === 'true';
    const nextState = !isOpen;

    this.setAttribute('aria-expanded', String(nextState));
    mailchimpWrap.hidden = !nextState;
    this.textContent = nextState ? 'Anmeldung schließen' : 'Anmeldung / Mailchimp';
  });
    const beschreibungToggle = document.getElementById('beschreibung-toggle');
  const beschreibungWrap = document.getElementById('beschreibung-wrap');

  beschreibungToggle.addEventListener('click', function (event) {
    event.preventDefault();

    const isOpen = this.getAttribute('aria-expanded') === 'true';
    const nextState = !isOpen;

    this.setAttribute('aria-expanded', String(nextState));
    beschreibungWrap.hidden = !nextState;
    this.textContent = nextState ? 'Beschreibung schließen' : 'Beschreibung';
  });
