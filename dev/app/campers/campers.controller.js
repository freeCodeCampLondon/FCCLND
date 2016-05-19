(function() {
    'use strict';
     app.controller('campersC', campersC)
     function campersC($scope, getData) {
     	//CONTROLLER BODY FOR AJAX CALL TO LOCAL JSON - UNCOMMENT THIS IF WANT WORK WITH LOCAL JSON

      // NAME OF FIRST CAMERS SHOULD BE @WORKING FROM LOCAL JSON"

      //IN shared/service.js YOU HAVE TO UNCOMMENT RIGHT SERVICE  and main.controller.js YOU HAVE TO UNCOMMENT RIGHT BODY CONTROLLER

      /*getData.async().then(function(data) {
    		$scope.campersData = data["FccLond-data"]["campers"]
    	});*/

    	//CONTROLLER BODY FOR AJAX CALL TO FIREBASE
      // NAME OF FIRST CAMERS SHOULD BE "WORKING FROM FIREBASE"
   		getData.async().then(function(data) {
   			$scope.campersData = data.campers;
   		})
   	}
})();
