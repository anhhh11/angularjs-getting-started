'use strict';
describe 'Note services:', ->
  beforeEach module 'angularjsGettingStartedApp'

  DataService = undefined

  beforeEach inject (Note) -> 
    DataService = Note
  
  it 'should able to add data', ->
    DataService.add 'hello world'
    expect(DataService.getNotes()).toContain 'hello world'

  it 'should able to remove data', -> 
    DataService.add 'hello world'
    DataService.remove()
    expect(DataService.getNotes()).not.toContain 'hello world'
