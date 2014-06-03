angular.module('angularjsGettingStartedApp')
  .filter 'reverseMessage', ->
    (message) ->
      message.split("").reverse().join("")