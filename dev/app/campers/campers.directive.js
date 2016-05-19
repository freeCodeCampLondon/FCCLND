app.directive('isoRepeat', function($timeout) {
  return {
    $scope: {
      items: '=isoRepeat'
    },
    templateUrl: "campers/campers-inner.html",
    link: function($scope, element, attrs) {
      var options = {
        animationEngine: 'jquery',
        itemSelector: 'article',
        layoutMode: 'fitRows',
        sortAscending: true
      };

      element.isotope(options);
      $scope.element = element

      $scope.$watch('campersData', function(newVal, oldVal) {
        $timeout(function() {
          element.isotope('reloadItems').isotope({
            sortBy: 'original-order'
          });
        });
      }, true);

      $scope.logHello = function() {
          element.isotope('reLayout')
        }
        // FILTERING FUNCTIONS
        // FIRST LEVEL
      $scope.filterFE = function() {
        element.isotope({
          filter: '.frontend'
        });
      };
      $scope.filterAll = function() {
        element.isotope({
          filter: '.isotope-item'
        })
      };
      $scope.filterDataVisual = function() {
        element.isotope({
          filter: '.data-visual'
        })
      }
      $scope.filterBK = function() {
          element.isotope({
            filter: '.backend'
          })
        }
        // SECOND LEVEL FE
      $scope.filterHtml = function() {
        element.isotope({
          filter: '.html-css'
        })
      }

      $scope.filterBootstrap = function() {
        element.isotope({
          filter: ' .bootstrap'
        })
      }
      $scope.filterProjFE = function() {
        element.isotope({
          filter: ' .FE-projects'
        })
      }

      $scope.filterOPP = function() {
        element.isotope({
          filter: ' .opp-f'
        })
      }
      $scope.filterBasicAlgho = function() {
        element.isotope({
          filter: ' .basic-alghorithm'
        })
      }

      $scope.filterAjax = function() {
        element.isotope({
          filter: '.ajax'
        })
      }
      $scope.filterInterFE = function() {
        element.isotope({
          filter: ' .inter-FE'
        })
      }
      $scope.filterInterAlg = function() {
        element.isotope({
          filter: ' inter-alghorithm'
        })
      }
      $scope.filterAdvAlg = function() {
        element.isotope({
          filter: 'adv-algorithm'
        })
      }

      $scope.filterAdvFEProj = function() {
        element.isotope({
          filter: 'adv-FE-projects'
        })
      }



      //DATA VISUAL
      $scope.filterSass = function() {
        element.isotope({
          filter: ' .sass'
        })
      }

      $scope.filterReact = function() {
        element.isotope({
          filter: '.react'
        })
      }

      $scope.filterReactProj = function() {
        element.isotope({
          filter: '.react-projects'
        })
      }
      $scope.filterD3 = function() {
        element.isotope({
          filter: '.d3'
        })
      }

      $scope.filterDVProj = function() {
        element.isotope({
          filter: '.data-visual-projects'
        })
      }

      //BACKEND
      $scope.filterTestD = function() {
        element.isotope({
          filter: '.test-debug'
        })
      }

      $scope.filterNodeEx = function() {
        element.isotope({
          filter: '.nodeExpress'
        })
      }

      $scope.filterGit = function() {
        element.isotope({
          filter: '.git'
        })
      }

      $scope.filterMongoDB = function() {
        element.isotope({
          filter: '.MongoDB'
        })
      }

      $scope.filterWebProj = function() {
        element.isotope({
          filter: '.web-project'
        })
      }

      $scope.filterNBProj = function() {
        element.isotope({
          filter: '.NP-projects'
        })
      }
    }
  }
});
