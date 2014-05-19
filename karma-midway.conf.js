var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    //extra testing code
    'node_modules/ng-midway-tester/src/ngMidwayTester.js',

    //jasmine stuff
    //'test/jasmine.conf.js',

    //test files
    //'test/midway/appSpec.js',
    //'test/midway/**/*.js'
  ]);

  conf.proxies = {
    '/': 'http://localhost:9000/'
  };

  config.set(conf);
};
