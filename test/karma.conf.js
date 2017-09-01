// Karma configuration

// puppeteer will download Chrome headless at install time
var ChromiumRevision = require('puppeteer/package.json').puppeteer.chromium_revision;
var Downloader = require('puppeteer/utils/ChromiumDownloader');
var revisionInfo = Downloader.revisionInfo(Downloader.currentPlatform(), ChromiumRevision);

process.env.CHROME_BIN = revisionInfo.executablePath;

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
    retryLimit: 2
  });
};
