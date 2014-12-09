angular.module('MDL', ['ngRoute', 'mdl.controllers', 'ui.bootstrap'])
.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'partials/inscription.html',
            controller: 'InscriptionController',
            access: {
                isFree: true
            }
        });
        
        $routeProvider.when('/connexion', {
            templateUrl: 'partials/connexion.html',
            controller: 'ConnexionController'
        });
        
        $routeProvider.when('/league/:id', {
            templateUrl: 'partials/league.html',
            controller: 'LeagueController'
        });
        
        $routeProvider.when('/league', {
        	templateUrl: 'partials/add_league.html',
        	controller: 'AddLeagueController'
        });

    }
]);