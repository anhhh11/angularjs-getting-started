describe 'test loading page', ->
  tester = undefined
  beforeEach ->
    if tester then tester.destroy
    tester = ngMidwayTester 'angularjsGettingStartedApp'

  it 'goto main /', (done) ->
    tester.visit '/' , () ->
      expect(tester.path()).toEqual '/'
      expect(tester.inject('$route').current.controller).toEqual 'MainCtrl'
  it "Evalute right", (done) ->
    tester.visit '/' , () ->
      expect(tester.viewElement().html()).toContain "1+1=2" 
      done()