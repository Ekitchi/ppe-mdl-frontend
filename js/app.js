angular.module('MDL', ['ngRoute', 'mdl.controllers', 'mdl.service','ui.bootstrap'])
    .config(['$routeProvider',
        function($routeProvider) {

            $routeProvider.when('/', {
                templateUrl: 'partials/accueil.html',
                controller: 'AccueilController',
                access: {
                    isFree: true
                }
            });
            $routeProvider.when('/inscription', {
                templateUrl: 'partials/inscription.html',
                controller: 'InscriptionController',
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
            
            $routeProvider.when('/leagues', {
            	templateUrl: 'partials/list_leagues.html',
            	controller: 'ListLeaguesController'
            });
            
            $routeProvider.when('/profil', {
            	templateUrl: 'partials/profil.html',
            	controller: 'ProfilController'
            });
            
            $routeProvider.when('/user/:id', {
            	templateUrl: 'partials/user.html',
            	controller: 'UserController'
            });
            $routeProvider.when('/event', {
                templateUrl: 'partials/event.html',
                controller: 'EventController',
            });
            $routeProvider.when('/addevent', {
                templateUrl: 'partials/addevent.html',
                controller: 'AddEventController',
            });

        }
    ]);