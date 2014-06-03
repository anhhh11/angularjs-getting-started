describe 'test loading page', ->
  tester = undefined
  beforeEach ->
    if tester then tester.destroy
    tester = ngMidwayTester 'angularjsGettingStartedApp'

  it "should defined dubFuntion and evaluate directive", (done) ->
    tester.visit '/superman' , () ->      
      done()