'use strict';

import { cuid, slug } from '../../source/server/index.js';
import test from 'blue-tape';

let MAX = 1200000;

let collisionTest = (fn) => {
  let i = 0;
  let ids = {};
  let pass = true;

  while (i < MAX) {
    let id = fn();

    if (!ids[id]) {
      ids[id] = id;
    } else {
      pass = false;
      console.log('Failed at ' + i + ' iterations.');
      break;
    }

    i++;
  }

  return pass;
};

test('cuid()', (t) => {
  t.plan(3);

  t.ok(typeof cuid() === 'string',
    '.cuid() should return a string.');

  t.ok(collisionTest(cuid),
    'cuids should not collide.');

  t.ok(collisionTest(slug),
    'slugs should not collide.');
});
