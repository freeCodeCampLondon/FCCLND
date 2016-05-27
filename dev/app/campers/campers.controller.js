(function() {
  'use strict';
  app.controller('campersC', campersC);

  function campersC($scope, getData) {
    getData.async().then(function(data) {
      $scope.debug = (localData) ? "Working from LOCAL JSON" : "Working from FIREBASE";
      $scope.campersData = data.campers;
    });
  }

})();
