(function() {
  'use strict';
  angular.module('angularjsGettingStartedApp').controller('MainCtrl', function($scope, $routeParams, $q) {
    var defer;
    $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Active', 'New'];
    $scope.user = {
      name: $routeParams.name,
      password: $routeParams.password
    };
    defer = $q.defer();
    defer.promise.then(function(params) {
      console.log('p1');
      return console.log(params);
    }).then(function() {
      return console.log('p2');
    });
    return defer.resolve({
      a: 1,
      b: 2
    });
  });

}).call(this);

//# sourceMappingURL=../../tmp_coffee_maps/main.js.map
