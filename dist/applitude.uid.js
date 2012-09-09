(function () {
  'use strict';

/**
 * cuid.js
 * Collision-resistant client-side UID generator safe
 * for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 * 
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

/*global window, navigator, document */
(function () {
  'use strict';
  var c = 0,
    globalCount = (function () {
      var i,
        count = 0;
      for (i in window) {
        count++;
      }
      return count;
    }()),

    pad = function pad(num, size) {
      var s = "000000000" + num;
      return s.substr(s.length-size);
    },

    cuid = function cuid() {
      // Starting with a lowercase letter Makes
      // it HTML element ID friendly.
      var letter = 'c', // fixed = allows for sequential access

        // timestamp
        // warning: this exposes the exact date and time
        // that the uid was created.
        timestamp = (new Date().getTime()).toString(36),

        // Without this, 1 in 600,000 IDs collide.
        counter,

        // A few chars to generate distinct ids for different
        // browser / page combos (so different computers are far less
        // likely to generate the same id)
        fingerprint = pad((navigator.mimeTypes.length +
            navigator.userAgent.length).toString(36) +
          globalCount.toString(36), 4),

        // Grab some more chars from browser's .random() method
        random = pad((Math.random() *
            Math.pow(36, 4) << 0)
            .toString(36), 4);

        c = (c < 1679615) ? c : 0;
        counter = pad(c.toString(36), 4);

      c++; // this is not subliminal

      return  (letter + timestamp + counter + fingerprint + random);
    };

  window.cuid = cuid;
}());

  (function (app) {
    var namespace = 'uid';
    app.register(namespace, cuid);
  }(applitude));

}());
