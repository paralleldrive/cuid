import createCuid from '../index.js';

// workaround for webpack's process polyfill
const pid = process && process.pid || Date.now();

const fingerprint = require('node-fingerprint')(pid);

const { cuid, slug } = createCuid(fingerprint);
cuid.slug = slug;

export default cuid;
