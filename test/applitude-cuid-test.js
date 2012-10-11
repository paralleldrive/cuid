/*global window, applitude, test, ok, cuid, equal, stop, start*/
(function () {
  'use strict';
  var collision = false;

  test('cuid()', function () {
    stop();
    (function () {
      var ids = window.ids = {},
        cuid = applitude.cuid,
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

      ok(typeof cuid() === 'string',
        '.cuid() should return a string');

      ok(!collision,
        '.cuid() should generate unique ids on a single machine');

      start();

    }());
  });
}());
