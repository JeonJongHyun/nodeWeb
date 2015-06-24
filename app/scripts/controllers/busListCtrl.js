/**
 * Created by hyun4513 on 2015-06-19.
 */

var busapp = angular.module('MyApp');


busapp.controller('BusCtrl',function($scope){
    $scope.page = 'bus page';

    $http.post('/bus/busList', { params: { id: '1' } }).success(function(data) {
        $scope.bustimes = data;
    });
});