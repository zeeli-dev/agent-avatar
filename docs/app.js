// Docs site logic: builds navigation and gallery from the registry, runs the playground.
import { CHARACTERS, SETS, VARIANTS } from '../src/index.js';

const STATE_LABEL = { idle: 'Idle', working: 'Working', attention: 'Needs input', done: 'Done' };
const $ = (id) => document.getElementById(id);
const chars = Object.values(CHARACTERS);

// Sidebar gallery links + gallery sections, both from the registry.
$('nav-gallery').innerHTML = SETS.map(
  (set) => `
  <a class="link set" href="#set-${set.id}">${set.title}</a>
  ${chars
    .filter((c) => c.set === set.id)
    .map(
      (c) => `
    <a class="link sub" href="#${c.name}" data-name="${c.name} ${c.title.toLowerCase()}">
      <agent-avatar variant="${c.name}" size="18"></agent-avatar>${c.title}</a>`,
    )
    .join('')}`,
).join('');

$('gallery').innerHTML = SETS.map(
  (set) => `
  <section id="set-${set.id}">
    <h2>${set.title}</h2>
    <div class="grid">${chars
      .filter((c) => c.set === set.id)
      .map(
        (c) => `
      <article class="card" id="${c.name}">
        <div class="stage">
          <span class="tag">${c.name}</span>
          <button type="button" class="try" data-try="${c.name}">Open in playground</button>
          <agent-avatar class="hero" variant="${c.name}" size="150"></agent-avatar>
        </div>
        <div class="body">
          <h3>${c.title}</h3><p>${c.description}</p>
          <div class="states">${Object.entries(STATE_LABEL)
            .map(
              ([s, l]) => `
            <figure><agent-avatar variant="${c.name}" state="${s}" size="48"></agent-avatar><figcaption>${l}</figcaption></figure>`,
            )
            .join('')}
          </div>
        </div>
      </article>`,
      )
      .join('')}
    </div>
  </section>`,
).join('');

$('hero-row').innerHTML = VARIANTS.map(
  (v, i) =>
    `<agent-avatar variant="${v}" state="${['idle', 'working', 'attention', 'done'][i % 4]}" size="44"></agent-avatar>`,
).join('');
$('api-variants').innerHTML = VARIANTS.map((v) => `<code>${v}</code>`).join(' · ');

// Tiny syntax highlighter for the docs' own snippets (html, js/jsx, sh). No dependency.
const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const GRAMMAR = {
  js: /(?<c>\/\/[^\n]*)|(?<s>'[^'\n]*'|"[^"\n]*"|`[^`]*`)|(?<t><\/?[A-Za-z][\w-]*|\/?(?<!=)>)|(?<k>\b(?:import|export|from|function|return|const|let|new|if|else)\b)|(?<a>\b[a-z][\w-]*(?==))|(?<f>\b[A-Za-z_]\w*(?=\())|(?<n>\b\d+(?:\.\d+)?\b)|(?<p>=>|[{}()[\]=;,.])/g,
  sh: /(?<c>#[^\n]*)|(?<s>'[^'\n]*'|"[^"\n]*")|(?<k>^\s*[\w.-]+)|(?<a>\s--?[\w-]+)/gm,
};
GRAMMAR.html = GRAMMAR.js;
const highlight = (code) => {
  const re = GRAMMAR[code.dataset.lang];
  if (!re) return;
  const src = code.textContent;
  let out = '';
  let last = 0;
  for (const m of src.matchAll(re)) {
    const kind = Object.keys(m.groups).find((g) => m.groups[g] !== undefined);
    out += `${esc(src.slice(last, m.index))}<span class="tk-${kind}">${esc(m[0])}</span>`;
    last = m.index + m[0].length;
  }
  code.innerHTML = out + esc(src.slice(last));
};
document.querySelectorAll('code[data-lang]').forEach(highlight);
$('count').textContent = VARIANTS.length;

// Segmented controls.
const seg = (el, fn) =>
  el.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    el.querySelectorAll('button').forEach((x) => {
      x.setAttribute('aria-pressed', x === b);
    });
    fn(b.dataset.v);
  });

// Gallery state: cycle or fixed.
const order = Object.keys(STATE_LABEL);
let mode = 'cycle';
let tick = 0;
const setGallery = (s) =>
  document.querySelectorAll('.hero').forEach((el) => {
    el.setAttribute('state', s);
  });
setGallery('idle');
setInterval(() => mode === 'cycle' && setGallery(order[++tick % order.length]), 2600);
seg($('state'), (v) => {
  mode = v;
  if (v !== 'cycle') setGallery(v);
});
seg($('theme'), (v) => (document.documentElement.dataset.theme = v));

// Playground.
const pg = { variant: 'mochi', state: 'working', size: 180 };
const TREE = [
  ['Orchestrator', 'working'],
  ['Planner', 'done'],
  ['Coder', 'working'],
  ['Reviewer', 'attention'],
  ['Tester', 'idle'],
];
$('pg-variant').innerHTML = VARIANTS.map(
  (v) =>
    `<button type="button" data-v="${v}" aria-pressed="${v === pg.variant}" title="${CHARACTERS[v].title}" aria-label="${CHARACTERS[v].title}"><agent-avatar variant="${v}" size="32"></agent-avatar></button>`,
).join('');
const renderPg = () => {
  const el = $('pg');
  el.setAttribute('variant', pg.variant);
  el.setAttribute('state', pg.state);
  el.setAttribute('size', pg.size);
  $('pg-size-out').textContent = pg.size;
  $('pg-code').textContent =
    `<agent-avatar variant="${pg.variant}" state="${pg.state}" size="${pg.size}"></agent-avatar>`;
  highlight($('pg-code'));
  $('pg-tree').innerHTML = TREE.map(
    ([n, s], i) =>
      `<div class="row${i ? ' child' : ''}"><agent-avatar variant="${pg.variant}" state="${s}" size="28"></agent-avatar><span class="n">${n}</span><span class="s">${STATE_LABEL[s]}</span></div>`,
  ).join('');
};
seg($('pg-variant'), (v) => {
  pg.variant = v;
  renderPg();
});
seg($('pg-state'), (v) => {
  pg.state = v;
  renderPg();
});
$('pg-size').addEventListener('input', (e) => {
  pg.size = +e.target.value;
  renderPg();
});
renderPg();

document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-try]');
  if (!t) return;
  pg.variant = t.dataset.try;
  $('pg-variant')
    .querySelectorAll('button')
    .forEach((b) => {
      b.setAttribute('aria-pressed', b.dataset.v === pg.variant);
    });
  renderPg();
  $('playground').scrollIntoView();
});

// Copy buttons on code blocks.
document.querySelectorAll('pre').forEach((pre) => {
  const b = Object.assign(document.createElement('button'), { type: 'button', className: 'copy', textContent: 'Copy' });
  b.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(pre.querySelector('code').textContent);
      b.textContent = 'Copied';
    } catch {
      b.textContent = 'Select to copy';
    }
    setTimeout(() => (b.textContent = 'Copy'), 1400);
  });
  pre.append(b);
});

// Sidebar filter.
$('filter').addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll('#nav-gallery .sub').forEach((a) => {
    a.hidden = q && !a.dataset.name.includes(q);
  });
});

// Mobile menu.
$('menu').addEventListener('click', () => {
  const open = $('side').classList.toggle('open');
  $('menu').setAttribute('aria-expanded', open);
});

// Scroll spy: highlight the section in view.
const links = new Map([...document.querySelectorAll('.side a.link')].map((a) => [a.getAttribute('href').slice(1), a]));
const spy = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      links.forEach((a) => {
        a.removeAttribute('aria-current');
      });
      links.get(e.target.id)?.setAttribute('aria-current', 'true');
    }
  },
  { rootMargin: '-30% 0px -65% 0px' },
);
document.querySelectorAll('main section[id], .card[id]').forEach((el) => {
  spy.observe(el);
});
