var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    //extra testing code
    'node_modules/ng-midway-tester/src/ngMidwayTester.js',
  'app/bower_components/angular-resource/angular-resource.js',
  'app/bower_components/angular-cookies/angular-cookies.js',
  'app/bower_components/angular-sanitize/angular-sanitize.js',
    //jasmine stuff
    //'test/jasmine.conf.js',

    //test files
    //'test/midway/appSpec.js',
    'test/midway/**/*.js'
  ]);

  conf.proxies = {
    '/': 'http://localhost:9111/'
  };

  config.set(conf);
};
