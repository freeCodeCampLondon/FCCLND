'use strict';

module.exports = function ($http) {
  var getData = {
    async: function () {
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
};
