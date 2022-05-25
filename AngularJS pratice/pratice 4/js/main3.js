var app = angular.module("myApp",[]);
app.controller('firstControllerScope',function($scope){
    $scope.firstName = "Chris";
});
app.controller('secondControllerScope',function($scope){
    $scope.lastName = "Hemsworth";
    $scope.getFullName = function(){
        return $scope.firstName + " " + $scope.lastName;
    };
});
app.controller('thirdControllerScope', function($scope){
    $scope.middleName = "Whitelaw";
    $scope.lastName = "Pine";
    $scope.getFullName = function(){
        return $scope.firstName + " " + $scope.middleName + " " + $scope.lastName;
    };
});