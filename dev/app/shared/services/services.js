(function() {
    'use strict';
    //SERVICE FOR AJAX CALL TO LOCAL JSON
    /*
    app.factory('myService', function($http) {
    var myService = {
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
    return myService;
    });*/

    //SERVICE FOR AJAX CALL TO FIREBASE
    app.factory('myService', ['$firebaseObject', function($firebaseObject){
      var myService = {
        async: function(){
            var ref = new Firebase("https://glowing-fire-4904.firebaseio.com/FccLond-data/");
            var obj = new $firebaseObject(ref).$loaded().then(function(res){
              return res
            });
            return obj;
          }
        }
        return myService;
      }])
            
})();


