// Static checks for every character: ids, references, keyframes, state classes, animated elements.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { CHARACTERS, SETS, VARIANTS } from '../src/characters/index.js';
import { BADGES, SPARKS } from '../src/core/parts.js';
import { BASE } from '../src/core/styles.js';

const baseKeyframes = new Set([...BASE.matchAll(/@keyframes ([\w-]+)/g)].map((m) => m[1]));
const stripKeyframes = (css) => css.replace(/@keyframes[^{]+\{(?:[^{}]*\{[^}]*\})*[^{}]*\}/g, '');
// Elements that are always visible, so their loop is intentionally not scoped to a state.
const ALWAYS_ON = new Set(['quack:.water']);

test('registry is consistent', () => {
  assert.deepEqual(VARIANTS, Object.keys(CHARACTERS));
  const setIds = SETS.map((s) => s.id);
  for (const c of Object.values(CHARACTERS)) assert.ok(setIds.includes(c.set), `${c.name}: unknown set ${c.set}`);
});

test('character keyframes do not collide across files', () => {
  const owner = {};
  for (const c of Object.values(CHARACTERS)) {
    for (const [, k] of c.css.matchAll(/@keyframes ([\w-]+)/g)) {
      assert.ok(!baseKeyframes.has(k), `${c.name}: @keyframes ${k} shadows a base keyframe`);
      assert.ok(!owner[k], `@keyframes ${k} defined by ${owner[k]} and ${c.name}`);
      owner[k] = c.name;
    }
  }
});

for (const c of Object.values(CHARACTERS)) {
  test(`${c.name}`, () => {
    for (const key of ['name', 'title', 'set', 'description', 'svg', 'css']) assert.ok(c[key], `missing ${key}`);
    assert.doesNotMatch(c.svg, /NaN|undefined/);

    const ids = [...c.svg.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
    assert.equal(new Set(ids).size, ids.length, 'duplicate ids');
    for (const [, ref] of c.svg.matchAll(/url\(#([^)]+)\)/g))
      assert.ok(ids.includes(ref), `url(#${ref}) is not defined`);

    const own = [...c.css.matchAll(/@keyframes ([\w-]+)/g)].map((m) => m[1]);
    for (const [, value] of c.css.matchAll(/animation:\s*([^;}]+)/g)) {
      for (const part of value.replace(/\([^)]*\)/g, '').split(',')) {
        const name = part.trim().split(/\s+/)[0];
        if (name !== 'none') assert.ok(own.includes(name) || baseKeyframes.has(name), `unknown keyframes ${name}`);
      }
    }

    const markup = c.svg + (c.html ?? '') + BADGES + SPARKS;
    const classes = new Set(['root', 'bob', 'squash', 'shadow', 'art']);
    for (const [, list] of markup.matchAll(/class="([^"]+)"/g)) for (const x of list.split(/\s+/)) classes.add(x);
    const rules = stripKeyframes(c.css);
    for (const [, cls] of rules.matchAll(/\.([a-z][\w-]*)/g))
      assert.ok(classes.has(cls), `.${cls} is not in the markup`);

    for (const [, list] of c.svg.matchAll(/class="([^"]*)"/g)) {
      const isSt = /\bst\b/.test(list);
      const hasState = /\bs-(idle|working|attention|done)\b/.test(list);
      assert.equal(isSt, hasState, `class="${list}" needs both .st and a s-<state> class`);
    }

    for (const [, selector, body] of rules.matchAll(/([^{}]+)\{([^}]*)\}/g)) {
      if (/infinite/.test(body) && !/data-s=/.test(selector)) {
        assert.ok(ALWAYS_ON.has(`${c.name}:${selector.trim()}`), `unscoped infinite animation on ${selector.trim()}`);
      }
      if (!/animation:|transform:/.test(body)) continue;
      // A CSS transform replaces the element's transform attribute, so animated parts need a wrapper <g>.
      for (const sel of selector.split(',')) {
        for (const [, cls] of (sel.trim().split(/\s+/).pop() ?? '').matchAll(/\.([a-z][\w-]*)/g)) {
          for (const [tag] of c.svg.matchAll(new RegExp(`<\\w+[^>]*class="[^"]*\\b${cls}\\b[^"]*"[^>]*>`, 'g'))) {
            assert.doesNotMatch(tag, /\stransform="/, `animated .${cls} has a transform attribute`);
          }
        }
      }
    }
  });
}
