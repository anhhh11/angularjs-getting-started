angular.module('angularjsGettingStartedApp')
    .factory 'Note', () -> 
        data = ['hello','world']
        add: (text) ->
          data.push text
        remove: () ->
          data.pop()
        getNotes: () ->
          data
          