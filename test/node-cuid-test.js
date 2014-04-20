var cuid = require('../dist/node-cuid.js');

var MAX = 1200000;
var collisionTest = function collisionTest(fn) {
  var i = 0,
    id,
    ids = {},
    pass = true;
  while (i < MAX) {
    id = fn();
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

exports.testcuid = function (test) {
 
  test.ok(typeof cuid() === 'string',
    '.cuid() should return a string.');

  test.ok(collisionTest(cuid),
    'ids should not collide.');

  test.ok(collisionTest(cuid.slug),
    'slugs should not collide.');

  test.done();

};
