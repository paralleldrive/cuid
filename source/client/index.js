'use strict';

import createCuid from '../index.js';
const fingerprint = require('browser-fingerprint')();

let { cuid, slug } = createCuid(fingerprint);
export { cuid, slug };
