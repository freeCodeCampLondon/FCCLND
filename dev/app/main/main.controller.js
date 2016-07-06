'use strict';

var localData = require('../app.config') || false;

module.exports = function mainC($scope, getData) {
  getData.async().then(function(data) {
    $scope.debug = (localData) ? 'Working from LOCAL JSON' : 'Working from FIREBASE';
    $scope.mainData = data.main[0];
  });
};
