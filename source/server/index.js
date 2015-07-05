'use strict';

import createCuid from '../index.js';
const fingerprint = require('node-fingerprint')();

const { cuid, slug } = createCuid(fingerprint);
export { cuid, slug };
