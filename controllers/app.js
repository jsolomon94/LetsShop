/**
 * Created by jonathan.solomon on 11/30/2016.
 */
var shopApp = angular.module('shopApp', ['ngRoute']);

shopApp.config(function($routeProvider){

    $routeProvider

    //let's make some routes for the pages that don't technically exist yet!
        .when('/',{

            templateUrl: '../public/views/home.html',
            controller: 'mainController'

        })

        .when('/clothes',{

            templateUrl: '../public/views/clothes.html',
            controller: 'clothesController'

        })

        .when('/contact',{

            templateUrl: '../public/views/contact.html',
            controller: 'contactController'

        });

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