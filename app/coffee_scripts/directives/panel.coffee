angular.module('angularjsGettingStartedApp')
  .directive 'panel', ->
    restrict: 'E'
    template: '<div class="panel">This is a panel components<h2 ng-transclude>errr</h2></div>'
    transclude: true
