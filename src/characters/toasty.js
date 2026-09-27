import { DEFS, face } from '../core/parts.js';

// Retro toaster. Heats up while working, smokes for attention, pops two happy toasts when done.
export default {
  name: 'toasty',
  title: 'Toasty',
  set: 'wild',
  description: 'Retro toaster. Heats up while working, smokes for input, pops two happy toasts when done.',
  svg: `
<defs>${DEFS}
  <linearGradient id="ty-body" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd3c6"/><stop offset=".5" stop-color="#ff9f87"/><stop offset="1" stop-color="#e0705a"/></linearGradient>
  <linearGradient id="ty-chrome" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset=".5" stop-color="#cfd6e2"/><stop offset="1" stop-color="#8d96a9"/></linearGradient>
  <linearGradient id="ty-bread" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe3a8"/><stop offset="1" stop-color="#f0b560"/></linearGradient>
  <radialGradient id="ty-heat"><stop offset="0" stop-color="#ffb347" stop-opacity=".95"/><stop offset="1" stop-color="#ff5a2a" stop-opacity="0"/></radialGradient>
</defs>
<g class="toast">
  <rect x="37" y="36" width="18" height="24" rx="5" fill="url(#ty-bread)" stroke="#c98a3f" stroke-width="2"/>
  <rect x="65" y="36" width="18" height="24" rx="5" fill="url(#ty-bread)" stroke="#c98a3f" stroke-width="2"/>
  <g class="st s-done" stroke="#6b3f1d" stroke-width="1.6" fill="none" stroke-linecap="round">
    <path d="M41 45q2-3 4 0M47 45q2-3 4 0M69 45q2-3 4 0M75 45q2-3 4 0M44 49q2 2 4 0M72 49q2 2 4 0"/>
  </g>
</g>
<g class="st s-attention" fill="#9aa3b5">
  <circle class="smoke" cx="46" cy="44" r="5"/><circle class="smoke" cx="74" cy="42" r="6"/>
</g>
<g class="st s-working" stroke="#ffb07a" stroke-width="2" fill="none" stroke-linecap="round">
  <path class="heat" d="M46 46q-2.5-3 0-6t0-6"/><path class="heat" d="M74 46q-2.5-3 0-6t0-6"/>
</g>
<rect x="30" y="99" width="12" height="6" rx="3" fill="#8d96a9"/><rect x="78" y="99" width="12" height="6" rx="3" fill="#8d96a9"/>
<rect x="96" y="60" width="4" height="24" rx="2" fill="#8d96a9"/>
<rect class="knob" x="95" y="58" width="11" height="7" rx="3.5" fill="url(#ty-chrome)"/>
<rect x="20" y="50" width="80" height="52" rx="16" fill="url(#ty-body)"/>
<rect x="20" y="50" width="80" height="52" rx="16" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="1.2"/>
<rect x="34" y="50" width="22" height="6" rx="3" fill="#3a2a2a"/><rect x="64" y="50" width="22" height="6" rx="3" fill="#3a2a2a"/>
<g class="st s-working"><ellipse cx="45" cy="53" rx="15" ry="6" fill="url(#ty-heat)"/><ellipse cx="75" cy="53" rx="15" ry="6" fill="url(#ty-heat)"/></g>
<ellipse cx="36" cy="62" rx="11" ry="4" fill="url(#hl)" opacity=".8"/>
<circle cx="88" cy="92" r="4" fill="url(#ty-chrome)"/><path d="M88 92l1.8-2" stroke="#6d7690" stroke-width="1.2" stroke-linecap="round"/>
${face(72)}`,
  css: `
.toast{transform:translateY(8px);transition:transform .45s cubic-bezier(.3,1.6,.5,1)}
.knob{transition:transform .3s ease}
.smoke,.heat{transform-box:fill-box;transform-origin:center;opacity:0}
[data-s=idle] .squash{animation:breathe 3.4s ease-in-out infinite}
[data-s=working] .toast{transform:translateY(14px)}
[data-s=working] .knob{transform:translateY(16px)}
[data-s=working] .bob{animation:ty-rattle .14s linear infinite alternate}
[data-s=working] .heat{animation:ty-heat 1.4s ease-out infinite}
[data-s=working] .heat+.heat{animation-delay:.7s}
[data-s=attention] .smoke{animation:ty-smoke 1.4s ease-out infinite}
[data-s=attention] .smoke+.smoke{animation-delay:.7s}
[data-s=done] .toast{transform:translateY(-16px)}
.root[data-lite] :is(.smoke,.heat){opacity:.7}
@keyframes ty-rattle{from{transform:rotate(-1deg)}to{transform:rotate(1deg)}}
@keyframes ty-heat{0%{transform:translateY(4px);opacity:0}30%{opacity:.9}100%{transform:translateY(-8px);opacity:0}}
@keyframes ty-smoke{0%{transform:translateY(4px) scale(.5);opacity:0}30%{opacity:.8}100%{transform:translateY(-22px) scale(1.4);opacity:0}}`,
};
