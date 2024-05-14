
var getRandomValue;

var crypto = typeof window !== 'undefined' &&
  (window.crypto || window.msCrypto) ||
  typeof self !== 'undefined' &&
  self.crypto;

if (crypto) {
    var lim = Math.pow(2, 32);
    getRandomValue = function () {
        return crypto.getRandomValues(new Uint32Array(1))[0] / lim;
    };
} else {
    getRandomValue = Math.random;
}

module.exports = getRandomValue;
