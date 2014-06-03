'use strict';
describe 'first and second controller', ->
  beforeEach ->
    module 'angularjsGettingStartedApp'
  
  firstScope = secondScope = undefined
  
  beforeEach inject ($controller,$rootScope)->
    
    firstScope = $rootScope.$new()
    secondScope = $rootScope.$new()  
    
    firstCtrl = $controller 'FirstCtrl',
      $scope: firstScope
    
    secondCtrl = $controller 'SecondCtrl',
      $scope: secondScope

  it 'should not change data.message when change another data message', ->
    firstScope.data.message = 'fjalsk4wioru98'
    expect(secondScope.data.message).not.toEqual firstScope.data.message





      
  