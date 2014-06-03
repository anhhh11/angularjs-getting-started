'use strict';
describe 'cast controller', ->
  beforeEach ->
   module 'angularjsGettingStartedApp'
  
  scope = ctrl = undefined
  
  MockAvengerData = {}
  beforeEach ->
    MockAvengerData = 
      cast : ({} for i in [1..5])
    inject ($controller,$rootScope)->
      scope = $rootScope.$new()
      ctrl = $controller 'CastCtrl', {
        $scope: scope,
        AvengerData: MockAvengerData
      }
  it 'should have empty default search text', ->
    expect(scope.searchText).toEqual {}

  it 'should exist', ->
    expect(ctrl).toBeDefined() 

  it 'should have cast', ->
    expect(scope.casts).toBeDefined() 

  it 'should have 5 casts', ->
    expect(scope.casts.length).toEqual 5
