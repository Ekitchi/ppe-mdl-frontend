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
        	
			if ($scope.inscriptionPassword == $scope.inscriptionPasswordConfirm && $scope.registerForm.$valid){
        		console.log("Check: OK");
        		console.log($scope.passwordMatches = $scope.password==$scope.passwordConfirm);
        		
        		console.log("Informations qui seront rentrées dans la DB:");
        		console.log("Nom:", $scope.inscriptionName);
        		console.log("Prénom:", $scope.inscriptionFirst_name);
        		console.log("Email:", $scope.inscriptionMail);
        		console.log("Mot de passe:", $scope.inscriptionPassword);
        		console.log("Confirmation:", $scope.inscriptionPasswordConfirm);
        		console.log("Date de naissance:", $scope.inscriptionDateofbirth);
        		console.log("Téléphone:", $scope.inscriptionPhone);
        	}
        	else{
        		console.log("Mot de passe: ERROR");
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
])




.controller('LeagueController', ['$scope', '$routeParams',
	function($scope, $routeParams, $window) {
		
		$scope.leaguename = "LIGUE DES GROSSES BOULES";
		$scope.leagueprez = "M. Grossesboules";
		$scope.leaguemail = "grosses@boules.fr";
		$scope.leaguephonenumber = "6666666666666";
		$scope.leaguedesc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
		
		
		
		
		
		
			
	}
]);
