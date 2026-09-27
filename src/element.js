// The <agent-avatar> element. See src/index.js for registration.
//
// Performance model:
// - Body motion (bob, squash, shadow, badges, sparkles) lives on HTML layers animating
//   only transform/opacity, so it runs on the compositor with no repaint.
// - No SVG filters. Glows and highlights are pre-baked radial gradients.
// - Only the active state's animations run; hidden states are fully idle.
// - Offscreen avatars are paused (one shared IntersectionObserver).
// - size <= 32 enables lite mode (see core/styles.js).
// - Stylesheets are shared per variant and markup is cloned from a cached <template>.

import { BADGES, SPARKS, STATES } from './core/parts.js';
import { BASE } from './core/styles.js';
import { CHARACTERS, VARIANTS } from './characters/index.js';

const LITE_MAX = 32;

// Registered colors let the palette cross-fade between states.
if (typeof CSS !== 'undefined' && CSS.registerProperty) {
  for (const name of ['--a', '--b', '--glow']) {
    try {
      CSS.registerProperty({ name, syntax: '<color>', inherits: true, initialValue: 'transparent' });
    } catch {
      // already registered (hot reload, second copy of the lib)
    }
  }
}

const sheets = {};
const sheetFor = (variant) => {
  if (!sheets[variant]) {
    sheets[variant] = new CSSStyleSheet();
    sheets[variant].replaceSync(BASE + CHARACTERS[variant].css);
  }
  return sheets[variant];
};

const templates = {};
const templateFor = (variant) => {
  if (!templates[variant]) {
    templates[variant] = document.createElement('template');
    templates[variant].innerHTML =
      `<div class="root" role="img"><div class="shadow"></div><div class="bob"><div class="squash">` +
      `<svg class="art" viewBox="0 0 120 120" aria-hidden="true">${CHARACTERS[variant].svg}</svg></div>` +
      `${CHARACTERS[variant].html ?? ''}${BADGES}</div>${SPARKS}</div>`;
  }
  return templates[variant].content;
};

// One observer for every avatar: pause animations while offscreen.
const io =
  typeof IntersectionObserver !== 'undefined' &&
  new IntersectionObserver((entries) => {
    for (const e of entries) e.target.shadowRoot.firstElementChild?.toggleAttribute('data-off', !e.isIntersecting);
  });

export class AgentAvatar extends HTMLElement {
  static observedAttributes = ['variant', 'state', 'size', 'label'];
  #root;
  #variant;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.#sync();
    if (io) io.observe(this);
  }

  disconnectedCallback() {
    if (io) io.unobserve(this);
  }

  attributeChangedCallback() {
    if (this.#root || this.isConnected) this.#sync();
  }

  #sync() {
    const v = this.getAttribute('variant');
    const s = this.getAttribute('state');
    const variant = VARIANTS.includes(v) ? v : 'mochi';
    const state = STATES.includes(s) ? s : 'idle';
    if (variant !== this.#variant) {
      this.#variant = variant;
      this.shadowRoot.adoptedStyleSheets = [sheetFor(variant)];
      this.shadowRoot.replaceChildren(templateFor(variant).cloneNode(true));
      this.#root = this.shadowRoot.firstElementChild;
    }
    const root = this.#root;
    if (root.dataset.s !== state) root.dataset.s = state;
    root.setAttribute('aria-label', this.getAttribute('label') ?? `Agent ${state}`);
    const size = this.getAttribute('size');
    if (size) {
      this.style.setProperty('--size', /^\d+(\.\d+)?$/.test(size) ? `${size}px` : size);
      const px = /^\d+(\.\d+)?(px)?$/.test(size) ? parseFloat(size) : Infinity;
      root.toggleAttribute('data-lite', px <= LITE_MAX);
    }
  }
}
