'use strict';

var Firebase = require('firebase');

module.exports = ['$firebaseObject', function ($firebaseObject) {
  var getData = {
    async: function () {
      var ref = new Firebase('https://glowing-fire-4904.firebaseio.com/');
      var obj = new $firebaseObject(ref).$loaded().then(function (res) {
        return res;
      });
      return obj;
    }
  };
  return getData;
}];
