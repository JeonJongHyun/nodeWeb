/**
 * Created by hyun4513 on 2015-07-08.
 */

var loginapp = angular.module('MyApp');
loginapp.controller('LoginCtrl', function($scope, Auth) {


        $scope.login = function() {

            Auth.login({ email: $scope.email, password: $scope.password });
        };
    /*
        $scope.facebookLogin = function() {
            Auth.facebookLogin();
        };
        $scope.googleLogin = function() {
            Auth.googleLogin();
        };
        $scope.pageClass = 'fadeZoom';
        */
    });