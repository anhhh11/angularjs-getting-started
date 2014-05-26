angular.module('angularjsGettingStartedApp')
  .directive 'superman', ->
    restrict: 'ECMA'
    template: "<div>I am here to save the day</div>"
    link: (scope,element,attrs) -> #Scope: of containing controller, element: jQuery element
      #console.log 'i am working'
      element.bind "mouseenter", ->
        #console.log('Inside superman directive')
        #console.log(attrs)
        element.addClass(attrs.enter)
      element.bind "mouseleave", ->
        #console.log('Leave superman directive')
        element.removeClass(attrs.enter)
      element.bind 'click', ->
        scope.$apply(attrs.transport)
    scope : {
      #ability: '='
      fly: '&transport'
      ability: '='
    }
    controller: ($scope) ->
      #$scope.ability = []

      @addStrength = () ->
        $scope.ability.push "strength"

      @addSpeed = () ->
        $scope.ability.push "speed"

      @

