angular.module 'angularjsGettingStartedApp'
  .controller 'AppCtrl', ($rootScope,cfpLoadingBar,$scope)-> 
    $rootScope.$on "$routeChangeError", (event,current,previous,rejection) ->
      cfpLoadingBar.complete()
      console.log(event)
#  console.log event
    #  console.log current
    #  console.log previous
    #  console.log rejection
    #  console.log 'routing error'
    $scope.isError = false
    $rootScope.$on '$routeChangeStart', (e, curr, prev) -> 
      if curr.$$route and curr.$$route.resolve
        #https://github.com/chieffancypants/angular-loading-bar
        # Show a loading message until promises are not resolved
        cfpLoadingBar.start();


    $rootScope.$on '$routeChangeSuccess', (e, curr, prev) ->
      #Hide loading message
      cfpLoadingBar.complete()


