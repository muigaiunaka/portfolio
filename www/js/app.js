// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('portfolio', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// CONFIG

.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('featured', {
                url: '/',
                templateUrl: 'views/featured.html',
                controller: 'FeaturedCtrl'
            })
            .state('portfolio', {
                url: '/portfolio',
                templateUrl: 'views/portfolio.html',
                controller: 'FeaturedCtrl'
            })
            .state('about', {
                url: "/about",
                templateUrl: 'views/about.html'
            });
        $urlRouterProvider.otherwise('/featured');
    })

// CONTROLLER

.controller('FeaturedCtrl', function($scope)  {
  $scope.all = [{
      featured: true,
      id: 'nf',
      name: "Nifty",
      status: "In Progress",
      type: "Progressive Web App",
      stack: "MongoDB.js, Ionic, Angular.js, "+'\n'+"Express, Node.js, Heroku, Cordova",
      role: "Front End Developer",
      repo: 'https://github.com/shivisingh94/Nifty',
      images: ['shadow.png', 'bottomimg2.png', 'middleimg2.png', 'topimg2.png']
    }, {
      featured: true,
      id: 'pa',
      name: "Project Aether",
      status: "In Progress",
      type: "Mobile App Game",
      stack: "C#, Unity3D, Maya",
      role: "Unity Developer",
      repo: 'https://github.com/muigaiunaka/AR-Game',
      images: ['shadow.png', 'bottomimg2.png', 'middleimg2.png', 'topimg2.png']
    }, {
      featured: true,
      id: 'me',
      name: "Music Editor",
      status: "Complete",
      type: "Java Software",
      stack: "Java, Swing",
      role: "Developer",
      repo: "https://github.com/muigaiunaka/MusicEditor",
      images: ['shadow.png', 'bottomimg2.png', 'middleimg2.png', 'topimg2.png']
    }, {
      featured: true,
      id: 'rvms',
      name: "RVMS Website",
      status: "Complete",
      type: "Wordpress Theme",
      stack: "HTML5, CSS3, Javascript, MySQL, PHP",
      role: "Designer, Project Manager",
      repo: "",
      images: ['rvms-mid.png', 'rvms-top.png']
    }, {
      featured: false,
      name: "Friends of Frieda Garcia Park",
      status: "In Progress",
      type: "Wordpress Theme",
      stack: "HTML5, CSS3, Javascript, MySQL, PHP",
      role: "Designer, Project Manager",
      repo: "",
      images: ['shadow.png', 'bottomimg2.png', 'middleimg2.png', 'topimg2.png']
    }, {
      featured: false,
      name: "Japanese Kana Educational Poster",
      status: "Complete",
      type: "Poster",
      role: "Designer",
      images: ['shadow.png', 'bottomimg2.png', 'middleimg2.png', 'topimg2.png']
    }, {
      featured: false,
      name: "Creepy Puppet Website Concept",
      images: ['shadow.png', 'bottomimg2.png', 'middleimg2.png', 'topimg2.png']
    }, {
      featured: false,
      name: "Creepy Puppet Website Concept",
      images: ['shadow.png', 'bottomimg2.png', 'middleimg2.png', 'topimg2.png']
    }, {
      featured: false,
      name: "Creepy Puppet Website Concept",
      images: ['shadow.png', 'bottomimg2.png', 'middleimg2.png', 'topimg2.png']
    }, {
      featured: false,
      name: "Creepy Puppet Website Concept",
      images: ['shadow.png', 'bottomimg2.png', 'middleimg2.png', 'topimg2.png']
    }, {
      featured: false,
      name: "Creepy Puppet Website Concept",
      images: ['shadow.png', 'bottomimg2.png', 'middleimg2.png', 'topimg2.png']
    }, {
      featured: false,
      name: "Creepy Puppet Website Concept",
      images: ['shadow.png', 'bottomimg2.png', 'middleimg2.png', 'topimg2.png']
    }, {
      featured: false,
      name: "Creepy Puppet Website Concept",
      images: ['shadow.png', 'bottomimg2.png', 'middleimg2.png', 'topimg2.png']
    }
  ];


  $scope.setFeatured = function() {
    // initialize the array
    var featuredProjects = [];
    // Adds an object to a featured projects array
    angular.forEach($scope.all, function(value, key) {
      if (value.featured) {
        featuredProjects.push($scope.all[key]);
      }
    })
    return featuredProjects;
  }


  $scope.featured = {
    projects: $scope.setFeatured(),
    width: "" + $scope.setFeatured().length*100 + "vw"
  }

// SLIDER DATA

  $scope.data = {};
    $scope.data.bgColors = [];
    $scope.data.currentPage = 0;

    var setupSlider = function() {
      //some options to pass to our slider
      $scope.data.sliderOptions = {
        initialSlide: 0,
        direction: 'horizontal', //or vertical
        speed: 300 //0.3s transition
      };

      //create delegate reference to link with slider
      $scope.data.sliderDelegate = null;

      //watch our sliderDelegate reference, and use it when it becomes available
      $scope.$watch('data.sliderDelegate', function(newVal, oldVal) {
        if (newVal != null) {
          $scope.data.sliderDelegate.on('slideChangeEnd', function() {
            $scope.data.currentPage = $scope.data.sliderDelegate.activeIndex;
            //use $scope.$apply() to refresh any content external to the slider
            $scope.$apply();
          });
        }
      });
    };

    setupSlider();
})
