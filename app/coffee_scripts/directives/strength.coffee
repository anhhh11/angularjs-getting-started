angular.module('angularjsGettingStartedApp')
  .directive 'strength', ->
    require: 'superman'
    link: (scope,elem,attrs,supermanCtrl) ->
      supermanCtrl.addStrength()
