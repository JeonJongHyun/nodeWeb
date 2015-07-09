/**
 * Created by hyun4513 on 2015-06-18.
 */


var myApp = angular.module('MyApp',['ngRoute', 'ngAnimate', 'mgcrea.ngStrap']);

myApp.config(function($routeProvider){
   // $locationProvider.html5Mode(true);
    $routeProvider
        .when('/',{
            templateUrl:'views/main.html',
            controller:'MainCtrl'
        })
        .when('/bus',{
            templateUrl:'views/bus/busList.html',
            controller:'BusCtrl'
        })
        .when('/diet',{
            templateUrl:'views/diet/dietList.html',
            controller:'DietCtrl'
        })
        .when('/login',{
            templateUrl:'views/login.html',
            controller:'LoginCtrl'
        })
        .otherwise({
        redirectTo:'/'
        });

});

myApp.controller('NavbarCtrl',function($scope){

    $scope.name = 'New App';
});