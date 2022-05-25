var app = angular.module('gfgApp',[]);
app.controller('dateCntrl',function($scope){
    $scope.today = new Date();
})