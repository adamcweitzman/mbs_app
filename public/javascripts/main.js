var app = angular.module('mbs_app',['ngRoute'])

app.config(['$routeProvider', function($routeProvider) {

	$routeProvider
    .when('/', {
      url: '/',
      templateUrl: 'home.html',
      controller: 'MainController'
    })
    .when('/admin', {
    	url: '/admin',
    	templateUrl: 'admin.html',
    	controller: 'MainController'
    })

}]);

app.controller('MainController', ['$scope', '$http', function($scope, $http) {
	console.log('in scope')

	$scope.processForm = function() {
		var data_array = [$scope.job_title, $scope.zipcode]
		$http({
			url: '/api',
			method: 'POST',
			withCredentials: true,
			data: data_array,
			dataType: 'jsonp',
			headers: 'Access-Control-Allow-Origin'
		})
 		.success(function(data) {
 			var data = data;
 			$scope.jobs_array = data.body.results
 			console.log($scope.jobs_array)
        })
	};
}]);

// publisher=2878037053725137

// chnl=FJR