angular.module('angularjsGettingStartedApp')
.controller 'SecondCtrl', ($scope,Data,$location) ->
  #console.log dataService1

  $scope.data = Data

  master = {};

  $scope.update = (user) ->
    master = angular.copy(user)


  $scope.reset = () ->
    $scope.user = angular.copy(master)

  $scope.isUnchanged = (user) ->
    angular.equals(user, master)


  $scope.reset();