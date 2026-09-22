const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initReveal() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  items.forEach((item) => item.classList.add('reveal-ready'));
  if (reducedMotion || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const item = entry.target as HTMLElement;
        item.classList.add('is-visible');
        instance.unobserve(item);
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
  );
  items.forEach((item) => observer.observe(item));
}

function initNav() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav || nav.dataset.bound) return;
  nav.dataset.bound = 'true';
  let lastY = window.scrollY;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 40);
    nav.classList.toggle('is-hidden', y > 120 && y > lastY);
    if (y <= 40 || y < lastY) nav.classList.remove('is-hidden');
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
  if (!button || !panel || button.dataset.bound) return;
  button.dataset.bound = 'true';
  const close = () => {
    panel.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    button.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
  };
  button.addEventListener('click', () => {
    const open = !panel.classList.contains('is-open');
    panel.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', String(open));
    panel.setAttribute('aria-hidden', String(!open));
  });
  panel.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}

function initScrollSpy() {
  const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
  const sections = navLinks
    .map((link) => document.getElementById(link.dataset.navLink ?? ''))
    .filter((section): section is HTMLElement => Boolean(section));
  if (!navLinks.length || !sections.length) return;

  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) =>
            link.classList.toggle('is-active', link.dataset.navLink === entry.target.id),
          );
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
  }
}

function initExperience() {
  const root = document.querySelector<HTMLElement>('[data-jobs]');
  if (!root || root.dataset.bound) return;
  root.dataset.bound = 'true';
  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-job-tab]'));
  const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-job-panel]'));
  const indicator = root.querySelector<HTMLElement>('[data-job-indicator]');
  let active = 0;
  const render = (index: number) => {
    active = (index + tabs.length) % tabs.length;
    tabs.forEach((tab, i) => {
      const on = i === active;
      tab.classList.toggle('is-active', on);
      tab.tabIndex = on ? 0 : -1;
      tab.setAttribute('aria-selected', String(on));
    });
    panels.forEach((panel, i) => {
      const on = i === active;
      panel.hidden = !on;
      panel.setAttribute('aria-hidden', String(!on));
      if (on && !reducedMotion) {
        panel.animate(
          [
            { opacity: 0, transform: 'translateY(8px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          { duration: 260, easing: 'cubic-bezier(.645,.045,.355,1)' },
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
      if (event.key === 'Home') {
        event.preventDefault();
        render(0);
        tabs[active]?.focus();
      }
      if (event.key === 'End') {
        event.preventDefault();
        render(tabs.length - 1);
        tabs[active]?.focus();
      }
    });
  });
  render(0);
}

function initTheme() {
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]'));
  if (!buttons.length || buttons[0].dataset.bound) return;
  buttons.forEach((button) => {
    button.dataset.bound = 'true';
  });
  const apply = (theme: 'dark' | 'light') => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(theme === 'light'));
      button.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
      );
      const icon = button.querySelector('svg');
      if (icon)
        icon.innerHTML =
          theme === 'dark'
            ? '<circle cx=\"12\" cy=\"12\" r=\"4\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/>'
            : '<path d=\"M20 15.2A8 8 0 0 1 8.8 4 8 8 0 1 0 20 15.2Z\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/>';
    });
    try {
      localStorage.setItem('qasim-theme', theme);
    } catch {}
  };
  apply(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  buttons.forEach((button) =>
    button.addEventListener('click', () =>
      apply(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'),
    ),
  );
}

function initContact() {
  const form = document.querySelector<HTMLFormElement>('[data-contact-form]');
  if (!form || form.dataset.bound) return;
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
  initScrollSpy();
  initMobileMenu();
  initExperience();
  initTheme();
  initContact();
  initReveal();
}

boot();
document.addEventListener('astro:page-load', boot);
