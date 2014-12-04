angular.module('MDL', ['ngRoute', 'mdl.controllers', 'ui.bootstrap']).
config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'partials/inscription.html',
            controller: 'InscriptionController',
            access: {
                isFree: true
            }
        });

        $routeProvider.when('/ConfirmedRegister', {
            templateUrl: 'partials/confirmedInscription.html',
            controller: 'ConfirmedInscription'
        });
        
        $routeProvider.when('/League/:id', {
            templateUrl: 'partials/league.html',
            controller: 'LeagueController'
        });

    }
]);