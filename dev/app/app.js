'use strict';

var angular = require('angular');
require('angular-route');
require('angular-sanitize');
require('angularfire');
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

app.config(require('./app.routes'))
  .controller('mainC', require('./main/main.controller'))
  .controller('campersC', require('./campers/campers.controller'))
  .directive('isoRepeat', require('./campers/campers.directive'))
  .controller('HeaderController', require('./shared/controller'));
