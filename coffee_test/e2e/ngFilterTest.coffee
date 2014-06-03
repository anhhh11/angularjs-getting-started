describe 'search test', ->
  beforeEach ->
    isAngularSite true
    browser.get('http://localhost:9001/#/cast')
  it 'should jump to main /', () ->
    browser.navigate('#/cast')
    searchText = element(By.model("searchText.name"))
    searchText.sendKeys('5')
    #browser.ignoreSynchronization = true;
    element.all(By.repeater("actor in casts | orderBy:'name':'desc' | limitTo:4 | filter:searchText")).then(
        (elems) ->
          expect(elems.length).toEqual(1) 
      )
