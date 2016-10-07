import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import ReactDOM from 'react-dom';

import App from './containers/App';
import './assets/sass/main.scss';

// const angular = require('angular');
// require('angular-route');
// require('angular-sanitize');
// require('angularfire');

// const localData = require('./app.config');
// console.log((localData) ? 'Working from Local JSON' : 'Working from Firebase');
// const dataSource = (localData) ? require('./shared/services/local') : require('./shared/services/firebase');

// angular.module('fccLnd', ['firebase', 'ngRoute', 'ngSanitize'])
//   .config(['$routeProvider', require('./app.routes')])
//   .factory('getData', dataSource)
//   .controller('mainC', ['$scope', 'getData', require('./main/main.controller')])
//   .controller('campersC', ['$scope', 'getData', require('./campers/campers.controller')])
//   .directive('isoRepeat', ['$timeout', '$window', require('./campers/campers.directive')])
//   .controller('HeaderController', ['$scope', '$location', require('./shared/controller')]);

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      {/*
       <Route path="/" component={Main}/>
       <Route path="/campers" component={Campers}/>
      */}
    </Route>
  </Router>
),
  document.querySelector('#root'));
