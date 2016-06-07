'use strict';

var Firebase = require('firebase');

app.factory('getData', ['$firebaseObject', function ($firebaseObject) {
  var getData = {
    async: function () {
      var ref = new Firebase('https://glowing-fire-4904.firebaseio.com/FccLond-data/');
      var obj = new $firebaseObject(ref).$loaded().then(function (res) {
        return res;
      });
      return obj;
    }
  };
  return getData;
}]);
  

