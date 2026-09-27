import { STATES } from './parts.js';

// Styles shared by every variant: layout, state palette, badges, sparkles,
// shared keyframes, lite mode, offscreen pause and reduced motion.
export const BASE = `
:host{display:inline-block;width:var(--size,96px);aspect-ratio:1;vertical-align:middle;line-height:0;contain:layout style;-webkit-tap-highlight-color:transparent}
.root{position:relative;width:100%;height:100%;transition:--a .5s,--b .5s,--glow .5s}
.bob,.squash,.art{position:absolute;inset:0;width:100%;height:100%}
.art{overflow:visible}
.bob,.squash{transform-origin:50% 87%}
.root[data-s=idle]{--a:#c9bcff;--b:#7c5cff;--glow:#a594ff}
.root[data-s=working]{--a:#a3dcff;--b:#2f7ff6;--glow:#5cc0ff}
.root[data-s=attention]{--a:#ffc494;--b:#f45120;--glow:#ff8f4a}
.root[data-s=done]{--a:#b8f5c8;--b:#2f9e55;--glow:#5fdc8e}
.st{opacity:0;transition:opacity .22s}
${STATES.map((s) => `[data-s=${s}] .s-${s}`).join(',')}{opacity:1}
.blink,.look,.core{transform-box:fill-box;transform-origin:center}

.shadow{position:absolute;left:26.7%;top:87%;width:46.6%;height:7.5%;border-radius:50%;background:radial-gradient(closest-side,rgba(0,0,0,.32),transparent)}
.badge{position:absolute;left:71.7%;top:11.7%;width:16.7%;height:16.7%;border-radius:50%;display:grid;place-items:center;
  background:linear-gradient(var(--a),var(--b));box-shadow:0 1px 3px rgba(0,0,0,.28),inset 0 1px 0 rgba(255,255,255,.4);opacity:0;transform:scale(0)}
.badge svg{width:62%;height:62%}
.b-working{left:66.7%;width:25%;height:13.3%;border-radius:99px;display:flex;justify-content:center;align-items:center;gap:9%}
.b-working i{width:15%;aspect-ratio:1;border-radius:50%;background:#fff}
[data-s=working] .b-working,[data-s=done] .b-done{animation:pop .5s cubic-bezier(.3,1.7,.5,1) both}
[data-s=attention] .b-attention{animation:pop .5s cubic-bezier(.3,1.7,.5,1) both,nudge 1.4s .5s ease-in-out infinite}
[data-s=working] .b-working i{animation:dot 1s ease-in-out infinite}
.b-working i:nth-child(2){animation-delay:.15s}.b-working i:nth-child(3){animation-delay:.3s}
.spk{position:absolute;width:10%;aspect-ratio:1;opacity:0}
.spk svg{display:block;width:100%;height:100%;fill:var(--glow)}
.spk:nth-of-type(1){left:6.7%;top:18.3%}
.spk:nth-of-type(2){left:86.5%;top:71.5%;width:7%;animation-delay:.6s!important}
.spk:nth-of-type(3){left:3.9%;top:40.6%;width:5.5%;animation-delay:1.2s!important}
[data-s=done] .spk{animation:twinkle 1.8s ease-in-out infinite}

[data-s=idle] .blink{animation:blink 4.6s infinite}
[data-s=working] .look{animation:look 2.4s ease-in-out infinite}
[data-s=attention] .bob{animation:wiggle 1.4s ease-in-out infinite}
[data-s=done] .bob{animation:jump 1.8s cubic-bezier(.3,0,.5,1) infinite}
[data-s=done] .shadow{animation:shadow-jump 1.8s cubic-bezier(.3,0,.5,1) infinite}

@keyframes blink{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
@keyframes look{0%,100%{transform:translateX(-2.5px)}45%,55%{transform:translateX(2.5px)}}
@keyframes dot{0%,60%,100%{transform:translateY(0);opacity:.55}30%{transform:translateY(-45%);opacity:1}}
@keyframes pop{0%{transform:scale(.2);opacity:0}100%{transform:scale(1);opacity:1}}
@keyframes nudge{0%,60%,100%{transform:rotate(0)}70%{transform:rotate(-14deg)}80%{transform:rotate(12deg)}90%{transform:rotate(-6deg)}}
@keyframes twinkle{0%,100%{transform:scale(.2) rotate(0);opacity:0}50%{transform:scale(1) rotate(45deg);opacity:1}}
@keyframes float{50%{transform:translateY(-3%)}}
@keyframes shadow-float{50%{transform:scale(.88);opacity:.75}}
@keyframes hop{0%,100%{transform:translateY(0)}50%{transform:translateY(-6%)}}
@keyframes shadow-hop{50%{transform:scale(.78);opacity:.6}}
@keyframes jump{0%,45%,100%{transform:translateY(0)}20%{transform:translateY(-11%)}}
@keyframes shadow-jump{0%,45%,100%{transform:scale(1)}20%{transform:scale(.7);opacity:.5}}
@keyframes wiggle{0%,45%,100%{transform:rotate(0)}8%{transform:rotate(-8deg)}16%{transform:rotate(7deg)}24%{transform:rotate(-5deg)}32%{transform:rotate(3deg)}}
@keyframes breathe{50%{transform:scale(1.035,.965)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes flash{50%{opacity:.25}}
@keyframes pulse{50%{transform:scale(1.14)}}

/* Lite (small sizes): idle is static, other states get one body loop, static badge, no sparkles. */
.root[data-lite] :is(.art *,.squash,.shadow,.badge,.badge *,.spk),.root[data-lite][data-s=idle] .bob{animation:none!important}
${STATES.map((s) => `.root[data-lite][data-s=${s}] .b-${s}`).join(',')}{opacity:1;transform:none}
.root[data-off] *{animation-play-state:paused!important}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.badge{opacity:0}
  ${STATES.map((s) => `[data-s=${s}] .b-${s}`).join(',')}{opacity:1;transform:none}}`;
