import { DEFS, face } from '../core/parts.js';

// Ghost with a coffee habit. Sips while working, throws its arms up for attention.
export default {
  name: 'boo',
  title: 'Boo',
  set: 'party',
  description: 'Coffee-powered ghost. Sips a steaming mug while working, throws its arms up for input.',
  svg: `
<defs>${DEFS}
  <radialGradient id="bo-body" cx="38%" cy="28%" r="85%"><stop offset="0" stop-color="#fff"/><stop offset=".6" stop-color="#f2eeff"/><stop offset="1" stop-color="#c9bdf0"/></radialGradient>
</defs>
<g class="st s-idle s-working s-done">
  <ellipse cx="25" cy="72" rx="6" ry="8" transform="rotate(20 25 72)" fill="url(#bo-body)"/>
</g>
<g class="st s-idle s-done"><ellipse cx="95" cy="72" rx="6" ry="8" transform="rotate(-20 95 72)" fill="url(#bo-body)"/></g>
<g class="st s-attention">
  <ellipse cx="23" cy="50" rx="6" ry="9" transform="rotate(-30 23 50)" fill="url(#bo-body)"/>
  <ellipse cx="97" cy="50" rx="6" ry="9" transform="rotate(30 97 50)" fill="url(#bo-body)"/>
</g>
<path d="M26 60C26 38 42 24 60 24s34 14 34 36v36q-5.7 8-11.3 0t-11.4 0-11.3 0-11.3 0-11.4 0-11.3 0Z" fill="url(#bo-body)"/>
<ellipse cx="60" cy="82" rx="28" ry="13" fill="url(#ga)" opacity=".75"/>
<ellipse cx="44" cy="38" rx="14" ry="8" transform="rotate(-30 44 38)" fill="url(#hl)"/>
${face(56)}
<g class="st s-working">
  <path class="steam" d="M95 64q-2.5-3 0-6t0-6" stroke="#b9b0d6" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path class="steam" d="M100 64q-2.5-3 0-6t0-6" stroke="#b9b0d6" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  <path d="M104 74h2.5a3.5 3.5 0 0 1 0 7H104" stroke="#ff7a59" stroke-width="2.4" fill="none"/>
  <rect x="90" y="69" width="14" height="16" rx="3.5" fill="#ff7a59"/><rect x="90" y="69" width="14" height="3" rx="1.5" fill="#ffab91"/>
  <ellipse cx="91" cy="80" rx="6" ry="5" fill="url(#bo-body)"/>
</g>`,
  css: `
.steam{transform-box:fill-box;transform-origin:center;opacity:0}
[data-s=idle] .bob{animation:bo-float 3s ease-in-out infinite}
[data-s=idle] .shadow{animation:shadow-float 3s ease-in-out infinite}
[data-s=working] .bob{animation:float 2s ease-in-out infinite}
[data-s=working] .shadow{animation:shadow-float 2s ease-in-out infinite}
[data-s=working] .steam{animation:bo-steam 1.6s ease-out infinite}
[data-s=working] .steam+.steam{animation-delay:.8s}
.root[data-lite] .steam{opacity:.8}
@keyframes bo-float{50%{transform:translateY(-4%) rotate(2deg)}}
@keyframes bo-steam{0%{transform:translateY(4px);opacity:0}30%{opacity:.9}100%{transform:translateY(-8px);opacity:0}}`,
};
