angular.module('seperateServices',[])
  .provider 'demoservice', () -> 
      url = ''
      setUrl: (value) ->
        url = value
      $get: ->
        fullUrl: url + '/INFO'
        dumpFunction: () -> 'this is dump function'


