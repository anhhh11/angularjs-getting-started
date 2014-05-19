// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html
'use strict';
var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  //conf.logLevel =  config.LOG_WARN;

  conf.files = conf.files.concat([
    //extra testing code
    'app/bower_components/angular-mocks/angular-mocks.js',
    'app/bower_components/angular-resource/angular-resource.js',
    'app/bower_components/angular-cookies/angular-cookies.js',
    'app/bower_components/angular-sanitize/angular-sanitize.js',

    //jasmine stuff
    //'test/jasmine.conf.js',

    //test files
    //'test/mock/**/*.js',
    'test/spec/**/*.js'
  ]);

  config.set(conf);
};

