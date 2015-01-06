angular.module('mdl.controllers', ['mdl.service', 'ngCookies'])

.service('cookieService', function(){
	var logged;
	return {
		getLoggedStatus: function(){
			return logged;
		},
		setLoggedStatus: function(status){
			logged = status;
		}
	}
})

.controller('IndexController', ['$scope', '$routeParams', '$location', '$window', '$http', 'MdlService', '$cookieStore', 'cookieService', 
	function($scope, $routeParams, $location, $window, $http, MdlService, $cookieStore, cookieService) {
		$scope.tokenCookie = $cookieStore.get("Token");
		$scope.logged = cookieService.getLoggedStatus;

		$scope.cookieCheck = function(){
			if($scope.tokenCookie != null){
				$scope.logged = true;
			}
			else if($scope.tokenCookie == undefined){
				$scope.logged = false;
			}
		};

		$scope.disconnect = function(){
			$cookieStore.remove("Token");
			$cookieStore.remove("User");
			cookieService.setLoggedStatus(false);
			$location.path('/');
			location.reload();
		}
	}
	])

.controller('AccueilController', ['$scope', '$routeParams', '$location', '$window', '$http', 'MdlService', '$cookieStore',
	function($scope, $routeParams, $location, $window, $http, MdlService, $cookieStore) {

	}
])

.controller('InscriptionController', ['$scope', '$routeParams', '$location', '$http','MdlService', '$cookieStore', 
	function($scope, $routeParams, $location, $http, MdlService, $cookieStore) {
    

    	$scope.autoFill = function(){
    		var randomChar = Math.random().toString(36).substring(7);
    		$scope.inscriptionName = "Poulet";
    		$scope.inscriptionFirst_name = "Frit";
    		$scope.inscriptionMail = "komjm"+randomChar+"@poulet.frit";
			$scope.inscriptionDateofbirth = "1990-02-22";
			$scope.inscriptionPhone = 0123456789;
			$scope.inscriptionAddressField = "42 Rue des PlusDe255Caractères, première porte à gauche, après la cave remplie de pedoporn asiatique, code 1242 sur le digicode. 2e étage, 4eme porte à droite après les dealers de coke de Delarue et de Valls. Passez le code 'LICRA' à Moïse le gardien, et ça devrait faire plus de 255.";
			console.log($scope.inscriptionAddressField.length);
			$scope.inscriptionZipCode = "93270";
			$scope.inscriptionCityField = "SEVRAK";
    	};
	
		$scope.ConfirmRegister = function()
		{
			if ($scope.registerForm.password.$viewValue == $scope.registerForm.passwordConfirm.$viewValue && $scope.registerForm.$valid){

				MdlService.postUser($scope.inscriptionName, $scope.inscriptionFirst_name, $scope.inscriptionMail, $scope.registerForm.password.$viewValue, $scope.inscriptionDateofbirth, $scope.inscriptionPhone, $scope.inscriptionAddressField, $scope.inscriptionZipCode, $scope.inscriptionCityField)
				.then(function success(success){
				$location.path('/connexion');
				console.log('Okay');
				},
			function error(error){
				console.log('Error accessing the REST Service. Please review the error below. \n');
				console.log(error);
            	});
        }
        else{
        	console.log("ERROR. Please review the informations.");

        }
    };
 }
])



.controller('ConnexionController', ['$scope', '$routeParams','$location', '$http', '$window', 'MdlService', '$cookieStore', 'cookieService', 
	function($scope, $routeParams, $location, $http, $window, MdlService, $cookieStore, cookieService) {
		
		// Asking REST Service if the login credentials are valid. Handle the HTTP Response.
		$scope.checkLogin = function()
		{
		MdlService.login($scope.mail, $scope.password)
		.then(function success(success){
			console.log(success);
			if (success.code == 200) {

			//This is the var to call for the logged user's token.
			$cookieStore.put("Token", success.token.token);
			$cookieStore.put("User", success.token.user);
			console.log($cookieStore.get("Token"));
			console.log($cookieStore.get("User"));
			$scope.logged = cookieService.setLoggedStatus(true);
			// Return to homepage. Maybe it's more pertinent to redirect to "Mon compte" part?
			$location.path('/');
			location.reload();
			}
		},
		function error(error){
			console.log("ERROR \n");
			console.log(error);
		});

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
				alert('Ligue créée');
				$location.path('/league/1');
				// Console.log while waiting for REST to handle/allow the request.
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
		// Mocked data
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
		$scope.profilPhone = 0623381821;
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