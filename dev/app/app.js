'use strict';

/**
 * Change to switch between local JSON and firebase
 */
var localData = true;

/**
 * @ngdoc overview
 * @name freeCodeLondonersCampApp
 * @description
 * # freeCodeLondonersCampApp
 *
 * Main module of the application.
 */

var app = angular.module('fccLnd', [
  'firebase',
  'ngRoute',
  'ngSanitize'
]);
