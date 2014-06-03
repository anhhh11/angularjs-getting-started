(function() {
  angular.module('angularjsGettingStartedApp').controller('FirstCtrl', function($scope, Data) {
    $scope.data = Data;
    $scope.data = {
      message: 'hello world'
    };
    $scope.dumbFunction = function() {
      return 0;
    };
    return $scope.fly = function() {
      return console.log("I am flying");
    };
  });

}).call(this);

//# sourceMappingURL=../../tmp_coffee_maps/first.js.map
