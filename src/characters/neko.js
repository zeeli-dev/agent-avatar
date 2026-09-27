import { DEFS, face } from '../core/parts.js';

// Orange tabby. Headphones on and head-bopping while working, ears perk for attention.
export default {
  name: 'neko',
  title: 'Neko',
  set: 'party',
  description: 'Tabby cat. Headphones on and head-bopping while working, ears perk up for input.',
  svg: `
<defs>${DEFS}
  <radialGradient id="n-fur" cx="38%" cy="30%" r="80%"><stop offset="0" stop-color="#ffe2b8"/><stop offset=".55" stop-color="#f7a65f"/><stop offset="1" stop-color="#d4742d"/></radialGradient>
  <radialGradient id="n-light" cx="50%" cy="35%" r="70%"><stop offset="0" stop-color="#fffaf2"/><stop offset="1" stop-color="#ffe3c4"/></radialGradient>
</defs>
<path class="tail" d="M76 100q26 0 22-26" stroke="#e98b40" stroke-width="7" fill="none" stroke-linecap="round"/>
<ellipse cx="60" cy="94" rx="21" ry="11" fill="url(#n-fur)"/>
<ellipse cx="50" cy="103" rx="6" ry="4" fill="url(#n-light)"/><ellipse cx="70" cy="103" rx="6" ry="4" fill="url(#n-light)"/>
<g class="ear-l"><path d="M28 52Q28 18 36 19Q46 24 56 38Z" fill="url(#n-fur)"/><path d="M34 44Q34 27 38 27Q44 30 48 38Z" fill="#ffb3c7"/></g>
<g class="ear-r"><path d="M92 52Q92 18 84 19Q74 24 64 38Z" fill="url(#n-fur)"/><path d="M86 44Q86 27 82 27Q76 30 72 38Z" fill="#ffb3c7"/></g>
<ellipse cx="60" cy="62" rx="34" ry="27" fill="url(#n-fur)"/>
<path d="M60 36v7M51 37l2 6M69 37l-2 6" stroke="#d9782f" stroke-width="2.5" stroke-linecap="round"/>
<ellipse cx="44" cy="44" rx="12" ry="6" transform="rotate(-20 44 44)" fill="url(#hl)" opacity=".6"/>
<ellipse cx="60" cy="72" rx="15" ry="9" fill="url(#n-light)" opacity=".8"/>
<path d="M28 66l-11-2M28 71l-11 1M92 66l11-2M92 71l11 1" stroke="#a8622a" stroke-width="1.3" stroke-linecap="round" opacity=".55"/>
${face(61, { dx: 14, m: 73 })}
<path d="M57.5 67h5l-2.5 3z" fill="#ff7b9c" stroke="#ff7b9c" stroke-width="1" stroke-linejoin="round"/>
<g class="st s-working">
  <path d="M24 58Q24 27 60 27Q96 27 96 58" stroke="#2b2233" stroke-width="5" fill="none" stroke-linecap="round"/>
  <rect x="16" y="50" width="13" height="21" rx="6" fill="#ff5fa2"/><rect x="18" y="53" width="3" height="12" rx="1.5" fill="#fff" opacity=".45"/>
  <rect x="91" y="50" width="13" height="21" rx="6" fill="#ff5fa2"/><rect x="93" y="53" width="3" height="12" rx="1.5" fill="#fff" opacity=".45"/>
  <g transform="translate(106 38)"><g class="note"><ellipse rx="3" ry="2.3" transform="rotate(-20)" fill="#ff5fa2"/><path d="M2.6-1V-11l5 2" stroke="#ff5fa2" stroke-width="1.8" fill="none" stroke-linecap="round"/></g></g>
  <g transform="translate(12 36)"><g class="note"><ellipse rx="3" ry="2.3" transform="rotate(-20)" style="fill:var(--glow)"/><path d="M2.6-1V-11l5 2" style="stroke:var(--glow)" stroke-width="1.8" fill="none" stroke-linecap="round"/></g></g>
</g>`,
  css: `
.tail{transform-origin:76px 100px}
.ear-l{transform-origin:40px 44px}.ear-r{transform-origin:80px 44px}
.note{transform-box:fill-box;transform-origin:center;opacity:0}
[data-s=idle] .squash{animation:breathe 3.4s ease-in-out infinite}
[data-s=idle] .tail{animation:n-tail 2.4s ease-in-out infinite alternate}
[data-s=working] .bob{animation:n-bop .45s ease-in-out infinite alternate}
[data-s=working] .tail{animation:n-tail .9s ease-in-out infinite alternate}
[data-s=working] .note{animation:n-note 1.8s ease-out infinite}
[data-s=working] g+g>.note{animation-delay:.9s}
[data-s=attention] .ear-l{animation:n-perk-l .3s ease-in-out infinite alternate}
[data-s=attention] .ear-r{animation:n-perk-r .3s ease-in-out infinite alternate}
[data-s=done] .tail{animation:n-tail .5s ease-in-out infinite alternate}
.root[data-lite] .note{opacity:1}
@keyframes n-tail{from{transform:rotate(-8deg)}to{transform:rotate(12deg)}}
@keyframes n-bop{from{transform:rotate(-3deg)}to{transform:rotate(3deg) translateY(-1.5%)}}
@keyframes n-note{0%{transform:translate(0,4px);opacity:0}25%{opacity:1}100%{transform:translate(5px,-14px) rotate(15deg);opacity:0}}
@keyframes n-perk-l{to{transform:rotate(-12deg) scale(1.08)}}
@keyframes n-perk-r{to{transform:rotate(12deg) scale(1.08)}}`,
};
