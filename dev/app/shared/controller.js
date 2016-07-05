'use strict';

module.exports = function HeaderController($scope, $location) {
  $scope.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };
};
