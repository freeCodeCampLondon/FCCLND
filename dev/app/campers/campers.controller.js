(function() {
    'use strict';
     app.controller('campersC', campersC)
     function campersC($scope, myService) {
     	//CONTROLLER BODY FOR AJAX CALL TO LOCAL JSON
   		/*myService.async().then(function(data) {
    		$scope.campersData = data["FccLond-data"]["campers"]
    	});*/

    	//CONTROLLER BODY FOR AJAX CALL TO FIREBASE	 
   		myService.async().then(function(data) {
   			$scope.campersData = data.campers;
   			console.log($scope.campersData.name)
   		})
   	}
})();