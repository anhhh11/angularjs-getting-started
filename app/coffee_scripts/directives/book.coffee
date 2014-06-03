angular.module('angularjsGettingStartedApp')
  .directive 'book', ->
    restrict: 'EA'
    #templateUrl: 'cacheHtml.html'
    templateUrl: 'templates/book.html'
    transclude: true
    scope:
      title: '@'
      notes: '='
      remove: '&'
      add: '&'
      notes: '='
    controller: ($scope,$compile,$log) ->
      $scope.noteText = ""
      $scope.$log = $log
      $scope.addNote = (noteText) ->
        $scope.add({note: noteText})
      $scope.removeNote = () ->
        $scope.remove()
      @
    compile: (elem) ->
      newElem = angular.element('<div class="abcd">test compile: {{noteText}}</div>')
      elem.append(newElem)

    link: (scope,element) ->
      scope.$watch "noteText", (value) ->
        element.children(1).toggleClass('aleart-box alert')
  .directive 'note', ->
    restrict: 'EA'
    templateUrl: 'templates/note.html'
    transclude: true
    require: '^book'
    scope:
      text: '@'

