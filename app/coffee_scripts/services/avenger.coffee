angular.module('angularjsGettingStartedApp')
    .factory 'Avenger', () -> 
      Avenger = {}
      Avenger.cast = [
        {
          name: 'a',
          character: 'Hulk'
        },
        {
          name: 'b',
          character: 'Spider man'
        },
        {
          name: 'c',
          character: 'Thor'
        },
        {
          name:'d',
          character: 'Superman'
        },
        {
          name:'e'
        }
      ]
      Avenger
