/**
 * Created by hyun4513 on 2015-06-18.
 */


var myApp = angular.module('MyApp',['ngRoute', 'ngAnimate', 'mgcrea.ngStrap']);

myApp.config(function($routeProvider){
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
        .otherwise({
        redirectTo:'/'
        });

});

myApp.controller('NavbarCtrl',function($scope){

    $scope.name = 'New App';
});