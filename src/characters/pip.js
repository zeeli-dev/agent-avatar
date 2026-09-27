import { DEFS, face } from '../core/parts.js';

// Tiny penguin clerk. Scribbles on a clipboard while working, flaps for attention.
export default {
  name: 'pip',
  title: 'Pip',
  set: 'characters',
  description: 'Penguin clerk. Scribbles notes on a clipboard, flaps for attention.',
  svg: `
<defs>${DEFS}
  <radialGradient id="p-body" cx="38%" cy="28%" r="85%"><stop offset="0" stop-color="#56628a"/><stop offset=".55" stop-color="#28304a"/><stop offset="1" stop-color="#11152a"/></radialGradient>
  <radialGradient id="p-belly" cx="45%" cy="35%" r="70%"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#e2e8f3"/></radialGradient>
  <linearGradient id="p-orange" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffc05a"/><stop offset="1" stop-color="#f47b20"/></linearGradient>
</defs>
<ellipse cx="48" cy="105" rx="8" ry="3.5" fill="url(#p-orange)"/><ellipse cx="72" cy="105" rx="8" ry="3.5" fill="url(#p-orange)"/>
<g class="flip-l"><ellipse cx="27" cy="76" rx="7" ry="16" transform="rotate(18 27 76)" fill="url(#p-body)"/></g>
<g class="flip-r"><ellipse cx="93" cy="76" rx="7" ry="16" transform="rotate(-18 93 76)" fill="url(#p-body)"/></g>
<path d="M60 22C84 22 96 50 96 76c0 20-16 28-36 28S24 96 24 76C24 50 36 22 60 22Z" fill="url(#p-body)"/>
<path d="M59 23q-3-7 2-10q-1 5 3 9" fill="#28304a"/>
<ellipse cx="46" cy="36" rx="12" ry="6" transform="rotate(-30 46 36)" fill="url(#hl)" opacity=".45"/>
<path d="M60 44c6-8 22-8 24 6 3 16-6 30-24 30S33 66 36 50c2-14 18-14 24-6Z" fill="url(#p-belly)"/>
<ellipse cx="60" cy="88" rx="22" ry="15" fill="url(#p-belly)"/>
${face(56, { dx: 10, rx: 3.8, ry: 5, mouth: false })}
<path d="M54 64.5q6-4 12 0q-6 5.5-12 0Z" fill="url(#p-orange)"/>
<g class="st s-working">
  <rect x="42" y="76" width="36" height="28" rx="3" fill="#b07a45"/>
  <rect x="45" y="80" width="30" height="21" rx="1.5" fill="#fff"/>
  <rect x="53" y="74" width="14" height="5" rx="2" fill="#9aa3b5"/>
  <g stroke="#8a93a6" stroke-width="1.6" stroke-linecap="round">
    <path class="ln" pathLength="1" d="M49 86h20"/><path class="ln" pathLength="1" d="M49 91h15"/><path class="ln" pathLength="1" d="M49 96h18"/>
  </g>
  <g class="pencil">
    <path d="M64 89L74 74" stroke="#ffc43d" stroke-width="4" stroke-linecap="round"/>
    <path d="M64 89l-1.3 2.4" stroke="#3a2c20" stroke-width="2" stroke-linecap="round"/>
    <path d="M73.5 74.8l1.3-2" stroke="#ff8fa3" stroke-width="4" stroke-linecap="round"/>
  </g>
</g>`,
  css: `
.flip-l{transform-origin:32px 64px}
.flip-r{transform-origin:88px 64px}
.ln{stroke-dasharray:1;stroke-dashoffset:1}
[data-s=idle] .bob{animation:p-waddle 2.4s ease-in-out infinite}
[data-s=working] .squash{animation:breathe 1.6s ease-in-out infinite}
[data-s=working] .pencil{animation:p-scribble .7s ease-in-out infinite}
[data-s=working] .ln{animation:p-write 2.4s linear infinite}
[data-s=working] .ln:nth-child(2){animation-delay:.8s}
[data-s=working] .ln:nth-child(3){animation-delay:1.6s}
[data-s=attention] .flip-l{animation:p-flap-l .28s ease-in-out infinite alternate}
[data-s=attention] .flip-r{animation:p-flap-r .28s ease-in-out infinite alternate}
[data-s=done] .flip-l{animation:p-up-l .4s ease-in-out infinite alternate}
[data-s=done] .flip-r{animation:p-up-r .4s ease-in-out infinite alternate}
@keyframes p-waddle{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}
@keyframes p-scribble{0%,100%{transform:translate(0,0)}25%{transform:translate(-6px,1px)}50%{transform:translate(-12px,-1px)}75%{transform:translate(-6px,1px)}}
@keyframes p-write{0%{stroke-dashoffset:1}30%,85%{stroke-dashoffset:0}100%{stroke-dashoffset:1}}
@keyframes p-flap-l{from{transform:rotate(0)}to{transform:rotate(32deg)}}
@keyframes p-flap-r{from{transform:rotate(0)}to{transform:rotate(-32deg)}}
@keyframes p-up-l{from{transform:rotate(80deg)}to{transform:rotate(110deg)}}
@keyframes p-up-r{from{transform:rotate(-80deg)}to{transform:rotate(-110deg)}}`,
};
