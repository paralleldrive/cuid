'use strict';

import createCuid from '../index.js';
const fingerprint = require('browser-fingerprint')();

const { cuid, slug } = createCuid(fingerprint);
export { cuid, slug };
