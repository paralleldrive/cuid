import createCuid from '../index.js';

// workaround for webpack's process polyfill
try {
  process.pid = process.pid || Date.now();
} catch (e) {} // eslint-disable-line no-empty

const fingerprint = require('node-fingerprint')(process.pid);

const { cuid, slug } = createCuid(fingerprint);
cuid.slug = slug;

export default cuid;
