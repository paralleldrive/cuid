  api.globalCount = function globalCount() {
    // We want to cache the results of this
    var cache = (function calc() {
        var i,
          count = 0,
          env = typeof window === 'object' ? window : self;

        for (i in env) {
          count++;
        }

        return count;
      }());

    api.globalCount = function () { return cache; };
    return cache;
  };

  api.fingerprint = function browserPrint() {
    var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
    return pad((mimeTypesLength +
      navigator.userAgent.length).toString(36) +
      api.globalCount().toString(36), 4);
  };
