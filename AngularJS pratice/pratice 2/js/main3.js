var app = angular.module('EventApp',[]);
app.controller('eventcontroller',function($scope){
    $scope.quantity = 0;
    $scope.fees = 0;
    $scope.total = "";
    $scope.Calc = function() {
        if($scope.quantity > 0 && $scope.fees > 0){
            $scope.total = $scope.quantity*$scope.fees;
        } else {$scope.total="Invalid Input";}
    }
})