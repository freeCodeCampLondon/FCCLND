(function() {
  'use strict';
  app.controller('campersC', campersC)

  function campersC($scope, getData) {
    // CONTROLLER BODY FOR AJAX CALL TO LOCAL JSON - UNCOMMENT THIS IF YOU WANT TO WORK WITH LOCAL JSON
    // THE NAME OF THE FIRST CAMPERS SHOULD BE "WORKING FROM LOCAL JSON"
    // IN shared/service.js YOU HAVE TO UNCOMMENT THE RIGHT SERVICE  and main.controller.js YOU HAVE TO UNCOMMENT THE RIGHT BODY CONTROLLER

 
     getData.async().then(function(data) {
          $scope.campersData = data["FccLond-data"]["campers"]
      });
      

    // CONTROLLER BODY FOR AJAX CALL TO FIREBASE
    // COMMENT THIS OUT IF YOU WANT TO WORK WITH LOCAL JSON
    // THE NAME OF THE FIRST CAMPERS SHOULD BE "WORKING FROM FIREBASE"
   /*  getData.async().then(function(data) {
      $scope.campersData = data.campers;
    })*/
  }
})();

