/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

'use strict';

let c = 0;
let blockSize = 4;
let base = 36;
let discreteValues = Math.pow(base, blockSize);

let pad = (str, size) => ('000000000' + str).slice(-size);

let randomBlock = function randomBlock () {
  return pad((Math.random() * discreteValues << 0).toString(base), blockSize);
};

let safeCounter = function () {
  c = (c < discreteValues) ? c : 0;
  return c++;
};

let createCuid = (fingerprint) => {
  let cuid = () => {
    // Starting with a lowercase letter makes
    // it HTML element ID friendly.
    let letter = 'c'; // hard-coded allows for sequential access

    // timestamp
    // warning: this exposes the exact date and time
    // that the uid was created.
    let timestamp = (new Date().getTime()).toString(base);

    // Grab some more chars from Math.random()
    let random = randomBlock() + randomBlock();

    // Prevent same-machine collisions.
    let counter = pad(safeCounter().toString(base), blockSize);

    return letter + timestamp + counter + fingerprint + random;
  };

  let slug = () => {
    let date = new Date().getTime().toString(36);
    let print = fingerprint.slice(0, 1) + fingerprint.slice(-1);
    let random = randomBlock().slice(-2);
    let counter = safeCounter().toString(36).slice(-4);

    return date.slice(-2) + counter + print + random;
  };

  return { cuid, slug };
};

export default createCuid;
