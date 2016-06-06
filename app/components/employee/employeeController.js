angular.module('crudApp')

.controller('EmployeeController', ['$scope', '$log', 'employeeService', function ($scope, $log, employeeService) {
    var self = this;
    $scope.employees = [];

    $scope.getEmployees = function () {
        employeeService.fetchAllEmployees()
            .then(
                function (data) {
                    $scope.employees = data;
                    $log.info($scope.employees);
                },
                function (errResponse) {
                    $log.error('Error while fetching users ' + errResponse);
                }
            );

    };


    }]);
