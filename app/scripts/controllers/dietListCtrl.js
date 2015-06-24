/**
 * Created by hyun4513 on 2015-06-19.
 */

var dietapp = angular.module('MyApp');


dietapp.controller('DietCtrl',function($scope,$http){
    //$scope.page = '종현 diet page';

    $scope.headingTitle = 'Daily Diet';


    $http.post('/diet/dietList', { params: { id: '1' } }).success(function(data) {
        $scope.diets = data;
    });

});