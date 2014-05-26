describe 'Unit test: superman directive', ->
  beforeEach ->
    module 'angularjsGettingStartedApp'
  $rootScope = $compile = undefined
  beforeEach ->
    inject ['$compile','$rootScope', ($c,$r) ->
      $rootScope = $r
      $compile = $c
    ]
  it 'should have strength ability', ->
    scope = $rootScope.$new()
    scope.ability = []
    elem = $compile("<superman ability='ability'></superman>")(scope)
    elem.controller('superman').addStrength()
    expect(scope.ability).toEqual ['strength']

  it 'should not share scope', ->
    scope = $rootScope.$new()
    scope.ability = []
    elem1 = $compile("<superman strength ability='ability'></superman>")(scope)
    elem2 = $compile("<superman speed ability='ability'></superman>")(scope)
    expect(scope.ability).toEqual ['strength','speed']