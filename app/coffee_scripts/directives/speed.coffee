angular.module('angularjsGettingStartedApp')
  .directive 'speed', ->
    require: 'superman'
    link: (scope,elem,attrs,supermanCtrl) ->
      supermanCtrl.addSpeed()
