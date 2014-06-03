describe 'Reversed message filter', ->
  reverseMessage = undefined

  beforeEach ->
    module 'angularjsGettingStartedApp'
    inject ($filter) ->
      reverseMessage = $filter('reverseMessage')

  it 'should exist', ->
    expect(reverseMessage).not.toBeNull() 

  it 'should reversed a message', ->
    #debugger
    expect(reverseMessage('hello')).toEqual 'olleh'

  #iit focus on one test
  #xit skip test
  #ddescribe focus on one test suite
  #xdescribe skip test suite