// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';
module.exports = function() {
  return {
    // base path, that will be used to resolve files and exclude
    basePath: './',
    colors: true,

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
    /*Map*/
    //{pattern: '**/*.coffee', included: false, served: true, watched: false},
    //{pattern: '**/*.js.map', included: false, served: true, watched: false},
    /* 3rd party code */
    'app/bower_components/angular/angular.js',
    'app/bower_components/angular-route/angular-route.js',
    /* App specific code */
      //'app/scripts/*.js',
      'app/scripts/app.js',
      'app/scripts/controllers/**/*.js',
      'app/scripts/services/**/*.js',
      'app/scripts/directives/**/*.js',
      'app/scripts/filters/**/*.js',
      //'app/scripts/config/routes.js',
    /* Test code */
      //'test/mock/**/*.js',
      //'test/spec/**/*.js'
      ],
      reporters: ['progress'],


    // list of files / patterns to exclude
    exclude: [],

    // web server port
    //port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    singleRun: false,
    
    preprocessors: {
      'app/scripts/*.js': ['sourcemap'],
      'test/**/*.js' : ['sourcemap']
    },

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS','Chrome'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    plugins: [
    'karma-jasmine',
    'karma-phantomjs-launcher',
    'karma-chrome-launcher',
    'karma-sourcemap-loader',
    ]
  }
};
