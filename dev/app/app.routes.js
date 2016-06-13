(function() {
  'use strict';
  /**
   * @ngdoc overview
   * @name freeCodeLondonersCampApp
   * @description
   * # freeCodeLondonersCampApp
   *
   * Main module of the application.
   */
  angular.module('fccLnd').config(function($routeProvider) {
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
  });
})();