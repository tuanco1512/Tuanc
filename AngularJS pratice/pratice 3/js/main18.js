var app = angular.module("myApp",[]);
app.config(function($routeProvider){
    $routeProvider
    .when("/",{
        templateUrl: "UKToursim.html"
    })
    .when("/Dorset",{
        templateUrl: "dorset.html"
    })
    .when("/Leeds",{
        templateUrl: "leeds.html"
    })
    .when("/Cardiff",{
        templateUrl: "cardiff.html"
    });
});