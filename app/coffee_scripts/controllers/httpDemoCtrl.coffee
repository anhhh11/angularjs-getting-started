angular.module('angularjsGettingStartedApp')
  .controller 'HttpDemoCtrl', ($scope,$http,$log,$location) ->
    console.log 'HttpDemoCtrl'
    $http.get 'http://192.168.1.102:9000'
      .success (data,status,headers,config) ->
        console.log('Complete')
        $log.log(data)
        $log.warn(status)
        $log.error(headers)
        $log.log(config)
      .error (data,status,headers,config) ->
        console.log('Error')
        console.log(status)
    $scope.gotoCast = ->
      console.log $location.absUrl()
      $location
        .path '/cast'
        .search
          user: 'hello'
        .hash ['a']
        .replace() #Remove history
