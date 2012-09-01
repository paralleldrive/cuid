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
  var alpha = 'abcdefghijklmnopqrstuvwxyz',
    c = 0,
    globalCount = (function () {
      var i,
        count = 0;
      for (i in window) {
        count++;
      }
      return count;
    }()),

    /**
     * cuid returns a short random string prepended with
     * the current time and a little browser/page fingerprint
     * to prevent collisions from different clients.
     *
     * Sample: t6koe7ta5lf4cuzq4apz
     *
     * Broken down: u - 6koe7ta - 5l-f4 - cuzq - 4apz
     *
     * The first char is a random a-z char to make it HTML
     * ID friendly.
     *
     * The next group is a timestamp.
     *
     * After that is a fingerprint where the first chars
     * are obtained from the user agent string (which
     * is fairly unique), and the supported mimeTypes
     * (which is also fairly unique, except for IE, which
     * always returns 0).
     *
     * The next part of the browser fingerprint is a count of
     * global variables (which varies a lot).
     *
     * The next part is a counter to hammer out the last
     * same-machine collisions (was ~1 in 600,000).
     *
     * The final part is from Math.random().
     **/
    cuid = function cuid() {
      // Starting with a lowercase letter Makes
      // it HTML element ID friendly.
      var letter = alpha.charAt(Math.floor(Math.random()*26)), 

        // timestamp with least useful digit shaved
        timestamp = (new Date().getTime()).toString(36).slice(1),

        // A few chars to generate distinct ids for different
        // browser / page combos (so different computers are far less
        // likely to generate the same id)
        fingerprint = (navigator.mimeTypes.length +
            navigator.userAgent.length).toString(36) +
          globalCount.toString(36),

        // Without this, 1 in 600,000 IDs collide.
        counter,

        // Grab some more chars from browser's .random() method
        random = ("0000" + (Math.random() *
            Math.pow(36, 4) << 0)
            .toString(36)).substr(-4);

        c = (c < 1000000) ? c : 0;
        counter = c.toString(36);

      c++; // this is not subliminal

      return  (letter + timestamp + fingerprint + counter + random);
    };

  window.cuid = cuid;
}());
