describe 'Unit test: superman directive', ->
  beforeEach ->
    module 'angularjsGettingStartedApp'
  $rootScope = $compile = $httpBackend = {}
  beforeEach ->
    inject ['$compile','$rootScope', ($c,$r) ->
      $rootScope = $r
      $compile = $c
    ]
  it 'should display right', ->
    elem = $compile('<superman></superman>')($rootScope)
    expect(elem.html()).toMatch /day/i
  
  it 'should have class `enter` when mouse enter', ->
    elem = $compile('<superman enter="sky"></superman>')($rootScope)
    elem.triggerHandler("mouseenter") 
    expect(elem.hasClass('sky')).toEqual true
    elem.triggerHandler("mouseleave")
    expect(elem.hasClass('sky')).not.toEqual true

  it 'should call fly function when click', ->
    scope = undefined
    # inject ($controller,$rootScope) ->
    #   scope = $rootScope.$new() 
    #   $controller 'FirstCtrl',
    #     $scope: scope
    scope = $rootScope.$new()
    scope.fly = jasmine.createSpy('fly')
    elem = $compile('<superman enter="sky" transport="fly()"></superman>')(scope)
    supermanCtrl = elem.controller('superman')
    elem.triggerHandler('click')
    expect(scope.fly).toHaveBeenCalled()