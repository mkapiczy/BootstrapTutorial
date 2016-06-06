'use strict';

/**
    Mock backendu --> https://docs.angularjs.org/api/ngMockE2E/service/$httpBackend
*/

angular.module('crudApp')

.run(['$httpBackend', function ($httpBackend) {

    var employees = [{
        name: "Kev Fox",
        city: "Warsaw"
    }, {
        name: "Kev Fox",
        city: "Warsaw"
    }, {
        name: "Kev Fox",
        city: "Warsaw"
    }];

    $httpBackend.whenGET('/employees').respond(employees);

    $httpBackend.whenPOST('/employees').respond(function(method, url, data){
       var employee = angular.fromJson(data);
        employees.push(employee);
        return [200, employee,{}];
    });

    $httpBackend.when('GET', 'app/components/home/homeView.html').passThrough();
    $httpBackend.when('GET', 'app/components/employee/employeeView.html').passThrough();
    $httpBackend.when('GET', 'app/components/department/departmentView.html').passThrough();
    $httpBackend.when('GET', 'app/components/project/projectView.html').passThrough();
    $httpBackend.when('GET', 'app/components/contact/contactView.html').passThrough();
}]);
