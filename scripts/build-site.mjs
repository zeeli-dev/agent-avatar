// Assembles the docs site into dist/: docs/ at the root, the library under /src/.
// docs/app.js imports '../src/index.js', which resolves to /src/ at the site root too.
import { cpSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
rmSync(dist, { recursive: true, force: true });
// README media (GIFs, set strips) only serve GitHub and npm; the site ships the social preview alone.
const readmeOnly = (f) => /[\\/]assets[\\/](?!social-preview\.png$)[^\\/]+$/.test(f);
cpSync(resolve(root, 'docs'), dist, { recursive: true, filter: (f) => !readmeOnly(f) });
cpSync(resolve(root, 'src'), resolve(dist, 'src'), { recursive: true, filter: (f) => !f.endsWith('.d.ts') });
console.log('built dist/');
