/**
 * Created by jonathan.solomon on 12/1/2016.
 */
/**
 * Created by jonathan.solomon on 11/30/2016.
 */
var shopApp = angular.module('shopApp', ['ui.router']);

shopApp.config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise('views/home.html')

    $stateProvider

    //let's make some routes for the pages that don't technically exist yet!
        .state('home',{

            url: '/home',
            templateUrl: 'views/home.html'

        })

        .state('clothes',{

            url: '/clothes',
            templateUrl: 'views/clothes.html'

        })

        .state('contact',{

            url: '/contact',
            templateUrl: 'views/contact.html'

        });

    $locationProvider.html5Mode(true);

});

shopApp.controller('mainController',function($scope){

    $scope.message = "Looks like someone is ready to go home bro.";

});

shopApp.controller('clothesController',function($scope){

    $scope.message = "You are too ready to shop bro!";

});

shopApp.controller('contactController',function($scope){

    $scope.message = "The only way you get my number is if you count to it doc.";

});