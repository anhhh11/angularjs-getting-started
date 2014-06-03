angular.module('angularjsGettingStartedApp')
  .config (demoserviceProvider) ->
    demoserviceProvider.setUrl 'http://google.com'
  .controller 'CastCtrl', ($scope,Note,demoservice) ->
    $scope.searchText = {}
    $scope.casts = ({name:n} for n in [1..5])
    $scope.url = demoservice.fullUrl