angular.module('crudApp')

    .controller('HomeController', ['$scope', '$log', function ($scope, $log) {
        $log.info('Ha ha ha!');
        $scope.name = "Michał Kapiczyński";
}]);