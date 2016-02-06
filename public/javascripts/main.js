var app = angular.module('mbs_app',['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider
    .when('/', {
      templateUrl: 'home.html',
      controller: 'MainController'
    })

}]);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	console.log('in scope')

	$scope.processForm = function() {
		console.log('in form process')
		$http.get('http://api.indeed.com/ads/apisearch?publisher=2878037053725137&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=FJR&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2')
 		.success(function(data) {
 			console.log(data);
        })
	};
}]);

// publisher=2878037053725137

// chnl=FJR