'use strict';
describe 'Data services: test available', ->
  beforeEach module 'angularjsGettingStartedApp'

  DataService = undefined

  beforeEach inject (Data) -> 
    DataService = Data
  
  it 'should have message Hello', ->
    expect(DataService).toBeDefined()
    expect(DataService.message).toEqual("hello")


