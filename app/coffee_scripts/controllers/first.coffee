angular.module('angularjsGettingStartedApp')
.controller 'FirstCtrl', ($scope,Data) ->
  $scope.data = Data
  $scope.data = {message : 'hello world'}
  $scope.dumbFunction = () -> 0
  $scope.fly = () -> console.log("I am flying")
  