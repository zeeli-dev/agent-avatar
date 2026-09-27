import { DEFS, face } from '../core/parts.js';

// Baby dragon. Toasts a marshmallow with tiny fire breath while working.
export default {
  name: 'ember',
  title: 'Ember',
  set: 'wild',
  description: 'Baby dragon. Toasts a marshmallow with tiny fire breath while working, puffs smoke for input.',
  svg: `
<defs>${DEFS}
  <radialGradient id="em-skin" cx="38%" cy="28%" r="85%"><stop offset="0" stop-color="#ffcbb3"/><stop offset=".5" stop-color="#ff7a59"/><stop offset="1" stop-color="#cf412a"/></radialGradient>
  <radialGradient id="em-belly" cx="50%" cy="35%" r="70%"><stop offset="0" stop-color="#fff6de"/><stop offset="1" stop-color="#ffd98a"/></radialGradient>
  <radialGradient id="em-fire" cx="35%" cy="50%" r="65%"><stop offset="0" stop-color="#fff3a0"/><stop offset=".5" stop-color="#ffb13b"/><stop offset="1" stop-color="#ff5a2a" stop-opacity="0"/></radialGradient>
</defs>
<path d="M36 98q-22 2-21-14" stroke="#e8573c" stroke-width="6" fill="none" stroke-linecap="round"/>
<path d="M15 88l-6-9 11 2z" fill="#ff9f7a"/>
<g class="wing-l"><path d="M32 62q-22-10-26 8q8-5 12 1q6-6 14 1z" fill="#c9416e"/></g>
<g class="wing-r"><path d="M88 62q22-10 26 8q-8-5-12 1q-6-6-14 1z" fill="#c9416e"/></g>
<path d="M45 38q-6-10 0-17q1 9 7 13zM75 38q6-10 0-17q-1 9-7 13z" fill="#ffe0b2"/>
<ellipse cx="46" cy="104" rx="9" ry="4.5" fill="#cf412a"/><ellipse cx="74" cy="104" rx="9" ry="4.5" fill="#cf412a"/>
<path d="M26 80C26 50 42 32 60 32s34 18 34 48c0 16-14 24-34 24S26 96 26 80Z" fill="url(#em-skin)"/>
<ellipse cx="60" cy="89" rx="18" ry="13" fill="url(#em-belly)"/>
<path d="M52 85h16M53 91h14" stroke="#f0c060" stroke-width="1.5" stroke-linecap="round"/>
<ellipse cx="45" cy="45" rx="13" ry="7" transform="rotate(-30 45 45)" fill="url(#hl)" opacity=".7"/>
${face(62)}
<ellipse cx="34" cy="82" rx="5" ry="7" transform="rotate(30 34 82)" fill="url(#em-skin)"/>
<g class="st s-idle s-attention s-done"><ellipse cx="86" cy="82" rx="5" ry="7" transform="rotate(-30 86 82)" fill="url(#em-skin)"/></g>
<g class="st s-attention" fill="#9aa3b5"><circle class="smoke" cx="56" cy="56" r="3.5"/><circle class="smoke" cx="64" cy="56" r="3.5"/></g>
<g class="st s-working">
  <path d="M88 86L109 66" stroke="#9a6534" stroke-width="2.4" stroke-linecap="round"/>
  <rect x="104" y="57" width="12" height="11" rx="3.8" fill="#fff8ee"/>
  <rect class="toasted" x="104" y="57" width="12" height="11" rx="3.8" fill="#d98b3a"/>
  <ellipse cx="89" cy="85" rx="5.5" ry="5" fill="url(#em-skin)"/>
  <ellipse class="puff" cx="72" cy="71" rx="7" ry="4.5" fill="url(#em-fire)"/>
  <ellipse class="puff" cx="72" cy="71" rx="7" ry="4.5" fill="url(#em-fire)"/>
</g>`,
  css: `
.wing-l{transform-origin:32px 64px}.wing-r{transform-origin:88px 64px}
.puff,.smoke{transform-box:fill-box;transform-origin:center;opacity:0}
.toasted{opacity:0}
[data-s=idle] .squash{animation:breathe 3.2s ease-in-out infinite}
[data-s=idle] .wing-l{animation:em-flap-l 1.6s ease-in-out infinite alternate}
[data-s=idle] .wing-r{animation:em-flap-r 1.6s ease-in-out infinite alternate}
[data-s=working] .puff{animation:em-puff .9s ease-out infinite}
[data-s=working] .puff+.puff{animation-delay:.45s}
[data-s=working] .toasted{animation:em-toast 3s ease-in infinite}
[data-s=attention] .smoke{animation:em-smoke 1.2s ease-out infinite}
[data-s=attention] .smoke+.smoke{animation-delay:.3s}
[data-s=attention] .wing-l{animation:em-flap-l .2s ease-in-out infinite alternate}
[data-s=attention] .wing-r{animation:em-flap-r .2s ease-in-out infinite alternate}
[data-s=done] .wing-l{animation:em-flap-l .35s ease-in-out infinite alternate}
[data-s=done] .wing-r{animation:em-flap-r .35s ease-in-out infinite alternate}
.root[data-lite] .puff{opacity:.9}
.root[data-lite] .smoke{opacity:.7}
@keyframes em-flap-l{to{transform:rotate(-16deg)}}
@keyframes em-flap-r{to{transform:rotate(16deg)}}
@keyframes em-puff{0%{transform:translate(0,0) scale(.5);opacity:0}25%{opacity:1}100%{transform:translate(26px,-6px) scale(1.6);opacity:0}}
@keyframes em-toast{0%{opacity:0}80%,100%{opacity:.8}}
@keyframes em-smoke{0%{transform:translateY(0) scale(.6);opacity:0}30%{opacity:.8}100%{transform:translateY(-16px) scale(1.5);opacity:0}}`,
};
