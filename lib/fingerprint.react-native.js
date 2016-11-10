var pad = require('./pad.js');

var globalCount = Object.keys(global);
var clientId = pad(globalCount.toString(36), 4);

module.exports = function fingerprint () {
  return clientId;
};
