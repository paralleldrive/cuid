
var crypto = require('crypto');

var lim = Math.pow(2, 32);

module.exports = function random () {
  return crypto.randomBytes(4).readUInt32BE() / lim;
};
