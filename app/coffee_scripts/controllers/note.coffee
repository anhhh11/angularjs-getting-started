angular.module('angularjsGettingStartedApp')
  .controller 'NoteCtrl', ($scope,Note) ->
    $scope.add = Note.add
    $scope.remove = Note.remove
    $scope.getNotes = Note.getNotes

    $scope.add('hellohaha')
    console.log($scope.getNotes())
    $scope.remove()
    
