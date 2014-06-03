(function() {
  angular.module('angularjsGettingStartedApp').controller('SecondCtrl', function($scope, Data, $location) {
    var master;
    $scope.data = Data;
    master = {};
    $scope.update = function(user) {
      return master = angular.copy(user);
    };
    $scope.reset = function() {
      return $scope.user = angular.copy(master);
    };
    $scope.isUnchanged = function(user) {
      return angular.equals(user, master);
    };
    return $scope.reset();
  });

}).call(this);

//# sourceMappingURL=../../tmp_coffee_maps/second.js.map
