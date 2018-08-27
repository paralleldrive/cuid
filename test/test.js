var cuid = require('../');

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

var defaultOptions = { isInBrowser: false };

function run (test, options) {
  var opt = Object.assign({}, defaultOptions, options);

  test('cuid()', async t => {
    await t.ok(typeof cuid() === 'string',
      'cuid() should return a string.');

    await t.end();
  });

  test('cuid.slug()', async t => {
    await t.ok(typeof cuid.slug() === 'string',
      'cuid.slug() should return a string.');

    await t.ok(collisionTest(cuid.slug),
      'cuid.slug() cuids should not collide.');

    await t.end();
  });

  test('cuid.isCuid()', async t => {
    var id = cuid();
    await t.ok(cuid.isCuid(id) === true, 'cuid.isCuid() should return true for a valid cuid.');
    await t.ok(cuid.isCuid(null) === false, 'cuid.isCuid() should return false for null.');
    await t.ok(cuid.isCuid(undefined) === false, 'cuid.isCuid() should return false for undefined.');
    await t.ok(cuid.isCuid('abcdefghijklmnopqrstuvwxy') === false, 'cuid.isCuid() should return false for a random string.');
    await t.ok(cuid.isCuid(1) === false, 'cuid.isCuid() should return false for numbers.');
    await t.ok(cuid.isCuid(NaN) === false, 'cuid.isCuid() should return false for NaN.');
    await t.end();
  });

  test('cuid.isSlug()', async t => {
    var slug = cuid.slug();
    await t.ok(cuid.isSlug(slug) === true, 'cuid.isSlug() should return true for a valid cuid slug.');
    await t.ok(cuid.isSlug(null) === false, 'cuid.isSlug() should return false for null.');
    await t.ok(cuid.isSlug(undefined) === false, 'cuid.isSlug() should return false for undefined.');
    await t.ok(cuid.isSlug(1) === false, 'cuid.isSlug() should return false for numbers.');
    await t.ok(cuid.isSlug(NaN) === false, 'cuid.isSlug() should return false for NaN.');
    await t.end();
  });

  // perform collision test only if we aren't in the browser
  test('cuid colissions', { skip: opt.isInBrowser }, async t => {
    await t.ok(collisionTest(cuid),
    'cuids should not collide.');

    await t.end();
  });
}

module.exports = {
  run: run
};
