import { DEFS, face } from '../core/parts.js';

// Rubber duck debugger. Floats on a little pond and listens to your code.
export default {
  name: 'quack',
  title: 'Quack',
  set: 'wild',
  description: 'Rubber duck debugger. Listens to your code while working, squeaks for input.',
  svg: `
<defs>${DEFS}
  <radialGradient id="q-body" cx="38%" cy="28%" r="85%"><stop offset="0" stop-color="#fff6b8"/><stop offset=".5" stop-color="#ffd83a"/><stop offset="1" stop-color="#eda200"/></radialGradient>
  <linearGradient id="q-beak" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb35c"/><stop offset="1" stop-color="#f06b1f"/></linearGradient>
  <linearGradient id="q-water" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9fdcff"/><stop offset="1" stop-color="#4f9ff0" stop-opacity=".7"/></linearGradient>
  <clipPath id="q-clip"><rect x="10" y="0" width="100" height="112" rx="10"/></clipPath>
</defs>
<path d="M86 74q16-18 18-5q2 11-13 17z" fill="url(#q-body)"/>
<ellipse cx="60" cy="82" rx="34" ry="19" fill="url(#q-body)"/>
<g class="wing"><path d="M72 78q15-7 19 6q-8 9-21 2z" fill="#f5b800"/></g>
<ellipse cx="60" cy="46" rx="22" ry="21" fill="url(#q-body)"/>
<ellipse cx="47" cy="34" rx="11" ry="6" transform="rotate(-25 47 34)" fill="url(#hl)"/>
${face(42, { dx: 9, rx: 3.6, ry: 4.6, mouth: false })}
<ellipse cx="60" cy="54" rx="11" ry="5" fill="url(#q-beak)"/>
<path d="M50 54q10 3 20 0" stroke="#c9531a" stroke-width="1.2" fill="none" stroke-linecap="round"/>
<g class="st s-attention" stroke="#f06b1f" stroke-width="2" stroke-linecap="round"><path class="squeak" d="M38 52l-7 1M39 46l-6-4M39 58l-6 4"/></g>
<g clip-path="url(#q-clip)"><path class="water" d="M-16 96q8-4 16 0t16 0 16 0 16 0 16 0 16 0 16 0 16 0 16 0v16H-16Z" fill="url(#q-water)" opacity=".85"/></g>
<g class="st s-working"><g class="bubble">
  <rect x="2" y="10" width="32" height="20" rx="9" fill="#fff"/><path d="M26 28l7 8-1-9z" fill="#fff"/>
  <path d="M13 16l-4 4 4 4M23 16l4 4-4 4M19.5 15l-3 10" stroke="#5b6378" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</g></g>`,
  css: `
.wing{transform-origin:74px 80px}
.water{animation:q-water 1.8s linear infinite}
[data-s=idle] .bob{animation:q-rock 2.6s ease-in-out infinite}
[data-s=working] .bob{animation:q-rock 1.6s ease-in-out infinite}
[data-s=working] .bubble{animation:float 1.6s ease-in-out infinite}
[data-s=attention] .squash{animation:q-squeak .6s ease-in-out infinite}
[data-s=attention] .squeak{animation:flash .3s steps(2) infinite}
[data-s=done] .wing{animation:q-flap .3s ease-in-out infinite alternate}
@keyframes q-water{to{transform:translateX(16px)}}
@keyframes q-rock{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
@keyframes q-squeak{0%,100%{transform:scale(1)}20%{transform:scale(1.08,.9)}40%{transform:scale(.96,1.05)}}
@keyframes q-flap{to{transform:rotate(-24deg)}}`,
};
