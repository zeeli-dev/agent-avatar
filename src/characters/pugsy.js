import { DEFS, face, INK } from '../core/parts.js';

// Pug in a backwards cap and gold chain. Blows bubble gum while working, deal-with-it shades when done.
export default {
  name: 'pugsy',
  title: 'Pugsy',
  set: 'edgy',
  description: 'Pug in a backwards cap and gold chain. Blows bubble gum while working, drops pixel shades when done.',
  svg: `
<defs>${DEFS}
  <radialGradient id="pg-fur" cx="38%" cy="28%" r="85%"><stop offset="0" stop-color="#fbe3bd"/><stop offset=".55" stop-color="#e0ae6f"/><stop offset="1" stop-color="#b07a3e"/></radialGradient>
  <linearGradient id="pg-cap" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff6b85"/><stop offset="1" stop-color="#d91f45"/></linearGradient>
  <radialGradient id="pg-gold" cx="35%" cy="30%" r="75%"><stop offset="0" stop-color="#fff3b0"/><stop offset=".5" stop-color="#ffcc33"/><stop offset="1" stop-color="#c98f00"/></radialGradient>
</defs>
<ellipse cx="60" cy="98" rx="22" ry="9" fill="url(#pg-fur)"/>
<ellipse cx="60" cy="62" rx="32" ry="28" fill="url(#pg-fur)"/>
<ellipse cx="44" cy="46" rx="11" ry="5" transform="rotate(-20 44 46)" fill="url(#hl)" opacity=".5"/>
<ellipse cx="31" cy="50" rx="8" ry="13" transform="rotate(35 31 50)" fill="#3a2c25"/>
<ellipse cx="89" cy="50" rx="8" ry="13" transform="rotate(-35 89 50)" fill="#3a2c25"/>
<path d="M52 49q8-4 16 0" stroke="#b07a3e" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".7"/>
${face(59, { dx: 14, rx: 5, ry: 6, mouth: false })}
<ellipse cx="60" cy="75" rx="15" ry="11" fill="#6b5242"/>
<ellipse cx="60" cy="70" rx="5" ry="3.5" fill="${INK}"/><ellipse cx="58.6" cy="69" rx="1.6" ry=".8" fill="#fff" opacity=".6"/>
<g class="st s-idle s-working"><path d="M54 79q6 4 12 0" stroke="${INK}" stroke-width="1.8" fill="none" stroke-linecap="round"/></g>
<g class="st s-attention"><ellipse cx="60" cy="80" rx="2.6" ry="3" fill="${INK}"/></g>
<g class="st s-done"><path d="M53 78h14q-7 8-14 0Z" fill="${INK}"/><ellipse cx="60" cy="81.5" rx="3" ry="1.5" fill="#ff7b9c"/></g>
<ellipse cx="60" cy="25" rx="18" ry="5" fill="#b51638"/>
<g class="cap">
  <path d="M31 45Q33 17 60 17T89 45Z" fill="url(#pg-cap)"/>
  <path d="M52 45q8-9 16 0Z" fill="url(#pg-fur)"/><path d="M52.5 43h15" stroke="#f4f4f4" stroke-width="1.6"/>
  <ellipse cx="46" cy="26" rx="7" ry="3" transform="rotate(-25 46 26)" fill="#fff" opacity=".45"/>
  <circle cx="60" cy="17.5" r="2" fill="#b51638"/>
</g>
<path d="M38 88q22 12 44 0" stroke="#ffcc33" stroke-width="3" fill="none" stroke-dasharray="3 1.6" stroke-linecap="round"/>
<circle cx="60" cy="96" r="5" fill="url(#pg-gold)"/><circle cx="58.5" cy="94.5" r="1.3" fill="#fff" opacity=".8"/>
<g class="st s-working"><g class="gum"><circle cx="60" cy="87" r="10" fill="#ff8fc7" opacity=".92"/><ellipse cx="56" cy="83" rx="3" ry="2" fill="#fff" opacity=".7"/></g></g>
<g class="st s-done"><g class="deal" fill="${INK}">
  <rect x="36" y="53" width="48" height="4"/><rect x="38" y="57" width="18" height="7"/><rect x="64" y="57" width="18" height="7"/>
  <rect x="40" y="64" width="14" height="2"/><rect x="66" y="64" width="14" height="2"/>
  <rect x="41" y="58" width="3" height="2" fill="#fff"/><rect x="44" y="60" width="3" height="2" fill="#fff"/>
  <rect x="67" y="58" width="3" height="2" fill="#fff"/><rect x="70" y="60" width="3" height="2" fill="#fff"/>
</g></g>`,
  css: `
.gum{transform-box:fill-box;transform-origin:50% 0}
.cap{transform-origin:60px 45px}
[data-s=idle] .bob{animation:pg-nod 1.3s ease-in-out infinite}
[data-s=working] .gum{animation:pg-gum 1.8s ease-in-out infinite}
[data-s=attention] .cap{animation:pg-cap .5s ease-in-out infinite alternate}
[data-s=done] .deal{animation:pg-deal .7s cubic-bezier(.3,1.4,.5,1) both}
@keyframes pg-nod{0%,100%{transform:rotate(0)}50%{transform:rotate(3deg) translateY(1.5%)}}
@keyframes pg-gum{0%{transform:scale(.15);opacity:1}72%{transform:scale(1.1);opacity:1}78%{transform:scale(1.25);opacity:0}100%{transform:scale(.15);opacity:0}}
@keyframes pg-cap{from{transform:rotate(-6deg)}to{transform:rotate(6deg)}}
@keyframes pg-deal{from{transform:translateY(-40px)}to{transform:translateY(0)}}`,
};
