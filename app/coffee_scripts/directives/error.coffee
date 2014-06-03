angular.module('angularjsGettingStartedApp')
  .directive "error", ($rootScope) ->
    restrict: "EA"
    template: '<div class="alert-box alert" ng-show="isError">' +
      'Error!!!!!</div>'
    link: (scope) ->
      $rootScope.$on "$routeChangeError", (event, current, previous, rejection) ->
        scope.isError = true