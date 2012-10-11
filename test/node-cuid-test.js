/*global require console exports */
var cuid = require('../dist/node-cuid.js');

exports.testcuid = function (test) {
  var collision = false;
  (function () {
    var ids = test.ids = {},
      i,
      id;
    for (i = 0; i < 600000; i++) {
      id = cuid();
      if (!ids[id]) {
        ids[id] = id;        
      } else {
        collision = true;
        break;
      }
    }

    test.ok(typeof cuid() === 'string',
      '.cuid() should return a string');

    test.ok(!collision,
      'ids should not collide');

    test.done();

  }());
};