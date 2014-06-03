angular.module 'App.Routes', []
.config ['$routeProvider','$locationProvider',($routeProvider, $locationProvider) ->
    if CONFIG.routing.html5Mode
      $locationProvider.html5Mode true
    else 
      routingPrefix = CONFIG.routing.prefix
      if routingPrefix and routingPrefix.length > 0
        $locationProvider.hashPrefix routingPrefix
    
  
    
    ROUTER.when 'superman','/superman',
      templateUrl: CONFIG.prepareViewTemplateUrl 'superman'
      controller: 'MainCtrl'

    ROUTER.when 'note','/note',
      templateUrl: CONFIG.prepareViewTemplateUrl 'note'
      controller: 'NoteCtrl'
    
    ROUTER.when 'cast', '/cast',
      templateUrl: CONFIG.prepareViewTemplateUrl 'cast'
      controller: 'CastCtrl'
  
    ROUTER.when 'httpTest', '/http-demo',
      controller: 'HttpDemoCtrl'    
      #templateUrl: CONFIG.prepareViewTemplateUrl 'cast'
      template: '<div>Http demo ctrl</div><button ng-click="gotoCast()">Go to cast</button>'

    ROUTER.when 'main', '/main/:name/:password',
      controller : 'MainCtrl'
      templateUrl : CONFIG.prepareViewTemplateUrl 'main'
      resolve:
        dataService1: ($q,$timeout) ->
          defer = $q.defer()
          $timeout ()-> 
            #defer.resolve({name:'john',old:21})
            defer.reject('Failed') #WORKING
            console.log("resolved")
          ,1000

          defer.promise
  

    ROUTER.when 'main_default', '/main',
      redirectTo: (routeParams,path,search) ->
        console.log(routeParams)
        console.log(path)
        console.log(search)
        '/main/default/default'


    ROUTER.when 'root', '/',
      redirectTo: ->
        '/cast'



    ROUTER.alias 'home', 'cast'

    ROUTER.otherwise
      #redirectTo : '/'
      template: '404 oops'
    
    ROUTER.install $routeProvider
  ]
  
  .run ['$rootScope', '$location', ($rootScope, $location) ->
    prefix = '';

    if ~CONFIG.routing.html5Mode
      prefix = '#' + CONFIG.routing.prefix

    $rootScope.route = (url, args) ->
      prefix + ROUTER.routePath url, args

    $rootScope.r = $rootScope.route;

    $rootScope.c = (route, value) ->
      url = ROUTER.routePath route
      if url==$location.path() then value
    ]