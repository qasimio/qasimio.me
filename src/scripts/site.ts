import anime from 'animejs/lib/anime.es.js';
import ScrollReveal from 'scrollreveal';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initNav() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav || nav.dataset.bound === 'true') return;
  nav.dataset.bound = 'true';

  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 50);
    nav.classList.toggle('is-hidden', y > 120 && y > lastY && y > 200);
    if (y <= 50) nav.classList.remove('is-hidden');
    lastY = y;
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true },
  );
}

function initMobileMenu() {
  const button = document.querySelector<HTMLButtonElement>('[data-mobile-menu]');
  const panel = document.querySelector<HTMLElement>('[data-mobile-panel]');
  if (!button || !panel || button.dataset.bound === 'true') return;
  button.dataset.bound = 'true';

  const setOpen = (open: boolean) => {
    panel.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    panel.setAttribute('aria-hidden', String(!open));
  };

  button.addEventListener('click', () => setOpen(!panel.classList.contains('is-open')));
  panel
    .querySelectorAll('a')
    .forEach((link) => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setOpen(false);
  });
}

function initJobs() {
  const root = document.querySelector<HTMLElement>('[data-jobs]');
  if (!root || root.dataset.bound === 'true') return;
  root.dataset.bound = 'true';
  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-job-tab]'));
  const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-job-panel]'));
  const indicator = root.querySelector<HTMLElement>('[data-job-indicator]');
  let active = 0;

  const render = (next: number) => {
    active = (next + tabs.length) % tabs.length;
    tabs.forEach((tab, i) => {
      const current = i === active;
      tab.classList.toggle('is-active', current);
      tab.setAttribute('aria-selected', String(current));
      tab.tabIndex = current ? 0 : -1;
    });
    panels.forEach((panel, i) => {
      const current = i === active;
      panel.hidden = !current;
      panel.setAttribute('aria-hidden', String(!current));
      if (current && !reducedMotion) {
        panel.animate(
          [
            { opacity: 0, transform: 'translateY(8px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: 240, easing: 'cubic-bezier(0.645,0.045,0.355,1)' },
        );
      }
    });
    if (indicator) indicator.style.transform = `translateY(${active * 48}px)`;
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => render(index));
    tab.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        event.preventDefault();
        render(active + 1);
        tabs[active]?.focus();
      }
      if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        event.preventDefault();
        render(active - 1);
        tabs[active]?.focus();
      }
    });
  });
  render(0);
}

function initReveal() {
  if (reducedMotion) return;
  const sr = ScrollReveal();
  sr.clean('.reveal');
  sr.reveal('.reveal', {
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay: 80,
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    viewFactor: 0.12,
  });
}

function initLoader() {
  const loader = document.querySelector<HTMLElement>('[data-loader]');
  if (!loader) return;
  try {
    if (sessionStorage.getItem('qasim-loader-seen')) {
      loader.remove();
      document.body.classList.remove('is-loading');
      return;
    }
    sessionStorage.setItem('qasim-loader-seen', '1');
  } catch {
    // Keep the entrance if storage is unavailable.
  }

  if (reducedMotion) {
    loader.remove();
    document.body.classList.remove('is-loading');
    return;
  }

  anime
    .timeline({
      complete: () => {
        loader.remove();
        document.body.classList.remove('is-loading');
      },
    })
    .add({
      targets: '[data-loader-mark]',
      opacity: [0, 1],
      scale: [0.7, 1],
      duration: 500,
      easing: 'easeOutQuart',
    })
    .add(
      {
        targets: '[data-loader-hex]',
        opacity: [0.05, 1],
        scale: [0.7, 1],
        duration: 900,
        easing: 'easeInOutQuart',
      },
      '-=350',
    )
    .add(
      {
        targets: '[data-loader-mark]',
        opacity: 0,
        scale: 0.08,
        duration: 350,
        easing: 'easeInOutQuart',
      },
      '+=300',
    )
    .add({ targets: loader, opacity: 0, duration: 250, easing: 'easeInOutQuart' }, '-=50');
}

function initContact() {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  if (!form || form.dataset.bound === 'true') return;
  form.dataset.bound = 'true';
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    const subject = encodeURIComponent(name ? `qasimio.me — ${name}` : 'Hello from qasimio.me');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@qasimio.me?subject=${subject}&body=${body}`;
  });
}

function boot() {
  initNav();
  initMobileMenu();
  initJobs();
  initContact();
  initReveal();
  initLoader();
}

boot();
document.addEventListener('astro:page-load', boot);
