(function() {
    'use strict';
     app.controller('mainC', mainC)
     function mainC($scope, myService) {
     //CONTROLLER BODY FOR AJAX CALL TO LOCAL JSON
       /*myService.async().then(function(data) {
    	 	$scope.mainData = data["FccLond-data"]["main"][0];   		
  		});
  		*/
  	//CONTROLLER BODY FOR AJAX CALL TO FIREBASE	 
   		myService.async().then(function(data) {
   			$scope.mainData = data.main[0];
   		})
   	}	

})();