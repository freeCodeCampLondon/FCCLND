(function() {
  'use strict';
  app.controller('mainC', mainC)

  function mainC($scope, getData) {
    if (ENV_isFirebaseOff){
      getData.async().then(function(data) {
        $scope.debug = "Working from LOCAL JSON";
        $scope.mainData = data["FccLond-data"]["main"][0];
       });
    }else{
     getData.async().then(function(data) {
      $scope.debug = "Working from FIREBASE";
      $scope.mainData = data.main[0];
      })
   }
  }

})();
