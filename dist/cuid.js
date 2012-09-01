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

/*global window, navigator */
(function () {
  'use strict';
  var globalCount = (function () {
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
     * Sample: wz5347t5lh1ttmg
     * Broken down: w - z5347t - 5lh1 - ttmg
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
     * The final bit of browser fingerprint is a count of
     * global variables (which varies a lot).
     *
     * The rest of the ID is just a random number.
     **/
    cuid = function cuid() {
      // Starting with a lowercase letter Makes
      // it HTML element ID friendly.
      var letter = 'abcdefghijklmnopqrstuvwxyz'
          .charAt(Math.floor(Math.random()*26)), 

        // << 0 shaves least useful digits from timestamp
        timestamp = (new Date().getTime() << 0).toString(36),

        // A few chars to generate distinct ids for different
        // browser / page combos (so different computers are far less
        // likely to generate the same id)
        fingerprint = (navigator.mimeTypes.length +
            navigator.userAgent.length).toString(36) +
          globalCount.toString(36),

        // Grab some more chars from browser's .random() method
        random = ("0000" + (Math.random() *
            Math.pow(36, 4) << 0)
            .toString(36)).substr(-4);
      return  (letter + timestamp + fingerprint + random);
    };

  window.cuid = cuid;
}());
