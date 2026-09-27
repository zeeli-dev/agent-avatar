// The package must import cleanly where there is no DOM (Node, SSR).
import assert from 'node:assert/strict';
import { test } from 'node:test';

test('imports without a DOM', async () => {
  const lib = await import('../src/index.js');
  assert.equal(typeof lib.AgentAvatar, 'function');
  assert.deepEqual(lib.STATES, ['idle', 'working', 'attention', 'done']);
  assert.equal(lib.VARIANTS.length, Object.keys(lib.CHARACTERS).length);
  assert.ok(lib.VARIANTS.length >= 24);
});
