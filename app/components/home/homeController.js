angular.module('crudApp')

.controller('HomeController', ['$scope', '$log', 'homeService', function ($scope, $log, homeService) {
    var self = this;
    $scope.employees = [];

    $scope.getEmployees = function () {
        homeService.fetchAllUsers()
            .then(
                function (data) {
                    // Funkcja eval jest niebezpieczna bo wywoła każdy javascript jaki jej damy, ale już mne szlag trafia więc ją wykorzystam xD
                    $scope.employees = data;
                    $log.info($scope.employees);
                },
                function (errResponse) {
                    $log.error('Error while fetching users ' + errResponse);
                }
            );

    };

    }]);
