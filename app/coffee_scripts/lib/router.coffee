class Router
  constructor: ->
    @lookup = {}
    @otherwiseLookup = {}
  
  when: (key,url,params) ->
    @lookup[key] =
      url: url
      params: params
  
  alias: (key1,key2) ->
    @lookup[key1] = angular.copy(@lookup[key2])
    console.log(@lookup)
  
  otherwise: (params) ->
    @otherwiseLookup = params

  replaceUrlParams: (url,params) ->
    for k,v of params
      url = url.replace ':'+k, v

  getRoute: (key) ->
    @lookup[key]

  routeDefined: (key) ->
    !! @getRoute key

  routePath: (key,args) ->
    @replaceUrlParams(@getRoute(key).url,args) if @routeDefined(key)

  install: ($routeProvider) ->
    for k,route of @lookup
      $routeProvider.when route['url'], route['params']
      $routeProvider.otherwise @otherwiseLookup if @otherwiseLookup
window.ROUTER = new Router