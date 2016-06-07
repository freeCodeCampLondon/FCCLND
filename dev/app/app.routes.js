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
      templateUrl: 'main/main.html',
      controller: 'mainC'
    })
    .when('/campers', {
      templateUrl: 'campers/campers.html',
      controller: 'campersC'
    })
    .otherwise({
      redirectTo: '/'
    });
};
