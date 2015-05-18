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
.controller('EventController', ['$scope','$routeParams', 'MdlService', '$cookieStore' , 'cookieService',
	function($scope, $routeParams, MdlService, $cookieStore, cookieService){


		/* Will probably never work since Back colleagues can't set their work straight.
		MdlService.getEventsList().then( function success(data){
			$scope.eventArray2 = data;
			console.log("coucou");
		}, function error(error){
			console.log("FDP");
			console.log(error);
		});*/

		$scope.eventArray = [
		{
			"titre" : "Jolie titre",
            "auteur" : "Bibi",
			"eventDate" : "12/04/67",
			"description" : "Jolie description"
		},
		{
			"titre" : "Titre magnifique",
            "auteur" : "Moi",
			"eventDate" : "12/03/12",
			"description" : "Description magnifique"
		},
		{
			"titre" : "PPE EXAM EVENT",
            "auteur" : "Travailleur",
			"eventDate" : "03/04/2015",
			"description" : "Exam de ppe"
		},
		{
			"titre" : "dfhdgrerge",
			"eventDate" : "RERERERE",
			"description" : "rzfzfezfezdzadzadzafbuagfuezhfuegfizeviezufhizeugfuzeigfueizefuzgfuezifuezifgu"
		},
		{
			"titre" : "fhzefez",
			"eventDate" : "RERERERE",
			"description" : "rzfzfezfezdzadzadzafbuagfuezhfuegfizeviezufhizeugfuzeigfueizefuzgfuezifuezifgu"
		}
		];

	}
	])
.controller('IndexController', ['$scope', '$routeParams', '$location', '$window', '$http', 'MdlService', '$cookieStore', 'cookieService',
	function($scope, $routeParams, $location, $window, $http, MdlService, $cookieStore, cookieService) {
		$scope.tokenCookie = $cookieStore.get("Token");
		$scope.logged = cookieService.getLoggedStatus;

		$scope.cookieCheck = function(){
			// On vérifie l'existence du Token-cookie afin de vérifier si l'utilisateur est déjà connecté.
			if($scope.tokenCookie != null){
				$scope.logged = true;
			}
			else if($scope.tokenCookie == undefined){
				$scope.logged = false;
			}
		};

		$scope.disconnect = function(){
			// Déconnexion, suppression du cookie Token et User.
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
						$scope.logo = function(){
							MdlService.getHomeData().then(function success(data){
								console.log(data);
							}, function error (error){
								console.log("error" + error);
							});
						};
	}
])

.controller('InscriptionController', ['$scope', '$routeParams', '$location', '$http','MdlService', '$cookieStore',
	function($scope, $routeParams, $location, $http, MdlService, $cookieStore) {


    	$scope.autoFill = function(){
				// Remplissage des champs du formulaire avec un random sur l'email pour garantir l'unicité.
    		var randomChar = Math.random().toString(36).substring(7);
    		$scope.inscriptionName = "MDL";
    		$scope.inscriptionFirst_name = "User";
    		$scope.inscriptionMail = "mdlMail"+randomChar+"@ppe.fr";
			$scope.inscriptionDateofbirth = "1990-02-22";
			$scope.inscriptionPhone = 0123456789;
			$scope.inscriptionAddressField = "42 Rue de l'inscription factice. 75020, Paris";
			console.log($scope.inscriptionAddressField.length);
			$scope.inscriptionZipCode = "93270";
			$scope.inscriptionCityField = "Paris";
    	};

		$scope.ConfirmRegister = function()
		{
					//Récupération des éléments du formulaire, envoi en DB via l'API REST (voir services.js, return postUser)
				MdlService.postUser($scope.inscriptionName, $scope.inscriptionFirst_name, $scope.inscriptionMail, $scope.inscriptionPassword, $scope.inscriptionDateofbirth, $scope.inscriptionPhone, $scope.inscriptionAddressField, $scope.inscriptionZipCode, $scope.inscriptionCityField)
				.then(function success(success){
				$location.path('/connexion');
				console.log('Okay');
				},
			function error(error){
				console.log('Error accessing the REST Service. Please review the error below. \n');
				console.log(error);
            	});
    };
 }
])



.controller('ConnexionController', ['$scope', '$routeParams','$location', '$http', '$window', 'MdlService', '$cookieStore', 'cookieService',
	function($scope, $routeParams, $location, $http, $window, MdlService, $cookieStore, cookieService) {

		// Vérification de la validité du login. On attend un code HTTP 200 dans la réponse afin de créer les cookies 'Token' et 'User' avec les informations retournées par l'API REST
		$scope.checkLogin = function()
		{
		MdlService.login($scope.mail, $scope.password)
		.then(function success(success){
			console.log(success);
			if (success.code == 200) {

			// Création des cookies
			$cookieStore.put("Token", success.token.token);
			$cookieStore.put("User", success.token.user);
			console.log($cookieStore.get("Token"));
			console.log($cookieStore.get("User"));
			$scope.logged = cookieService.setLoggedStatus(true);
			// On redirige vers l'accueil et on recharge pour prendre en compte les cookies fraichement créés.
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
.controller('LeagueController', ['$scope', '$routeParams', 'MdlService',
	function($scope, $routeParams, MdlService) {
		$scope.idLeague = $routeParams;
		console.log($scope.idLeague);
		MdlService.getLeague($scope.idLeague.id).then( function success(success) {
			$scope.leaguename = success.name;
			$scope.leagueprez = success.president.name;
			$scope.leaguemail = success.email;
			$scope.leaguephonenumber = success.phoneNumber;
			$scope.leaguedesc = success.description;

		},function error(err){
			console.log($routeParams);
			console.log(error);
		});

		$scope.leagueimages = [
				"css/images/test1.jpg",
				"css/images/test2.jpg",
				"css/images/test3.jpg"
			];
	}
])



.controller('AddLeagueController', ['$scope', '$routeParams', '$location', 'MdlService', '$cookieStore',
	function($scope, $routeParams, $location, $window, MdlService, $cookieStore) {


		$scope.ConfirmAddLeague = function()
		{
			if($scope.addleagueForm.$valid){
				alert('Ligue créée');
				$location.path('/league/1');
				$scope.user = $cookieStore.get(User);
				// Console.log while waiting for REST to handle/allow the request.
				MdlService.postLeague($scope.user.id, $scope.addleagueName, $scope.addleagueMail, $scope.addleague, $scope.addleagueDescription).then(function (success){
					//DOSUCCESS
				}, function (error){
					alert(error);
				});
			}
			else{
				alert('ERROR');
			}

		};
	}
])


.controller('ListLeaguesController', ['$scope', '$routeParams', '$window', 'MdlService',
	function($scope, $routeParams, $window, MdlService){
		// Récupération des ligues.
    $scope.getleagueArray = MdlService.getLeagueList().then(function (success){
      $scope.leagueArray = success.leagues;
    }, function(error){
      console.log(error);
      console.log("Error on promise");
    });
	}
])



.controller('ProfilController', ['$scope', '$routeParams', '$cookieStore',
	function($scope, $routeParams, $cookieStore) {

		$scope.user = $cookieStore.get("User");
		$scope.userGroupe = $scope.user.status.name;
		$scope.userStatusID = $scope.user.status.id;

		if($scope.userStatusID == 3){
			$scope.userRights = "les droits d'écriture sur la ligue à laquelle vous êtes affiliée.";
		};
		if($scope.userStatusID = 1){
			$scope.userRights = "les droits complets sur l'ensemble du site de la MDL.";
		}
	}
])


.controller('UserController', ['$scope', '$routeParams',
	function($scope, $routeParams, $window) {

		$scope.username = "Random";
		$scope.userfirstname = "User";
		$scope.usermail = "randomuser@ppe.fr";
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
}])




.controller('AddEventController', ['$scope', '$routeParams',
    function($scope, $routeParams, $window) {


    }
]);
