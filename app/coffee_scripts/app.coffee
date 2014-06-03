'use strict'

app = angular.module 'angularjsGettingStartedApp', [
  'ngCookies'
  'ngResource'
  'ngSanitize'
  'ngRoute'
  'App.Routes'
  #'angular-loading-bar'
  'cfp.loadingBar'
  'seperateServices'
]

app.run ($rootScope,$log,$templateCache) ->
  $rootScope.$log = $log
  window.$log = $log
  $templateCache.put("cacheHtml.html","<div>Cached content</div>")
  
app.config ($logProvider,$locationProvider) ->
  $logProvider.debugEnabled true


#angular.injector app
#  .invoke (Data) ->
#    alert Data.message