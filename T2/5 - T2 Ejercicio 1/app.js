var app = angular.module('stockApp', []);

app.controller('HelloController', function($scope){
	$scope.patata = $scope.check ? "Si" : "No";
});
