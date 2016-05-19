(function() {
    'use strict';
     app.controller('mainC', mainC)
     function mainC($scope, getData) {
     //CONTROLLER BODY FOR AJAX CALL TO LOCAL JSON - UNCOMMENT THIS IF WANT WORK WITH LOCAL JSON

      // NAME OF FIRST CAMERS SHOULD BE @WORKING FROM LOCAL JSON"

      //IN shared/service.js YOU HAVE TO UNCOMMENT RIGHT SERVICE  and campers.controller.js YOU HAVE TO UNCOMMENT RIGHT BODY CONTROLLER

       /*getData.async().then(function(data) {
    	 	$scope.mainData = data["FccLond-data"]["main"][0];
  		});
  		*/


      //CONTROLLER BODY FOR AJAX CALL TO FIREBASE
      // NAME OF FIRST CAMERS SHOULD BE "WORKING FROM FIREBASE"
   		getData.async().then(function(data) {
   			$scope.mainData = data.main[0];
   		})
   	}

})();
