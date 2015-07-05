'use strict';

import createCuid from '../index.js';
const fingerprint = require('node-fingerprint')();

let { cuid, slug } = createCuid(fingerprint);
export { cuid, slug };
