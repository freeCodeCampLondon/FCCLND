'use strict';

var imagesLoaded = require('imagesloaded');

module.exports = function isoRepeat($timeout, $window) {

  var width = $window.innerWidth;

  return {
    $scope: {
      items: '=isoRepeat'
    },
    templateUrl: "campers/campers-inner.html",
    link: function ($scope, element, attrs) {
      var options = {
        animationEngine: 'jquery',
        itemSelector: 'article',
        layoutMode: 'fitRows',
        sortAscending: true
      };

      element.isotope(options);
      $scope.element = element;

      $scope.$watch('campersData', function (newVal, oldVal) {
        $timeout(function () {
          imagesLoaded(document.querySelector('#campers-container'), function (instance) {
            element.isotope('reloadItems').isotope();
            element.isotope('shuffle'); //THAT S HAPPEN WHEN LOAD PAGE
          });
        });
      }, true);

      angular.element($window).bind('resize', function () {
        width = $window.innerWidth;
        element.isotope('reloadItems').isotope();
        element.isotope('shuffle'); //THAT S HAPPEN on RESIZE
      });

      // FILTERING FUNCTIONS
      // FIRST LEVEL
      $scope.filterFE = function () {
        element.isotope({
          filter: '.frontend, .frontend-all'
        });
      };
      $scope.filterAll = function () {
        element.isotope({
          filter: '.isotope-item'
        });
      };
      $scope.filterDataVisual = function () {
        element.isotope({
          filter: '.data-visual, .dv-all'
        });
      };
      $scope.filterBK = function () {
        element.isotope({
          filter: '.backend .backend-all'
        });
      };
      // SECOND LEVEL FE
      $scope.filterHtml = function () {
        element.isotope({
          filter: '.html-css, .frontend-all'
        });
      };

      $scope.filterBootstrap = function () {
        element.isotope({
          filter: ' .bootstrap, .frontend-all'
        });
      };

      $scope.filterProjFE = function () {
        element.isotope({
          filter: ' .FE-projects, .frontend-all'
        });
      };

      $scope.filterOPP = function () {
        element.isotope({
          filter: ' .opp-f, .frontend-all'
        });
      };

      $scope.filterBasicAlgho = function () {
        element.isotope({
          filter: ' .basic-alghorithm, .frontend-all'
        });
      };

      $scope.filterAjax = function () {
        element.isotope({
          filter: '.ajax, .frontend-all'
        });
      };

      $scope.filterInterFE = function () {
        element.isotope({
          filter: ' .inter-FE, .frontend-all'
        });
      };

      $scope.filterInterAlg = function () {
        element.isotope({
          filter: ' .inter-alghorithm, .frontend-all'
        });
      };

      $scope.filterAdvAlg = function () {
        element.isotope({
          filter: '.adv-algorithm, .frontend-all'
        });
      };

      $scope.filterAdvFEProj = function () {
        element.isotope({
          filter: '.adv-FE-projects, frontend-all'
        });
      };



      //DATA VISUAL
      $scope.filterSass = function () {
        element.isotope({
          filter: ' .sass, .dv-all'
        });
      };

      $scope.filterReact = function () {
        element.isotope({
          filter: '.react,  .dv-all'
        });
      };

      $scope.filterReactProj = function () {
        element.isotope({
          filter: '.react-projects,  .dv-all'
        });
      };

      $scope.filterD3 = function () {
        element.isotope({
          filter: '.d3,  .dv-all'
        });
      };

      $scope.filterDVProj = function () {
        element.isotope({
          filter: '.data-visual-projects,  .dv-all'
        });
      };

      //BACKEND
      $scope.filterTestD = function () {
        element.isotope({
          filter: '.test-debug, .backend-all'
        });
      };

      $scope.filterNodeEx = function () {
        element.isotope({
          filter: '.nodeExpress,  .backend-all'
        });
      };

      $scope.filterGit = function () {
        element.isotope({
          filter: '.git,  .backend-all'
        });
      };

      $scope.filterMongoDB = function () {
        element.isotope({
          filter: '.MongoDB,  .backend-all'
        });
      };

      $scope.filterWebProj = function () {
        element.isotope({
          filter: '.web-project,  .backend-all'
        });
      };

      $scope.filterNBProj = function () {
        element.isotope({
          filter: '.NP-projects,  .backend-all'
        });
      };
    }
  };

};
