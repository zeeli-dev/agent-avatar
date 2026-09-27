// Registry of every character. Order here is the order in docs and VARIANTS.

import boba from './boba.js';
import boo from './boo.js';
import buzz from './buzz.js';
import byte from './byte.js';
import chomp from './chomp.js';
import ember from './ember.js';
import glitch from './glitch.js';
import kero from './kero.js';
import mochi from './mochi.js';
import neko from './neko.js';
import nimbus from './nimbus.js';
import octo from './octo.js';
import orbit from './orbit.js';
import pip from './pip.js';
import pugsy from './pugsy.js';
import quack from './quack.js';
import rex from './rex.js';
import smokey from './smokey.js';
import spike from './spike.js';
import tagz from './tagz.js';
import teddy from './teddy.js';
import toasty from './toasty.js';
import turbo from './turbo.js';
import zorp from './zorp.js';

export const SETS = [
  { id: 'abstract', title: 'Abstract' },
  { id: 'characters', title: 'Characters' },
  { id: 'party', title: 'Party crew' },
  { id: 'wild', title: 'Wild bunch' },
  { id: 'edgy', title: 'Edgy crew' },
];

export const CHARACTERS = Object.fromEntries(
  [
    mochi,
    byte,
    orbit,
    teddy,
    pip,
    kero,
    boo,
    neko,
    rex,
    boba,
    octo,
    buzz,
    nimbus,
    toasty,
    quack,
    zorp,
    turbo,
    ember,
    smokey,
    pugsy,
    spike,
    glitch,
    tagz,
    chomp,
  ].map((c) => [c.name, c]),
);
export const VARIANTS = Object.keys(CHARACTERS);
