(function() {
  'use strict';
  app.controller('campersC', campersC)

  function campersC($scope, getData) {
    if (ENV_isFirebaseOff){
          getData.async().then(function(data) {
          $scope.debug = "Working from LOCAL JSON";
          $scope.campersData = data["FccLond-data"]["campers"]
          });
        }else{
          getData.async().then(function(data) {
             $scope.debug = "Working from FIREBASE";
             $scope.campersData = data.campers;
          });
        }
    }

})();

