angular.module('mdl.controllers', [])

.controller('InscriptionController', ['$scope', '$routeParams',
    function($scope, $routeParams, $window) {
        /*
        This is the Register controller.
        It's the root partial displayed at the start of the application, for the exercise purpose.
        Here you'll define the behaviour for the different input.
        You'll use the form $scope.NameOfTheInput = behaviour;
        Because it's obvious to many, the RouteProviding has been made for your convenience.
        However you will need to create the other Controllers on this page, following the same model.
        You will also need to create the other HTML Pages, with the inscription.html model.
        Good luck!
        */
        $scope.ConfirmRegister = function()
        {
        	console.log("Informations qui seront rentrées dans la DB");
        	console.log($scope.inscriptionCtrl.pseudo);
        	console.log($scope.inscriptionCtrl.nom);
        	console.log($scope.inscriptionCtrl.prenom);
        	console.log($scope.inscriptionCtrl.email);
        	console.log($scope.inscriptionCtrl.password);
        	console.log($scope.inscriptionCtrl.passwordConfirm);
        	console.log($scope.inscriptionCtrl.date);
        	console.log($scope.inscriptionCtrl.telephone);
        	
        	
        	var mdp1 = $scope.inscriptionCtrl.password;
        	var mdp2 = $scope.inscriptionCtrl.passwordConfirm;
        	
        	if (mdp1 === mdp2){
        		console.log("Mot de passe: ok");
        	}
        	else{
        		console.log("Mot de passe: ERROR");
        		/*$scope.registerForm = $scope.registerForm.$invalid;*/
        		alert('Les mots de passe ne correspondent pas');
        	}
        	
        	
               /* if ($scope.RegisterIsValid == true) {
                    $location.path('/ConfirmedRegister');
                }
                else {
                    console.log("Error in the inscription. Please review your form");
                }*/
        };

    }
    ]);