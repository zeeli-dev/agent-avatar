// Registry of every character. Order here is the order in docs and VARIANTS.
import mochi from './mochi.js';
import byte from './byte.js';
import orbit from './orbit.js';
import teddy from './teddy.js';
import pip from './pip.js';
import kero from './kero.js';
import boo from './boo.js';
import neko from './neko.js';
import rex from './rex.js';
import boba from './boba.js';
import octo from './octo.js';
import buzz from './buzz.js';
import nimbus from './nimbus.js';
import toasty from './toasty.js';
import quack from './quack.js';
import zorp from './zorp.js';
import turbo from './turbo.js';
import ember from './ember.js';

export const SETS = [
  { id: 'abstract', title: 'Abstract' },
  { id: 'characters', title: 'Characters' },
  { id: 'party', title: 'Party crew' },
  { id: 'wild', title: 'Wild bunch' },
];

export const CHARACTERS = Object.fromEntries([mochi, byte, orbit, teddy, pip, kero, boo, neko, rex, boba, octo, buzz, nimbus, toasty, quack, zorp, turbo, ember].map((c) => [c.name, c]));
export const VARIANTS = Object.keys(CHARACTERS);
