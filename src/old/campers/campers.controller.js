'use strict';

module.exports = function campersC($scope, getData) {
  getData.async().then(function (data) {
    $scope.campersData = data.campers;
  });
};
