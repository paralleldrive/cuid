
var crypto = require('crypto');

var lim = Math.pow(2, 32) - 1;

module.exports = function random () {
    return crypto.randomBytes(4)
        .readInt32BE() / lim;
};
