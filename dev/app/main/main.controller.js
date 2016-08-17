'use strict';

module.exports = function mainC($scope, getData) {
  getData.async().then(function(data) {
    $scope.mainData = data.main[0];
  });
};
