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

test('cuid.isCuid()', function (t) {
  var id = cuid();
  t.ok(cuid.isCuid(id) === true, 'cuid.isCuid() should return true for a valid cuid.');
  t.ok(cuid.isCuid(null) === false, 'cuid.isCuid() should return false for null.');
  t.ok(cuid.isCuid(undefined) === false, 'cuid.isCuid() should return false for undefined.');
  t.ok(cuid.isCuid('abcdefghijklmnopqrstuvwxy') === false, 'cuid.isCuid() should return false for a random string.');
  t.ok(cuid.isCuid(1) === false, 'cuid.isCuid() should return false for numbers.');
  t.ok(cuid.isCuid(NaN) === false, 'cuid.isCuid() should return false for NaN.');
  t.end();
});

test('cuid.isSlug()', function (t) {
  var slug = cuid.slug();
  t.ok(cuid.isSlug(slug) === true, 'cuid.isSlug() should return true for a valid cuid slug.');
  t.ok(cuid.isSlug(null) === false, 'cuid.isSlug() should return false for null.');
  t.ok(cuid.isSlug(undefined) === false, 'cuid.isSlug() should return false for undefined.');
  t.ok(cuid.isSlug(1) === false, 'cuid.isSlug() should return false for numbers.');
  t.ok(cuid.isSlug(NaN) === false, 'cuid.isSlug() should return false for NaN.');
  t.end();
});

// perform collision test only if we aren't in the browser
test('cuid colissions', { skip: isInBrowser }, function (t) {
  t.ok(collisionTest(cuid),
  'cuids should not collide.');

  t.end();
});
