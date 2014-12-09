angular.module('mdl.controllers', [])

.controller('InscriptionController', ['$scope', '$routeParams', '$location',
	function($scope, $routeParams, $location, $window) {
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
        	
			if ($scope.registerForm.password.$viewValue == $scope.registerForm.passwordConfirm.$viewValue && $scope.registerForm.$valid){
        		console.log("Check: OK");
        		
        		console.log("Informations qui seront rentrées dans la DB:");
        		console.log("Nom:", $scope.inscriptionName);
        		console.log("Prénom:", $scope.inscriptionFirst_name);
        		console.log("Email:", $scope.inscriptionMail);
        		console.log("Mot de passe:", $scope.registerForm.password);
        		console.log("Confirmation:", $scope.registerForm.passwordConfirm);
        		console.log("Date de naissance:", $scope.inscriptionDateofbirth);
        		console.log("Téléphone:", $scope.inscriptionPhone);
        		$location.path('/connexion');
        	}
        	else{
        		console.log("Mot de passe: ERROR");
        		console.log("Mot de passe1:", $scope.inscriptionPassword);
        		console.log("Mot de passe2:", $scope.inscriptionPasswordConfirm);
        		alert('Les mots de passe ne correspondent pas');
        	}
       };
   }
])



.controller('ConnexionController', ['$scope', '$routeParams',
	function($scope, $routeParams, $window) {
		
		
		
		
	}
])




.controller('LeagueController', ['$scope', '$routeParams',
	function($scope, $routeParams, $window) {
		
		
		$scope.leaguename = "LIGUE DES GROSSES BOULES";
		$scope.leagueprez = "M. Grossesboules";
		$scope.leaguemail = "grosses@boules.fr";
		$scope.leaguephonenumber = "6666666666666";
		$scope.leaguedesc = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
		
		$scope.leagueimages = [
				"css/images/test1.jpg",
				"css/images/test2.jpg",
				"css/images/test3.jpg"
			];
	}
])



.controller('AddLeagueController', ['$scope', '$routeParams', '$location',
	function($scope, $routeParams, $location, $window) {
		
		
		
	}
])


.directive('passwordMatch', [function () {
    return {
        restrict: 'A',
        scope:true,
        require: 'ngModel',
        link: function (scope, elem, attrs, control) {
            var check = function () {
 
                //Récupérer le mot de passe de la confirmation
                var e1 = scope.$eval(attrs.ngModel); 
 
                //Récupérer le mot de passe 
                var e2 = scope.$eval(attrs.passwordMatch).$viewValue;
                return e1 == e2;
            };
            scope.$watch(check, function (isValid) {
 
                //Défini si le champ est valide ou non
                control.$setValidity("passwordMatch", isValid);
            });
        }
    };
}]);