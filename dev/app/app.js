'use strict';

var angular = require('angular');
require('angular-route');
require('angular-sanitize');
require('angularfire');

require('./assets/sass/main.scss');

var localData = require('./app.config');
console.log((localData) ? 'Working from Local JSON' : 'Working from Firebase');
var dataSource = (localData) ? require('./shared/services/local') : require('./shared/services/firebase');

angular.module('fccLnd', ['firebase', 'ngRoute', 'ngSanitize'])
  .config(['$routeProvider', require('./app.routes')])
  .factory('getData', dataSource)
  .controller('mainC', ['$scope', 'getData', require('./main/main.controller')])
  .controller('campersC', ['$scope', 'getData', require('./campers/campers.controller')])
  .directive('isoRepeat', ['$timeout', '$window', require('./campers/campers.directive')])
  .controller('HeaderController', ['$scope', '$location', require('./shared/controller')]);
