'use strict';
describe 'first controller', ->
  beforeEach ->
   module 'angularjsGettingStartedApp'
  
  scope = undefined
  
  beforeEach inject ($controller,$rootScope)->
    scope = $rootScope.$new()
    ctrl = $controller 'FirstCtrl',{
      $scope: scope
    }
  it 'should have data.message', ->
    expect(scope.data).toBeDefined()
    expect(scope.data.message).toBeDefined()

  it 'should contain dumb function', ->
    expect(scope.dumbFunction).toBeDefined() 
    expect(scope.dumbFunction()).toEqual 0 
    


      
  