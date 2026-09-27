// Renders the README and social images into docs/assets/.
// Animations are paused and stepped frame by frame, so every export is deterministic.
// Usage: node scripts/media.mjs   (needs ffmpeg and `pnpm exec playwright install chromium`)
import { execFileSync, spawn } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { chromium } from '@playwright/test';

const root = resolve(import.meta.dirname, '..');
const out = (name) => resolve(root, 'docs/assets', name);
mkdirSync(resolve(root, 'docs/assets'), { recursive: true });
const server = spawn(process.execPath, ['scripts/serve.mjs', '4181'], { cwd: root, stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 400));
const browser = await chromium.launch();

const BG = 'radial-gradient(120% 100% at 50% 0%,#1d2027 0%,#0b0c0e 72%)';
const FONT = '-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif';
const LABEL = { idle: 'Idle', working: 'Working', attention: 'Needs input', done: 'Done' };

async function scene(width, height, html, scale = 1) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: scale });
  await page.goto('http://localhost:4181/tests/browser/blank.html');
  await page.evaluate(
    async ({ html, BG, FONT }) => {
      await import('/src/index.js');
      document.body.style.cssText = `margin:0;width:100vw;height:100vh;overflow:hidden;background:${BG};color:#f0f2f4;font-family:${FONT}`;
      document.body.innerHTML = html;
      await new Promise((r) => setTimeout(r, 300));
    },
    { html, BG, FONT },
  );
  return page;
}

// Pause every animation at time t (ms). Badges pop in during the first 500ms, so start after that.
const seek = (page, t) =>
  page.evaluate((t) => {
    for (const a of document.querySelectorAll('agent-avatar')) {
      for (const an of a.shadowRoot.getAnimations()) {
        an.pause();
        an.currentTime = t;
      }
    }
  }, t);

async function still(page, file, t = 900) {
  await seek(page, t);
  await page.screenshot({ path: out(file) });
  await page.close();
}

async function animated(page, file, { seconds = 4, fps = 20, width = 960 } = {}) {
  const dir = mkdtempSync(join(tmpdir(), 'avatars-'));
  const frames = seconds * fps;
  for (let i = 0; i < frames; i++) {
    await seek(page, 600 + (i * 1000) / fps);
    await page.screenshot({ path: join(dir, `${String(i).padStart(4, '0')}.png`) });
  }
  await page.close();
  // Two-pass GIF: a palette tuned to the frames, then dithering, so gradients stay smooth.
  const scale = `fps=${fps},scale=${width}:-1:flags=lanczos`;
  execFileSync('ffmpeg', [
    '-y',
    '-loglevel',
    'error',
    '-framerate',
    String(fps),
    '-i',
    join(dir, '%04d.png'),
    '-vf',
    `${scale},split[a][b];[a]palettegen=max_colors=256:stats_mode=full[p];[b][p]paletteuse=dither=sierra2_4a`,
    '-loop',
    '0',
    out(file),
  ]);
  rmSync(dir, { recursive: true, force: true });
}

const { VARIANTS, SETS, CHARACTERS, STATES } = await import(`${root}/src/index.js`);
const tag = (v, s, size) => `<agent-avatar variant="${v}" state="${s}" size="${size}"></agent-avatar>`;
const grid = (cols, gap, items) =>
  `<div style="display:grid;grid-template-columns:repeat(${cols},auto);gap:${gap};justify-content:center">${items}</div>`;
const center = (inner) => `<div style="height:100%;display:grid;place-items:center">${inner}</div>`;

// Hero: all characters, states spread across the grid.
await animated(
  await scene(
    1280,
    560,
    center(grid(8, '10px 26px', VARIANTS.map((v, i) => tag(v, STATES[(i + Math.floor(i / 8)) % 4], 124)).join(''))),
  ),
  'hero.gif',
);

// States: four characters across the four states, with labels.
const pick = ['mochi', 'teddy', 'rex', 'glitch'];
const header = STATES.map(
  (s) => `<div style="text-align:center;font-size:15px;font-weight:600;color:#94999f">${LABEL[s]}</div>`,
).join('');
const rows = pick
  .map((v) => STATES.map((s) => `<div style="display:grid;place-items:center">${tag(v, s, 118)}</div>`).join(''))
  .join('');
await animated(
  await scene(
    1280,
    600,
    center(`<div style="display:grid;grid-template-columns:repeat(4,200px);gap:4px 60px">${header}${rows}</div>`),
  ),
  'states.gif',
);

// One strip per set, every character working. Still images at 2x keep the README light but sharp.
for (const set of SETS) {
  const members = VARIANTS.filter((v) => CHARACTERS[v].set === set.id);
  const cells = members
    .map(
      (v) => `<figure style="margin:0;display:grid;justify-items:center;gap:2px">${tag(v, 'working', 120)}
      <figcaption style="font-size:14px;color:#94999f"><b style="color:#f0f2f4">${CHARACTERS[v].title}</b> · <code style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace">${v}</code></figcaption></figure>`,
    )
    .join('');
  await still(await scene(1280, 220, center(grid(members.length, '0 34px', cells)), 2), `set-${set.id}.png`, 900);
}

// Social preview (GitHub repo card, Open Graph): 1280x640, under 1 MB.
const featured = ['mochi', 'byte', 'teddy', 'neko', 'rex', 'boba', 'octo', 'quack', 'zorp', 'ember', 'pugsy', 'chomp'];
await still(
  await scene(
    1280,
    640,
    `<div style="height:100%;display:grid;align-content:center;justify-items:center;gap:26px">
      <div style="text-align:center">
        <div style="font-size:64px;font-weight:700;letter-spacing:-.03em">Zeeli Avatars</div>
        <div style="font-size:26px;color:#94999f;margin-top:6px">Cute animated avatars for AI agents</div>
      </div>
      ${grid(6, '0 30px', featured.map((v, i) => tag(v, STATES[i % 4], 128)).join(''))}
      <div style="font:500 20px ui-monospace,SFMono-Regular,Menlo,monospace;color:#f45120">avatars.zeeli.dev</div>
    </div>`,
  ),
  'social-preview.png',
);

await browser.close();
server.kill();
console.log('wrote docs/assets: hero.gif, states.gif, set-*.png, social-preview.png');
