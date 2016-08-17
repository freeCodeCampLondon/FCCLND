'use strict';
/**
 * @ngdoc overview
 * @name freeCodeLondonersCampApp
 * @description
 * # freeCodeLondonersCampApp
 *
 * Main module of the application.
 */
module.exports = function router($routeProvider) {
  $routeProvider
    .when('/', {
      template: require('./main/main.html'),
      controller: 'mainC'
    })
    .when('/campers', {
      template: require('./campers/campers.html'),
      controller: 'campersC'
    })
    .otherwise({
      redirectTo: '/'
    });
};
