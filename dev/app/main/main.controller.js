'use strict';

module.exports = function mainC($scope, getData) {
  getData.async().then(function(data) {
    $scope.debug = (require('../app.config')) ? 'Working from LOCAL JSON' : 'Working from FIREBASE';
    $scope.mainData = data.main[0];
  });
};
