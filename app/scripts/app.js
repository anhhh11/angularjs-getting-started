(function() {
  'use strict';
  var app;

  app = angular.module('angularjsGettingStartedApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'App.Routes', 'cfp.loadingBar', 'seperateServices']);

  app.run(function($rootScope, $log, $templateCache) {
    $rootScope.$log = $log;
    window.$log = $log;
    return $templateCache.put("cacheHtml.html", "<div>Cached content</div>");
  });

  app.config(function($logProvider, $locationProvider) {
    return $logProvider.debugEnabled(true);
  });

}).call(this);

//# sourceMappingURL=../tmp_coffee_maps/app.js.map
