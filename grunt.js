/*global module*/
module.exports = function(grunt) {
  'use strict';
  grunt.initConfig({
    pkg: '<json:package.json>',
    lint: {
      all: ['./grunt.js', './src/cuid.js', './test/test.js']
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
      applitudeCopy: {
        src: ['node_modules/applitude/dist/applitude.bundle.js'],
        dest: 'lib/applitude.bundle.js'
      },
      applitudeBuild: {
        src: ['src/applitude.head.js', 'src/cuid.js', 'src/applitude.foot.js'],
        dest: 'dist/applitude.uid.js'
      },
      dist: {
        src: ['src/cuid.js'],
        dest: 'dist/cuid.js'
      }
    },
    qunit: {
      index: ['test/index.html']
    },
    watch: {
      files: ['<config:lint.all>'],
      tasks: ['lint', 'concat,', 'qunit']
    }
  });
  grunt.registerTask('default', 'lint concat qunit');
};
