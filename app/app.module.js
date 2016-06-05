var crudApp = angular.module('crudApp', ['ngRoute']);

crudApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'app/components/home/homeView.html'

        })
        .when('', {

        })
        .otherwise({
            redirectTo: '/home'
        });
}]);