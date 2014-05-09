app.controller('SecondCtrl', function($scope,Data){
	$scope.data = Data;
	$scope.reversedMessage = function() {
		return $scope.data.message.split("").reverse().join("");
	};
	$scope.master = {};

	$scope.update = function(user) {
		$scope.master = angular.copy(user);
	};

	$scope.reset = function() {
		$scope.user = angular.copy($scope.master);
	};

	$scope.isUnchanged = function(user) {
		return angular.equals(user, $scope.master);
	};

	$scope.reset();
})