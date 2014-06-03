describe "Midway: Testing Modules", () ->
  describe "App Module:", () ->
    module = undefined

    beforeEach () ->
      module = angular.module "angularjsGettingStartedApp"

    it "should be registered", () ->
      expect(module).not.toEqual null

    describe "Dependencies:", () ->
      
      deps = undefined

      hasModule = (m) ->
        deps.indexOf(m) >= 0

      beforeEach () ->
        deps = module.value("appName").requires

      moduleMustHave = ["ngCookies", "ngResource", "ngSanitize", "ngRoute"]

      for m in moduleMustHave
        it "should have " + m + " module", ->
          expect(hasModule(m)).toEqual true
    