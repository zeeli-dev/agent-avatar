import { DEFS, face } from '../core/parts.js';

// Spray-paint can in a bandana. Tags a wall while working, shakes itself for attention.
export default {
  name: 'tagz',
  title: 'Tagz',
  set: 'edgy',
  description: 'Spray can in a bandana. Tags the wall while working, rattles for input, signs the piece when done.',
  svg: `
<defs>${DEFS}
  <linearGradient id="tg-metal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#aab3c5"/><stop offset=".35" stop-color="#f4f6fb"/><stop offset="1" stop-color="#7d869a"/></linearGradient>
  <linearGradient id="tg-label" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff4fd8"/><stop offset="1" stop-color="#7b3fd1"/></linearGradient>
</defs>
<g class="st s-working s-done">
  <path class="tag" pathLength="1" d="M88 66c2-12 8-14 8-4s-4 12 2 10 6-14 10-12-2 12 4 10" stroke="#3dff8a" stroke-width="3.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<g class="st s-done"><path d="M99 72v6M110 70v4" stroke="#3dff8a" stroke-width="2" stroke-linecap="round"/></g>
<rect x="36" y="34" width="48" height="70" rx="10" fill="url(#tg-metal)"/>
<rect x="36" y="50" width="48" height="36" fill="url(#tg-label)"/>
<path d="M44 86v7a2 2 0 0 0 4 0v-7ZM70 86v10a2 2 0 0 0 4 0V86Z" fill="#7b3fd1"/>
<rect x="41" y="38" width="4" height="60" rx="2" fill="#fff" opacity=".55"/>
<rect x="44" y="22" width="32" height="15" rx="6" fill="#3dff8a"/><rect x="47" y="24" width="12" height="3" rx="1.5" fill="#fff" opacity=".6"/>
<rect x="56" y="15" width="8" height="8" rx="2" fill="#f4f6fb"/><circle cx="64" cy="19" r="1.2" fill="#333"/>
${face(61, { dx: 10, rx: 3.8, ry: 5, mouth: false, blush: false })}
<path d="M48 55l8 3M72 55l-8 3" stroke="#1b1330" stroke-width="2" stroke-linecap="round"/>
<path d="M36 69h48l-24 17z" fill="#e63946"/>
<path d="M36 69h48" stroke="#b71c2c" stroke-width="2"/>
<g fill="#fff" opacity=".85"><circle cx="46" cy="73" r="1.2"/><circle cx="56" cy="76" r="1.2"/><circle cx="66" cy="73" r="1.2"/><circle cx="60" cy="81" r="1.1"/><circle cx="74" cy="72.5" r="1.1"/></g>
<path d="M84 70l6-3-2 6z" fill="#e63946"/>
<g class="st s-working" fill="#3dff8a"><circle class="mist" cx="66" cy="19" r="1.8"/><circle class="mist" cx="66" cy="19" r="1.4"/><circle class="mist" cx="66" cy="19" r="1.6"/></g>
<g class="st s-attention" stroke="#9aa3b5" stroke-width="2" stroke-linecap="round"><path d="M30 44l-7-3M30 56h-8M90 44l7-3M90 56h8"/></g>`,
  css: `
.tag{stroke-dasharray:1;stroke-dashoffset:1}
.mist{opacity:0}
[data-s=idle] .squash{animation:breathe 3.2s ease-in-out infinite}
[data-s=working] .tag{animation:tg-draw 2.4s ease-in-out infinite}
[data-s=working] .mist{animation:tg-mist .7s ease-out infinite}
[data-s=working] .mist:nth-child(2){animation-delay:.23s}
[data-s=working] .mist:nth-child(3){animation-delay:.46s}
[data-s=attention] .bob{animation:tg-shake .1s linear infinite alternate}
[data-s=done] .tag{stroke-dashoffset:0}
.root[data-lite] .tag{stroke-dashoffset:0}
@keyframes tg-draw{0%{stroke-dashoffset:1}70%,90%{stroke-dashoffset:0}100%{stroke-dashoffset:-1}}
@keyframes tg-mist{0%{transform:translate(0,0);opacity:0}20%{opacity:1}100%{transform:translate(26px,38px);opacity:0}}
@keyframes tg-shake{from{transform:translateY(-3%)}to{transform:translateY(2%)}}`,
};
