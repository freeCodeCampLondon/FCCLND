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

var dataSource = (require('./app.config')) ? require('./shared/services/local') : require('./shared/services/firebase');

angular.module('fccLnd', ['firebase', 'ngRoute','ngSanitize'])
  .config(['$routeProvider', require('./app.routes')])
  .factory('getData', dataSource)
  .controller('mainC', ['$scope', 'getData', require('./main/main.controller')])
  .controller('campersC', ['$scope', 'getData', require('./campers/campers.controller')])
  .directive('isoRepeat', ['$timeout', '$window', require('./campers/campers.directive')])
  .controller('HeaderController', ['$scope', '$location', require('./shared/controller')]);
