describe 'search test', ->
  beforeEach ->
    isAngularSite true
    browser.get('http://localhost:9001/#/')
  it 'should evaluate binding right', () ->
    browser.navigate('#/')
    elem = element By.binding('1+1')
    expect(elem.getText()).toEqual '1+1=2'