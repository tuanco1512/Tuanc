var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
    $scope.name='';
    $scope.quantity1=0;
    $scope.fees1=4;
    $scope.total1="";
    $scope.Calc1 = function(){
        if ($scope.quantity1>0){
            $scope.total1=$scope.quantity1*$scope.fees1;
        }
        else{$scope.total1="invalid Input"}
    } 
    $scope.quantity2=0;
    $scope.fees2=8;
    $scope.total2="";
    $scope.Calc2 = function(){
        if ($scope.quantity2>0){
            $scope.total2=$scope.quantity2*$scope.fees2;
        }
        else{$scope.total2="invalid Input"}
    } 
    $scope.quantity3=0;
    $scope.fees3=10;
    $scope.total3="";
    $scope.Calc3 = function(){
        if ($scope.quantity3>0){
            $scope.total3=$scope.quantity3*$scope.fees3;
        }
        else{$scope.total3="invalid Input"}
    } 
    $scope.total=""
    $scope.Calc = function(){
        if($scope.total1=="invalid Input" || $scope.total2=="invalid Input" || $scope.total3=="invalid Input"){
            $scope.total="Inbalid Input"
        }
        else{$scope.total=$scope.total1+$scope.total2+$scope.total3;}
    }
    $scope.Reset = function(){
        $scope.quantity1=0;
        $scope.fees1=4;
        $scope.total1="";
        $scope.quantity2=0;
        $scope.fees2=8;
        $scope.total2="";
        $scope.quantity3=0;
        $scope.fees3=10;
        $scope.total3="";
        $scope.total=""
    }
})
