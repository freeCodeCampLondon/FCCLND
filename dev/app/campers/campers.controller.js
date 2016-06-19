'use strict';

var localData = require('../app.config') || false;

module.exports = function campersC($scope, getData) {
  getData.async().then(function (data) {
    $scope.debug = (localData) ? 'Working from LOCAL JSON' : 'Working from FIREBASE';
    $scope.campersData = data.campers;
});
};
