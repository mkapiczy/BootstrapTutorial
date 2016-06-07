angular.module('crudApp')

.controller('NavigationController', ['$scope', '$location', function ($scope, $location) {
    var self = this;
    $scope.projects = [];

    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };

    }]);