describe 'search test', ->
  beforeEach ->
    isAngularSite true
    browser.get 'http://localhost:9001/#/'
  it  'show min length error' , () ->
    browser.navigate('#/note')
    browser.debugger()
    elem = element By.id("mainForm")
    noteInput = elem.findElement By.model("noteText")
    noteInput.sendKeys 'ab'
    expect(noteInput.getText()).toEqual 'ab'
    elem = element(By.css('[class="error"][ng-show="mainForm.noteText.$error.minlength"]'))
    #element.By.css('[name="add"]').click()
    expect(elem.isDisplayed()).toBeTruthy()