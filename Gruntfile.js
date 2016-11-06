/*global module*/
module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: '<json:package.json>',
    jshint: {
      all: ['./Gruntfile.js', './dist/*.js'],
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
        unused: false,
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
    nodeunit: {
      "node-cuid": ['test/node-cuid-test.js']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.registerTask('test', ['concat', 'jshint', 'qunit', 'nodeunit']);
  grunt.registerTask('default', ['concat', 'jshint']);
  grunt.registerTask('build', 'concat');
};
