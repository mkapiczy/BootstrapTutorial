var crudApp = angular.module('crudApp', ['ngRoute', 'ngMockE2E']);

crudApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/home', {
            controller: 'HomeController',
            templateUrl: 'app/components/home/homeView.html'

        })
        .when('/employees', {
            controller: 'EmployeeController',
            templateUrl: 'app/components/employee/employeeView.html'
        })
        .when('/departments', {
            controller: 'DepartmentController',
            templateUrl: 'app/components/department/departmentView.html'
        })
        .when('/projects', {
            controller: 'ProjectController',
            templateUrl: 'app/components/project/projectView.html'
        })
        .when('/contact', {
            controller: 'ContactController',
            templateUrl: 'app/components/contact/contactView.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);