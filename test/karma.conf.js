// Karma configuration

module.exports = function (config) {
  config.set({
    basePath: './..',
    frameworks: [ 'browserify', 'tap' ],
    preprocessors: {
      './test/**/*.js': [ 'browserify' ]
    },
    files: [
      './test/**/*.js'
    ],
    browserify: {
      debug: true,
      transform: [],
      extensions: [ '.js' ]
    },
    exclude: [ './test/karma.conf.js' ],
    reporters: [ 'progress' ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: false,
    browsers: [ 'ChromeHeadless' ],
    singleRun: true,
    concurrency: 2,
    retryLimit: 2,
    captureTimeout: 5 * 60 * 1000,
    browserNoActivityTimeout: 5 * 60 * 1000
  });
};
