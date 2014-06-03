'use strict';
describe 'Avenger data service:', ->
  beforeEach module 'angularjsGettingStartedApp'

  DataService = undefined

  beforeEach inject (Avenger) -> 
    DataService = Avenger
  
  it 'should exist and with cast obj', ->
    expect(DataService).toBeDefined()
    expect(DataService.cast).toBeDefined()
    
  it 'should contain 5 avenger', ->
    expect(DataService.cast.length).toEqual(5)


