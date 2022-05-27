var app = angular.module('myApp',[]);
app.controller('FormulaOneCtrl',function($scope, $http){
    var promise
    $http.get("http://ergast.com/api/f1/2019/circuits.json");
    promise.then(function(){
        $scope.text = "request failed.";
    });
});