'use strict';

angular.module('crudApp')

    .factory('employeeService', ['$http', '$q', '$log', function ($http, $q, $log) {

    return {

        fetchAllEmployees: function () {
            return $http.get('/employees')
                .then(
                    function (response) {
                        $log.info(response);
                        return angular.fromJson(response.data);
                    },
                    function (errResponse) {
                        console.error('Error while fetching users');
                        return $q.reject(errResponse);
                    }
                );
        },

        saveEmployee: function(employee){
            return $http.post('/employees')
            .then()}
    };

}]);
