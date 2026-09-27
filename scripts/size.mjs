// Reports the gzipped size of everything the package ships and fails over budget.
import { readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { gzipSync } from 'node:zlib';

const BUDGET_KB = 30;
const src = resolve(import.meta.dirname, '../src');
const files = readdirSync(src, { recursive: true }).filter((f) => f.endsWith('.js'));
const all = files.map((f) => readFileSync(join(src, f))).join('\n');
const kb = (n) => (n / 1024).toFixed(1);
const gz = gzipSync(all, { level: 9 }).length;

console.log(`${files.length} files, ${kb(all.length)} kB raw, ${kb(gz)} kB gzip (budget ${BUDGET_KB} kB)`);
if (gz > BUDGET_KB * 1024) {
  console.error('Over the size budget.');
  process.exit(1);
}
