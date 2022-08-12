var pad = require('./pad.js');
var os = require('os');

function getHostname () {
    try {
        return os.hostname();
    } catch (e) {
        /**
         * This is most likely Windows 7 which is known to cause os.hostname() to break
         * @see https://github.com/nodejs/node/issues/41297
         * @see https://github.com/libuv/libuv/issues/3260
         *
         * Fallback to take hostname from environment variables
         * @see https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/hostname#notes
         */
        // eslint-disable-next-line no-underscore-dangle
        return process.env._CLUSTER_NETWORK_NAME_ || process.env.COMPUTERNAME || 'hostname';
    }
}

var padding = 2,
    pid = pad(process.pid.toString(36), padding),
    hostname = getHostname(),
    length = hostname.length,
    hostId = pad(hostname
      .split('')
      .reduce(function (prev, char) {
        return +prev + char.charCodeAt(0);
      }, +length + 36)
      .toString(36),
    padding);

module.exports = function fingerprint () {
  return pid + hostId;
};
