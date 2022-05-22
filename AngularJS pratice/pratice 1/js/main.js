var app = angular.module('costApp', []);
app.controller('CostController', function($scope){
    $scope.qty = 0;
    $scope.cost = 0;
    $scope.total = 0;
    $scope.pay = function(){
        this.total = this.qty * this.cost
    };
})