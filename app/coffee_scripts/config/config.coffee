class Config
  
  @appPrefix = '/'
  @templateUrlPrefix = '/'
  @appVersion  = '1'
  @templateFileQuerystring = '?v=' + @appVersion

  @routing:
    prefix: '!'
    html5Mode: true

  @viewUrlPrefix: @templateUrlPrefix + 'views/'
  
  @partialUrlPreix: @templateUrlPrefix + 'partials/'

  @templateFileSuffix: '.html'

  @prepareViewTemplateUrl: (url) ->
    @viewUrlPrefix + url + @templateFileSuffix + @templateFileQuerystring

window.CONFIG = Config
