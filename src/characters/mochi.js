import { DEFS, face } from '../core/parts.js';

// Gummy clay drop: soft subsurface glow, glossy highlight, squash & stretch.
export default {
  name: 'mochi',
  title: 'Mochi',
  set: 'abstract',
  description: 'Gummy clay drop. Soft subsurface glow, squash-and-stretch, blushing cheeks.',
  svg: `
<defs>${DEFS}
  <radialGradient id="m-body" cx="36%" cy="28%" r="82%"><stop offset="0" stop-color="#fff"/><stop offset=".28" style="stop-color:var(--a)"/><stop offset="1" style="stop-color:var(--b)"/></radialGradient>
  <radialGradient id="m-shade" cx="42%" cy="36%" r="70%"><stop offset=".62" stop-color="#1a0d33" stop-opacity="0"/><stop offset="1" stop-color="#1a0d33" stop-opacity=".28"/></radialGradient>
  <path id="m-shape" d="M18 80C18 46 37 26 60 26s42 20 42 54c0 19-18 24-42 24S18 99 18 80Z"/>
</defs>
<use href="#m-shape" fill="url(#m-body)"/>
<ellipse cx="60" cy="93" rx="30" ry="10" fill="url(#ga)"/>
<use href="#m-shape" fill="url(#m-shade)"/>
<path d="M30 98q30 10 60 0" stroke="#fff" stroke-opacity=".3" stroke-width="2.4" fill="none" stroke-linecap="round"/>
<ellipse cx="44" cy="43" rx="16" ry="9" transform="rotate(-28 44 43)" fill="url(#hl)"/>
<circle cx="34.5" cy="54" r="2.4" fill="#fff" opacity=".9"/>
${face(70)}`,
  css: `
[data-s=idle] .squash{animation:breathe 3.2s ease-in-out infinite}
[data-s=working] .bob{animation:hop .62s cubic-bezier(.33,0,.67,1) infinite}
[data-s=working] .squash{animation:m-squish .62s ease-in-out infinite}
[data-s=working] .shadow{animation:shadow-hop .62s cubic-bezier(.33,0,.67,1) infinite}
[data-s=done] .squash{animation:m-land 1.8s ease-in-out infinite}
@keyframes m-squish{0%,100%{transform:scale(1.08,.92)}22%{transform:scale(.96,1.05)}50%{transform:scale(.99,1.01)}}
@keyframes m-land{0%,100%{transform:scale(1)}6%{transform:scale(1.12,.88)}14%{transform:scale(.93,1.08)}30%{transform:scale(1)}40%{transform:scale(1.1,.9)}48%{transform:scale(1)}}`,
};
