var app = angular.module('ZirveApp', ['ui.router', 'oc.lazyLoad']);

app.config(function($stateProvider) {

    $stateProvider

        .state("home1", {
            url: "",
            templateUrl: "views/home.html",
            controller: 'homeController',
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('assets/js/Controller/home_controller.js');
                }]
            }
        })

        .state("home2", {
            url: "/",
            templateUrl: "views/home.html",
            controller: 'homeController',
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('assets/js/Controller/home_controller.js');
                }]
            }
        })

        .state("home3", {
            url: "/home",
            templateUrl: "views/home.html",
            controller: 'homeController',
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load('assets/js/Controller/home_controller.js');
                }]
            }
        })
        .state("movies", {
            url: "/movies",
            templateUrl: "views/movies.html",
            controller: 'moviesController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'assets/js/Controller/movies_controller.js',
                        'assets/js/Service/movies.js'
                    ]);
                }]
            }
        })
        .state("series", {
            url: "/series",
            templateUrl: "views/series.html",
            controller: 'seriesController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'assets/js/Controller/series_controller.js',
                        'assets/js/Service/series.js'
                    ]);
                }]
            }
        })
        .state('error', {
            url: "/*path",
            templateUrl: "views/404.html",
            controller: 'notFoundController',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'assets/js/Controller/not_found_controller.js'
                    ]);
                }]
            }
        })
});