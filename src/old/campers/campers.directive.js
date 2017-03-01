'use strict';
var angular = require('angular');
var Isotope = require('isotope-layout');
var imagesLoaded = require('imagesloaded');

module.exports = function isoRepeat($timeout, $window) {
  return {
    $scope: {
      items: '=isoRepeat'
    },
    template: require('./campers-inner.html'),

    link: function ($scope, element) {
      $scope.$watch('campersData', function () {
        $timeout(function () {
          var iso;
          imagesLoaded(document.querySelector('#campers-container'), function () {
            iso = new Isotope(element[0], {
              layoutMode: 'fitRows',
              itemSelector: '.campers'
            });
            iso.shuffle();
            iso.layout();
            $scope.iso = iso;
          });
        }, true);

        // GENERAL FUNCTION FOR IS-XPAND CLASS
        function clearExpandClass(camper) {
          var campers = document.getElementsByClassName('campers'); // SELECTING ALL CAMPERS FROM DOM
          for (var i = 0; i < campers.length; i++) {
            campers[i].className = campers[i].className.replace(/\bis-expanded\b/, ''); // DELETE is-expanded CLASS FROM ALL CAMPERS
            if (campers[i] === camper) {
              camper.classList.toggle('is-expanded'); // THEN TOOGLE CLASS ON ARTICLE ELEMENT
            }
          }
        }

        // CLICK FUNCTION TO EXPAND EACH CAMPERS
        var campersContainer = document.getElementById('campers-container');
        campersContainer.addEventListener('click', function (event) {
          var itemElem = event.target.parentNode.parentNode; // GETTING UP IN THE DOM - SELECT ARTICLE FROM IMG
          clearExpandClass(itemElem); // CAL FUNCTION TO CLEAR AND TOOGLE IS-EXPAND
          $scope.iso.layout(); // ITEMS HAS BEEN RESIZING SO WE RE LAYOUT ISOTOPE GRID
        });

        angular.element($window).bind('resize', function () {
          clearExpandClass(); // CALL FUNCTION TO CLEAR - NO PARAMETER SO NO TOOGLE IS-EXPAND
          $scope.iso.layout();
        });
      });

      // FILTERING FUNCTIONS
      // FIRST LEVEL
      $scope.filterFE = function () {
        $scope.iso.arrange({
          filter: '.frontend, .frontend-all'
        });
      };
      $scope.filterAll = function () {
        $scope.iso.arrange({
          filter: ''
        });
      };
      $scope.filterDataVisual = function () {
        $scope.iso.arrange({
          filter: '.data-visual, .dv-all'
        });
      };
      $scope.filterBK = function () {
        $scope.iso.arrange({
          filter: '.backend, .backend-all'
        });
      };

      $scope.filterSupporter = function () {
        $scope.iso.arrange({
          filter: '.fcc-lnd-supporter'
        });
      };

      $scope.filterSupporter = function () {
        $scope.iso.arrange({
          filter: '.fcc-lnd-supporter'
        });
      };

      // SECOND LEVEL FE
      $scope.filterHtml = function () {
        $scope.iso.arrange({
          filter: '.html-css, .frontend-all'
        });
      };

      $scope.filterBootstrap = function () {
        $scope.iso.arrange({
          filter: ' .bootstrap, .frontend-all'
        });
      };

      $scope.filterProjFE = function () {
        $scope.iso.arrange({
          filter: ' .FE-projects, .frontend-all'
        });
      };

      $scope.filterOPP = function () {
        $scope.iso.arrange({
          filter: ' .opp-f, .frontend-all'
        });
      };

      $scope.filterBasicAlgho = function () {
        $scope.iso.arrange({
          filter: ' .basic-alghorithm, .frontend-all'
        });
      };

      $scope.filterAjax = function () {
        $scope.iso.arrange({
          filter: '.ajax, .frontend-all'
        });
      };

      $scope.filterInterFE = function () {
        $scope.iso.arrange({
          filter: ' .inter-FE, .frontend-all'
        });
      };

      $scope.filterInterAlg = function () {
        $scope.iso.arrange({
          filter: ' .inter-alghorithm, .frontend-all'
        });
      };

      $scope.filterAdvAlg = function () {
        $scope.iso.arrange({
          filter: '.adv-algorithm, .frontend-all'
        });
      };

      $scope.filterAdvFEProj = function () {
        $scope.iso.arrange({
          filter: '.adv-FE-projects, frontend-all'
        });
      };

      // DATA VISUAL
      $scope.filterSass = function () {
        $scope.iso.arrange({
          filter: ' .sass, .dv-all'
        });
      };

      $scope.filterReact = function () {
        $scope.iso.arrange({
          filter: '.react,  .dv-all'
        });
      };

      $scope.filterReactProj = function () {
        $scope.iso.arrange({
          filter: '.react-projects,  .dv-all'
        });
      };

      $scope.filterD3 = function () {
        $scope.iso.arrange({
          filter: '.d3,  .dv-all'
        });
      };

      $scope.filterDVProj = function () {
        $scope.iso.arrange({
          filter: '.data-visual-projects,  .dv-all'
        });
      };

      // BACKEND
      $scope.filterTestD = function () {
        $scope.iso.arrange({
          filter: '.test-debug, .backend-all'
        });
      };

      $scope.filterNodeEx = function () {
        $scope.iso.arrange({
          filter: '.nodeExpress,  .backend-all'
        });
      };

      $scope.filterGit = function () {
        $scope.iso.arrange({
          filter: '.git,  .backend-all'
        });
      };

      $scope.filterMongoDB = function () {
        $scope.iso.arrange({
          filter: '.MongoDB,  .backend-all'
        });
      };

      $scope.filterWebProj = function () {
        $scope.iso.arrange({
          filter: '.web-project,  .backend-all'
        });
      };

      $scope.filterNBProj = function () {
        $scope.iso.arrange({
          filter: '.NP-projects,  .backend-all'
        });
      };
    }
  };
};
