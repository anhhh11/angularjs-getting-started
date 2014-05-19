// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  //conf.logLevel =  config.LOG_WARN;

  conf.files = conf.files.concat([
    //test files
    './test/e2e/**/*.js'
  ]);

  conf.proxies = {
       '/': 'http://localhost:9001/'
  };

  conf.urlRoot = '/__karma__/';

  conf.frameworks = ['ng-scenario'];
  conf.plugins = conf.plugins.concat(['karma-ng-scenario'])

  config.set(conf);
};

