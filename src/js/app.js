angular.module('CassaFind', ['ngRoute', 'cass.services', 'cass.controllers', 'cass.services_schema', 'ui.bootstrap']).
config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'partials/login.html',
            controller: 'UrlController',
            access: {
                isFree: true
            }
        });

        $routeProvider.when('/SearchDB/:url', {
            templateUrl: 'partials/search.html',
            controller: 'SearchDB'

        });

        $routeProvider.when('/SelectedCF/:cfname', {
            templateUrl: 'partials/selectedcf.html',
            controller: 'SelectedCF'
        });
        $routeProvider.when('/SelectedRow/:cfname/:selectedRow*', {
            templateUrl: 'partials/selectedcolumn.html',
            controller: 'SelectedRow'
        });
    }
]).
run(['back_schema',
    function(back_schema) {
        back_schema.getSchema();
    }
]);