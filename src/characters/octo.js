import { DEFS, face } from '../core/parts.js';

// Octopus multitasker. Juggles tasks while working, flails for attention.
export default {
  name: 'octo',
  title: 'Octo',
  set: 'party',
  description: 'Octopus multitasker. Juggles tasks while working, flails its tentacles for input.',
  svg: `
<defs>${DEFS}
  <radialGradient id="oc-skin" cx="38%" cy="28%" r="85%"><stop offset="0" stop-color="#ffd0ea"/><stop offset=".5" stop-color="#ff72b6"/><stop offset="1" stop-color="#c02f7a"/></radialGradient>
</defs>
<g class="st s-working">
  <g class="juggle">
    <circle cx="71" cy="13" r="4" fill="#ffd23f"/><circle cx="54.5" cy="22.5" r="4" fill="#4ecdc4"/><circle cx="54.5" cy="3.5" r="4" fill="#7c5cff"/>
  </g>
</g>
<g stroke="#ff5fa8" stroke-width="8.5" fill="none" stroke-linecap="round">
  <path class="tt" d="M33 72q-4 16-12 20q-5 2-4-3"/><path class="tt" d="M44 78q-2 16-8 22q-4 3-5-1"/>
  <path class="tt" d="M55 80q0 14-4 22"/><path class="tt" d="M65 80q0 14 4 22"/>
  <path class="tt" d="M76 78q2 16 8 22q4 3 5-1"/><path class="tt" d="M87 72q4 16 12 20q5 2 4-3"/>
</g>
<path d="M24 60C24 36 40 22 60 22s36 14 36 38c0 16-12 24-36 24S24 76 24 60Z" fill="url(#oc-skin)"/>
<circle cx="80" cy="38" r="4" fill="#ffe0f0" opacity=".6"/><circle cx="87" cy="50" r="2.5" fill="#ffe0f0" opacity=".6"/><circle cx="76" cy="30" r="1.8" fill="#ffe0f0" opacity=".6"/>
<ellipse cx="44" cy="36" rx="13" ry="7" transform="rotate(-30 44 36)" fill="url(#hl)" opacity=".8"/>
${face(56)}`,
  css: `
.tt{transform-box:fill-box;transform-origin:50% 0}
.juggle{transform-origin:60px 13px}
.root .tt:nth-child(even){animation-direction:alternate-reverse}
[data-s=idle] .tt{animation:oc-wave 1.6s ease-in-out infinite alternate}
[data-s=idle] .squash{animation:breathe 3.2s ease-in-out infinite}
[data-s=working] .tt{animation:oc-wave .4s ease-in-out infinite alternate}
[data-s=working] .juggle{animation:spin 1.1s linear infinite}
[data-s=working] .bob{animation:float 1.1s ease-in-out infinite}
[data-s=attention] .tt{animation:oc-flail .22s ease-in-out infinite alternate}
[data-s=done] .tt{animation:oc-wave .7s ease-in-out infinite alternate}
@keyframes oc-wave{from{transform:rotate(-9deg)}to{transform:rotate(9deg)}}
@keyframes oc-flail{from{transform:rotate(-18deg)}to{transform:rotate(18deg)}}`,
};
