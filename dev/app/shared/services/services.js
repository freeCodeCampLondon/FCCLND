(function() {
  'use strict';
  //SERVICE FOR AJAX CALL TO LOCAL JSON - UNCOMMENT THIS IF WANT WORK WITH LOCAL JSON
  // THE NAME OF THE FIRST CAMPERS SHOULD BE "WORKING FROM LOCAL JSON"
  //IN campers.controller.js and main.controller.js YOU HAVE TO UNCOMMENT THE RIGHT BODY CONTROLLER

  
    app.factory('getData', function($http) {
    var getData = {
        async: function() {
             // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http.get('../data/fccLndData.json').then(function (response) {
                         // The return value gets picked up by the then in the controller.
                            return response.data;
                        });
                        // Return the promise to the controller
            return promise;
            }
        };
    return getData;
    });
  
 /*
  // SERVICE FOR AJAX CALL TO FIREBASE
  // COMMENT OUT IF YOU WANT TO WORK WITH LOCAL JSON
  // THE NAME OF THE FIRST CAMPERS SHOULD BE "WORKING FROM FIREBASE"
  app.factory('getData', ['$firebaseObject', function($firebaseObject) {
    var getData = {
      async: function() {
        var ref = new Firebase("https://glowing-fire-4904.firebaseio.com/FccLond-data/");
        var obj = new $firebaseObject(ref).$loaded().then(function(res) {
          return res
        });
        return obj;
      }
    }
    return getData;
  }])*/

})();
