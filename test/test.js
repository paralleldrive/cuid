var test = require('tape');
var cuid = require('../');

// browser check function adapted from is-in-browser module
var isInBrowser = typeof window === 'object' &&
  typeof document === 'object' &&
  document.nodeType === 9;

var MAX = 1200000;

function collisionTest (fn) {
  var i = 0;
  var ids = {};
  var pass = true;

  while (i < MAX) {
    var id = fn();

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
}

test('cuid()', function (t) {
  t.ok(typeof cuid() === 'string',
    'cuid() should return a string.');

  t.end();
});

test('cuid.slug()', function (t) {
  t.ok(typeof cuid.slug() === 'string',
    'cuid.slug() should return a string.');

  t.ok(collisionTest(cuid.slug),
    'cuid.slug() cuids should not collide.');

  t.end();
});

// perform collision test only if we aren't in the browser
test('cuid colissions', { skip: isInBrowser }, function (t) {
  t.ok(collisionTest(cuid),
  'cuids should not collide.');

  t.end();
});
