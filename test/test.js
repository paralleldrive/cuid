/*global test, ok, cuid, equal*/
(function () {
  'use strict';
  var collision = false;

  (function () {
    var ids = {},
      i,
      id;
    for (i = 0; i < 100000; i++) {
      id = cuid();
      if (!ids[id]) {
        ids[id] = id;        
      } else {
        collision = true;
        break;
      }
    }
  }());

  test('Collision test', function () {
    ok(!collision,
      'ids should not collide');
  });
}());
