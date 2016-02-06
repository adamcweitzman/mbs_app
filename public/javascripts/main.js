var app = angular.module('mbs_app',['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'MainController'
    })

}])

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	console.log('in scope')
}]);