var assert = require('assert');

var cuid = require('../..');

function ok (expression, message) {
    try {
        assert.ok(expression, message);

        self.postMessage({
            error: false,
            message: message
        });
    } catch (error) {
        self.postMessage({
            error: true,
            message: error.message
        });
    }
}

function run () {
    // cuid()
    ok(typeof cuid() === 'string', 'cuid() should return a string.');

    // cuid.slug()
    ok(typeof cuid.slug() === 'string', 'cuid.slug() should return a string.');

    // cuid.isCuid()
    var id = cuid();
    ok(cuid.isCuid(id) === true, 'cuid.isCuid() should return true for a valid cuid.');
    ok(cuid.isCuid(null) === false, 'cuid.isCuid() should return false for null.');
    ok(cuid.isCuid(undefined) === false, 'cuid.isCuid() should return false for undefined.');
    ok(cuid.isCuid('abcdefghijklmnopqrstuvwxy') === false, 'cuid.isCuid() should return false for a random string.');
    ok(cuid.isCuid(1) === false, 'cuid.isCuid() should return false for numbers.');
    ok(cuid.isCuid(NaN) === false, 'cuid.isCuid() should return false for NaN.');

    // cuid.isSlug()
    var slug = cuid.slug();
    ok(cuid.isSlug(slug) === true, 'cuid.isSlug() should return true for a valid cuid slug.');
    ok(cuid.isSlug(null) === false, 'cuid.isSlug() should return false for null.');
    ok(cuid.isSlug(undefined) === false, 'cuid.isSlug() should return false for undefined.');
    ok(cuid.isSlug(1) === false, 'cuid.isSlug() should return false for numbers.');
    ok(cuid.isSlug(NaN) === false, 'cuid.isSlug() should return false for NaN.');
}

self.onmessage = run;
