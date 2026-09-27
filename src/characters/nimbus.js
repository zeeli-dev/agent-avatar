import { DEFS, face } from '../core/parts.js';

const CLOUD = 'M30 84a16 16 0 0 1 2-31a22 22 0 0 1 40-12a18 18 0 0 1 26 18a13 13 0 0 1-2 25Z';

// Weather cloud. Rains while working, turns stormy for attention, paints a rainbow when done.
export default {
  name: 'nimbus',
  title: 'Nimbus',
  set: 'wild',
  description: 'Weather cloud. Rains while working, thunders for input, paints a rainbow when done.',
  svg: `
<defs>${DEFS}
  <radialGradient id="nb-body" cx="40%" cy="25%" r="85%"><stop offset="0" stop-color="#fff"/><stop offset=".6" stop-color="#eef2fb"/><stop offset="1" stop-color="#c3cee8"/></radialGradient>
  <clipPath id="nb-clip"><path d="${CLOUD}"/></clipPath>
</defs>
<g class="st s-done" fill="none" stroke-width="4.2" stroke-linecap="round">
  <path class="bow" pathLength="1" d="M4 100a56 56 0 0 1 112 0" stroke="#ff6b6b"/>
  <path class="bow" pathLength="1" d="M8 100a52 52 0 0 1 104 0" stroke="#ffb84d"/>
  <path class="bow" pathLength="1" d="M12 100a48 48 0 0 1 96 0" stroke="#6bcb77"/>
  <path class="bow" pathLength="1" d="M16 100a44 44 0 0 1 88 0" stroke="#4d96ff"/>
</g>
<g class="st s-working" stroke="#6cb8ff" stroke-width="2.4" stroke-linecap="round">
  <path class="drop" d="M40 88v6"/><path class="drop" d="M52 90v6"/><path class="drop" d="M64 88v6"/><path class="drop" d="M76 90v6"/><path class="drop" d="M86 88v6"/>
</g>
<g class="st s-attention"><path class="bolt" d="M64 84l-9 13h7l-5 12 14-16h-7l5-9z" fill="#ffd23f" stroke="#ffb300" stroke-width="1" stroke-linejoin="round"/></g>
<path d="${CLOUD}" fill="url(#nb-body)"/>
<g clip-path="url(#nb-clip)">
  <ellipse cx="60" cy="88" rx="42" ry="13" fill="url(#ga)" opacity=".6"/>
  <path class="st s-attention" d="${CLOUD}" fill="#4a5470" opacity=".5"/>
  <ellipse cx="50" cy="38" rx="15" ry="7" transform="rotate(-12 50 38)" fill="url(#hl)"/>
</g>
${face(62)}`,
  css: `
.bow{stroke-dasharray:1;stroke-dashoffset:1}
.drop{opacity:0}
[data-s=idle] .bob{animation:nb-drift 4s ease-in-out infinite}
[data-s=idle] .shadow{animation:shadow-float 4s ease-in-out infinite}
[data-s=working] .bob{animation:float 2s ease-in-out infinite}
[data-s=working] .drop{animation:nb-rain .8s linear infinite}
[data-s=working] .drop:nth-child(2){animation-delay:.32s}
[data-s=working] .drop:nth-child(3){animation-delay:.16s}
[data-s=working] .drop:nth-child(4){animation-delay:.48s}
[data-s=working] .drop:nth-child(5){animation-delay:.64s}
[data-s=attention] .bolt{animation:flash .5s steps(2) infinite}
[data-s=done] .bow{animation:nb-bow .9s ease-out both}
[data-s=done] .bow:nth-child(2){animation-delay:.1s}
[data-s=done] .bow:nth-child(3){animation-delay:.2s}
[data-s=done] .bow:nth-child(4){animation-delay:.3s}
.root[data-lite] .drop{opacity:1}
.root[data-lite] .bow{stroke-dashoffset:0}
@media (prefers-reduced-motion:reduce){.bow{stroke-dashoffset:0}.drop{opacity:1}}
@keyframes nb-drift{50%{transform:translate(2%,-3%)}}
@keyframes nb-rain{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(14px);opacity:0}}
@keyframes nb-bow{to{stroke-dashoffset:0}}`,
};
