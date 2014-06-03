'use strict'

angular.module('angularjsGettingStartedApp')

.controller 'MainCtrl',  ($scope,$routeParams,$q) ->
  #console.log(dataService1)
  $scope.awesomeThings = [
    'HTML5 Boilerplate'
    'AngularJS'
    'Karma'
    'Active'
    'New'
  ]
  $scope.user = {name: $routeParams.name, password: $routeParams.password}
  defer = $q.defer()
  defer.promise
    .then (params)->
      console.log 'p1'
      console.log(params)
    .then ->
      console.log 'p2'
  defer.resolve({a:1,b:2})

  #$scope.isUnchanged = ->
