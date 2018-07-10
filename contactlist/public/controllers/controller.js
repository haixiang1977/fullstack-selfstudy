// frontend code
var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('/contactList').success(function(response) {
        console.log("i get the data from i request");
        $scope.contactList = response;
    });
}]);
