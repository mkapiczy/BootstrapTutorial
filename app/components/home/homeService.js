'use strict';

angular.module('crudApp')

    .factory('homeService', ['$http', '$q', '$log', function ($http, $q, $log) {

    return {

        fetchAllUsers: function () {
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

        saveUser: function(user){
            return $http.post('/employees')
            .then()}
    };

}]);
