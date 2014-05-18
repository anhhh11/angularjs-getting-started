angular.module('angularjsGettingStartedApp')
.controller 'SecondCtrl', ($scope,Data) ->
	$scope.data = Data

	$scope.reversedMessage = () -> $scope.data.message.split("").reverse().join("")

	$scope.master = {}

	$scope.update = (user) ->
		$scope.master = angular.copy(user)

	$scope.reset = () ->
		$scope.user = angular.copy($scope.master)

	$scope.isUnchanged = (user) ->
		angular.equals(user, $scope.master)

	$scope.reset()
