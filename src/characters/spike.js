import { DEFS, INK, face } from '../core/parts.js';

// Spiky outline over the top of the head.
const SPIKES = (() => {
  let d = '';
  const n = 20;
  for (let i = 0; i <= n; i++) {
    const a = Math.PI * (0.88 + (1.24 * i) / n);
    const r = i % 2 ? 44 : 32;
    d += `${i ? 'L' : 'M'}${(60 + r * Math.cos(a)).toFixed(1)} ${(66 + r * Math.sin(a)).toFixed(1)}`;
  }
  return `${d}Z`;
})();

// Punk hedgehog with a mohawk. Shreds a guitar while working, headbangs for attention.
export default {
  name: 'spike',
  title: 'Spike',
  set: 'edgy',
  description: 'Punk hedgehog with a neon mohawk. Shreds a guitar while working, headbangs for input.',
  svg: `
<defs>${DEFS}
  <radialGradient id="sp-body" cx="38%" cy="28%" r="85%"><stop offset="0" stop-color="#c79a7c"/><stop offset=".55" stop-color="#8a5a44"/><stop offset="1" stop-color="#553527"/></radialGradient>
  <radialGradient id="sp-face" cx="45%" cy="35%" r="70%"><stop offset="0" stop-color="#fff1dd"/><stop offset="1" stop-color="#efcfa8"/></radialGradient>
  <linearGradient id="sp-hawk" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ff2e88"/><stop offset="1" stop-color="#ffb13d"/></linearGradient>
</defs>
<path d="${SPIKES}" fill="#4a2e22" stroke="#4a2e22" stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="46" cy="104" rx="8" ry="4" fill="#553527"/><ellipse cx="74" cy="104" rx="8" ry="4" fill="#553527"/>
<circle cx="60" cy="68" r="34" fill="url(#sp-body)"/>
<g class="hawk"><path d="M49 40l1-28 8 16 2-22 4 22 8-16 1 28z" fill="url(#sp-hawk)" stroke="#ff2e88" stroke-width="1.5" stroke-linejoin="round"/></g>
<ellipse cx="60" cy="74" rx="24" ry="22" fill="url(#sp-face)"/>
<ellipse cx="44" cy="46" rx="10" ry="5" transform="rotate(-30 44 46)" fill="url(#hl)" opacity=".5"/>
${face(68, { dx: 10, rx: 3.6, ry: 4.8, m: 80 })}
<path d="M44 62l7 2M76 62l-7 2" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>
<ellipse cx="60" cy="75" rx="3" ry="2.2" fill="${INK}"/>
<circle cx="66" cy="84" r="1.8" fill="none" stroke="#cfd6e2" stroke-width="1.2"/>
<path d="M92 60v8" stroke="#cfd6e2" stroke-width="1.4" stroke-linecap="round"/><circle cx="92" cy="69" r="1.6" fill="none" stroke="#cfd6e2" stroke-width="1.2"/>
<path d="M36 96q24 10 48 0" stroke="#2b2233" stroke-width="4.5" fill="none" stroke-linecap="round"/>
<g fill="#e3e8ef"><circle cx="42" cy="98.5" r="1.4"/><circle cx="51" cy="101" r="1.4"/><circle cx="60" cy="101.6" r="1.4"/><circle cx="69" cy="101" r="1.4"/><circle cx="78" cy="98.5" r="1.4"/></g>
<g class="st s-working">
  <path d="M50 100L104 89" stroke="#3a2c25" stroke-width="4" stroke-linecap="round"/>
  <rect x="101" y="85" width="11" height="7" rx="2" transform="rotate(-12 106.5 88.5)" fill="#2b2233"/>
  <ellipse cx="34" cy="102" rx="11" ry="8.5" fill="#ff3b5c"/><ellipse cx="46" cy="99" rx="8" ry="6.5" fill="#ff3b5c"/>
  <ellipse cx="38" cy="100" rx="5" ry="3.2" fill="#fff" opacity=".85"/>
  <g class="strum"><ellipse cx="44" cy="94" rx="5.5" ry="5" fill="url(#sp-body)"/></g>
  <g class="bolt" fill="#ffe14d"><path d="M16 46l-5 8h4l-3 7 8-9h-4l3-6z"/><path d="M106 40l-4 6h3l-2 6 6-7h-3l2-5z"/></g>
</g>`,
  css: `
.hawk{transform-origin:60px 40px}
.strum{transform-box:fill-box;transform-origin:center}
[data-s=idle] .squash{animation:breathe 3.2s ease-in-out infinite}
[data-s=idle] .hawk{animation:sp-sway 2.4s ease-in-out infinite alternate}
[data-s=working] .bob{animation:sp-rock .5s ease-in-out infinite alternate}
[data-s=working] .strum{animation:sp-strum .18s ease-in-out infinite alternate}
[data-s=working] .bolt{animation:flash .4s steps(2) infinite}
[data-s=attention] .bob{animation:sp-bang .32s ease-in-out infinite alternate}
[data-s=done] .hawk{animation:sp-sway .3s ease-in-out infinite alternate}
@keyframes sp-sway{from{transform:rotate(-5deg)}to{transform:rotate(5deg)}}
@keyframes sp-rock{from{transform:rotate(-3deg)}to{transform:rotate(3deg)}}
@keyframes sp-strum{to{transform:translateY(5px)}}
@keyframes sp-bang{from{transform:rotate(-2deg) translateY(0)}to{transform:rotate(10deg) translateY(4%)}}`,
};
