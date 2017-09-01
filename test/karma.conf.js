// Karma configuration

module.exports = function (config) {

  var customLaunchers = {
    sl_chrome: {
      base: 'SauceLabs',
      browserName: 'chrome',
      platform: 'Windows 10',
      version: '60'
    },
    sl_firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: '54'
    },
    sl_ie_11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      platform: 'Windows 8.1',
      version: '11'
    },
    sl_android: {
      base: 'SauceLabs',
      browserName: 'Browser',
      platform: 'Android',
      version: '4.4',
      deviceName: 'Samsung Galaxy S3 Emulator',
      deviceOrientation: 'portrait'
    }
  };

  config.set({
    basePath: './..',
    frameworks: [ 'browserify', 'tap'],
    preprocessors: {
      './test/**/*.js': ['browserify']
    },
    files: [
      './test/**/*.js'
    ],
    browserify: {
      debug: true,
      transform: [],
      extensions: ['.js']
    },
    exclude: ['./test/karma.conf.js', './test/browser/**/*'],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: false,
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers), // can also test with the browser locally by using ['Chrome']
    singleRun: true,
    concurrency: 2,
    retryLimit: 2,
    captureTimeout: 120 * 1000,
    browserNoActivityTimeout: 120 * 1000
  });
};
