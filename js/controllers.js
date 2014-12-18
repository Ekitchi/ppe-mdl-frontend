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



.controller('ConnexionController', ['$scope', '$routeParams', '$http', '$window',
	function($scope, $routeParams, $http, $window) {
		
		
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
		
		$scope.ConfirmAddLeague = function()
		{
			if($scope.addleagueForm.$valid){
				alert('Ligue créé');
				$location.path('/league/1');
				console.log($scope.addleagueName);
				console.log($scope.addleaguePresident);
			}
			else{
				alert('ERROR');
			}
			
		};
	}
])


.controller('ListLeaguesController', ['$scope', '$routeParams',
	function($scope, $routeParams, $window){
		
		$scope.leagueArray = [
			{
				'id': '001',
				'Nom': 'Ligue des Travailleurs',
				'President': 'Timothée suceur de Bites',
				'Email': 'Suceur@bite.fr',
				'Telephone': '06f0392o93u45t3r31e'
			},
			{
				'id': '002',
				'Nom': 'Ligue des Travailleuses',
				'President': 'Marine suceuse de Moules',
				'Email': 'Suceuse@moule.fr',
				'Telephone': '06m112o62u71i8l7l4e'
			},
			{
				'id': '003',
				'Nom': 'Ligue des Transparents',
				'President': 'Adrien Fantôme de merde',
				'Email': 'Fantôme@sodomisé.fr',
				'Telephone': '06b957i91t37e362'
			},
			{
				'id': '004',
				'Nom': 'Ligue des Péripatéticiennes',
				'President': 'Madame Prostipute',
				'Email': 'partouze@interraciale.fr',
				'Telephone': '06m112e62r71d8174e'
			}
		];
		
		
	}
])



.controller('ProfilController', ['$scope', '$routeParams',
	function($scope, $routeParams, $window) {
		
		$scope.profilName = "Nom de l'utilisateur";
		$scope.profilFirst_name = "Prénom de l'utilisateur";
		$scope.profilMail = "Emailde@lutisateur";
		$scope.profilDateofbirth = "66/66/6666";
		$scope.profilPhone = "0623381821";
	}
])


.controller('UserController', ['$scope', '$routeParams',
	function($scope, $routeParams, $window) {
		
		$scope.username = "Boule";
		$scope.userfirstname = "LaGrosse";
		$scope.usermail = "lagrosse@boule.fr";
		$scope.userdateofbirth = "12/10/1293";
		
		
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