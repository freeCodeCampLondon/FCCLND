

(function() {
  'use strict';
  app.controller('mainC', mainC)

  function mainC($scope, getData) {
    // CONTROLLER BODY FOR AJAX CALL TO LOCAL JSON - UNCOMMENT THIS IF WANT WORK WITH LOCAL JSON
    // THE NAME OF THE FIRST CAMPERS SHOULD BE "WORKING FROM LOCAL JSON"
    // IN shared/service.js YOU HAVE TO UNCOMMENT THE RIGHT SERVICE and campers.controller.js YOU HAVE TO UNCOMMENT THE RIGHT BODY CONTROLLER
      getData.async().then(function(data) {
        $scope.debug = "Working from LOCAL JSON"
        $scope.mainData = data["FccLond-data"]["main"][0];
       });
    // CONTROLLER BODY FOR AJAX CALL TO FIREBASE
    // COMMENT THIS OUT IF YOU WANT TO WORK WITH LOCAL JSON
    // NAME OF THE FIRST CAMPERS SHOULD BE "WORKING FROM FIREBASE"    
    /*
     getData.async().then(function(data) {
      $scope.debug = "Working from FIREBASE"
      $scope.mainData = data.main[0];
    })*/
  }

})();
