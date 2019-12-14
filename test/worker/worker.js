var cuid = require('../..');

self.onmessage = function () {
    self.postMessage(cuid());
};
