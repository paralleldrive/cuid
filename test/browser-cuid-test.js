/*global window, applitude, test, ok, cuid, equal, stop, start*/
(function () {
  'use strict';
  var collision = false;

  test('Collision test', function () {
    stop();
    (function () {
      var ids = window.ids = {},
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
      ok(!collision,
        'ids should not collide');

      start();

    }());
  });
}());
