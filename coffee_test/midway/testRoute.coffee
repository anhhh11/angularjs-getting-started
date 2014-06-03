describe "Midway: Testing Routes", () ->
  tester = undefined
  beforeEach () ->
    tester = ngMidwayTester 'angularjsGettingStartedApp'

  afterEach () ->
    tester.destroy()
    tester = null

  