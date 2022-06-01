var app = angular.module("myApp",[]);
app.directive('w3-custom-directive', function(){
    return {
        restrict: 'A',
        remplate: '<h3>Hello AngularJS!!</h3><p>I was mad inside a Custom directive</p>'
    };
});