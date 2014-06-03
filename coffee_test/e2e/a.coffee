describe 'e2e test', ->
	beforeEach ->
    browser.get('http://google.com')
    browser.navigateTo('/')

  it 'should jump to main /', () ->
    browser.navigateTo('#/')
    expect(browser.location().path()) toBe '/videos' 