/*global module*/
module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: '<json:package.json>',
    lint: {
      all: ['./grunt.js', './dist/*.js', './test/test.js']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        nonew: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        eqnull: true,
        browser: true,
        strict: true,
        boss: false
      }
    },
    concat: {
      applitude: {
        src: ['node_modules/applitude/dist/applitude.bundle.js'],
        dest: 'lib/applitude.bundle.js'
      },
      browser: {
        src: ['src/head.js', 'src/browser-fingerprint.js', 'src/footer.js'],
        dest: 'dist/browser-cuid.js'
      },
      node: {
        src: ['src/head.js', 'src/node-fingerprint.js', 'src/footer.js'],
        dest: 'dist/node-cuid.js'
      }
    },
    qunit: {
      applitude: ['test/applitude-cuid-test.html'],
      browser: ['test/browser-cuid-test.html']
    },
    test: {
      "node-cuid": ['test/node-cuid-test.js']
    }
  });
  grunt.registerTask('testall', 'qunit test');
  grunt.registerTask('default', 'concat lint');
  grunt.registerTask('install', 'concat');
};
