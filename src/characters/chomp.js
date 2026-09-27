import { DEFS, INK, eye } from '../core/parts.js';

// Loan shark in shades and a gold chain. Counts cash while working, lowers the shades for attention.
export default {
  name: 'chomp',
  title: 'Chomp',
  set: 'edgy',
  description: 'Shark in shades with a gold grill. Counts cash while working, lowers the shades for input.',
  svg: `
<defs>${DEFS}
  <radialGradient id="ch-skin" cx="38%" cy="28%" r="85%"><stop offset="0" stop-color="#b9e0ff"/><stop offset=".5" stop-color="#5f9fd6"/><stop offset="1" stop-color="#2c5d8f"/></radialGradient>
  <radialGradient id="ch-gold" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#fff3b0"/><stop offset=".5" stop-color="#ffcc33"/><stop offset="1" stop-color="#c98f00"/></radialGradient>
</defs>
<path d="M54 28l12-20 4 22z" fill="url(#ch-skin)"/>
<g class="fin-l"><path d="M30 78q-14 4-16 16q10-4 18-6z" fill="#3f7fb8"/></g>
<g class="fin-r"><path d="M90 78q14 4 16 16q-10-4-18-6z" fill="#3f7fb8"/></g>
<ellipse cx="48" cy="104" rx="8" ry="3.5" fill="#2c5d8f"/><ellipse cx="72" cy="104" rx="8" ry="3.5" fill="#2c5d8f"/>
<path d="M60 18C84 30 94 60 92 84c-2 14-14 20-32 20S30 98 28 84C26 60 36 30 60 18Z" fill="url(#ch-skin)"/>
<ellipse cx="60" cy="88" rx="24" ry="16" fill="#eef4fa"/>
<path d="M84 64q-3 5 0 10M88 66q-3 4 0 8" stroke="#2c5d8f" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".5"/>
<ellipse cx="46" cy="38" rx="10" ry="5" transform="rotate(-40 46 38)" fill="url(#hl)" opacity=".7"/>
<g class="st s-attention">${eye(48, 54, 4.4, 5.4)}${eye(72, 54, 4.4, 5.4)}</g>
<g class="st s-idle s-working s-done">
  <path d="M43 79q17 12 34 0z" fill="${INK}"/>
  <path d="M45 79.6l3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3 3 3 3-3" stroke="#fff" stroke-width="1.4" fill="none" stroke-linejoin="round"/>
  <rect x="60.5" y="79.6" width="4.4" height="3.4" rx=".8" fill="url(#ch-gold)"/>
</g>
<g class="st s-attention"><ellipse cx="60" cy="86" rx="3" ry="3.4" fill="${INK}"/></g>
<g class="shades">
  <path d="M33 52h54v5c0 8-5 12-13 12h-3c-6 0-9-4-10-9-1 5-4 9-10 9h-3c-10 0-15-4-15-12z" fill="#111318"/>
  <path d="M37 59h17M66 59h17" style="stroke:var(--glow)" stroke-width="1.6" stroke-linecap="round" opacity=".7"/>
  <path d="M39 55.5l6-1.5M69 55.5l6-1.5" stroke="#fff" stroke-opacity=".7" stroke-width="1.6" stroke-linecap="round"/>
</g>
<path d="M38 94q22 12 44 0" stroke="#ffcc33" stroke-width="3" fill="none" stroke-dasharray="3 1.6" stroke-linecap="round"/>
<circle cx="60" cy="101.5" r="5" fill="url(#ch-gold)"/><path class="bling" d="M58 99.5l1 1" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>
<g class="st s-working">
  <rect x="92" y="92" width="22" height="10" rx="2" fill="#3a9a4c"/><rect x="92" y="88" width="22" height="10" rx="2" fill="#4caf50"/>
  <g class="bill"><rect x="92" y="84" width="22" height="10" rx="2" fill="#6fd184"/><circle cx="103" cy="89" r="2.6" fill="#3a9a4c"/></g>
</g>`,
  css: `
.fin-l{transform-origin:30px 80px}.fin-r{transform-origin:90px 80px}
.shades{transition:transform .35s cubic-bezier(.3,1.5,.5,1)}
.bill{transform-origin:92px 89px}
.bling{transform-box:fill-box;transform-origin:center}
[data-s=idle] .bob{animation:ch-swag 2.4s ease-in-out infinite}
[data-s=working] .bill{animation:ch-count .5s ease-in infinite}
[data-s=working] .fin-r{animation:ch-fin .25s ease-in-out infinite alternate}
[data-s=attention] .bob{animation:none}
[data-s=attention] .shades{transform:translateY(13px)}
[data-s=done] .bling{animation:twinkle 1s ease-in-out infinite}
[data-s=done] .fin-l{animation:ch-fin .3s ease-in-out infinite alternate}
@keyframes ch-swag{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
@keyframes ch-count{0%{transform:rotate(0);opacity:1}100%{transform:rotate(-70deg) translateY(-4px);opacity:0}}
@keyframes ch-fin{to{transform:rotate(-14deg)}}`,
};
