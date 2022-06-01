var app = angular.module('myApp',[]);
app.filter('myFilter', function(){
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++){
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});
app.controller('namesCtrl', function($scope){
    $scope.names = [
        'jani',
        'carl',
        'margareth',
        'hege',
        'joe',
        'gustav',
        'birgit',
        'mary',
        'kai'
    ];
});