angular.module('mdl.service', [])
.constant('_', window._)
.factory('MdlService', ['_', '$http', '$q',
					function(_, $http, $q) {


	// URL var, to change for dev purposes. Change it when you're pulling from another dev, but specifiy the URL change in the commit.
	var symfonyUrl = 'http://localhost:8888/PPE1/Symfony/web/app_dev.php';

	// This kinda initiate the whole promise thing. Don't touch it.
	function wrapped$httpPromise(httpCallConfig) {
		var deferred = $q.defer();

		$http(httpCallConfig).
			success(function(body) {
				deferred.resolve(body);
			}).
			error(function (data) {
				deferred.reject(data);
			});
		return deferred.promise;
	};

	//Here are your multiple requests that will establish communication with the REST service.
	return {
	//We'll call this       with those params
		postUser : function(firstNameValue, lastNameValue, emailValue, passwordValue, dateOfBirthValue, phoneValue, addressValue, zipCodeValue, cityValue ) {
		// Ugliest JSON maker I've ever seen
		var obj = {};
		// Checking is address' field is equal or more than 255 chars to avoid MySQL errors by trying to put a 255+ varchar String.
		// If true, will put the 256e & + char(s) into second field.
		if ((addressValue.length) > 254){
			var partAddressValue = addressValue.match(/[\s\S]{1,254}/g) || [];
			obj.address_field_1 = partAddressValue[0];
			obj.address_field_2 = partAddressValue[1];
		}
		// If not, will send one field, and set the 2nd to null. Null factor is handled by REST service.
		else {
			obj.address_field_1 = addressValue;
			obj.address_field_2 = null;
		};
		obj.name = lastNameValue;
		obj.first_name = firstNameValue;
		obj.email = emailValue;
		obj.password = passwordValue;
		obj.date_of_birth = dateOfBirthValue;
		obj.phone_number = "33"+phoneValue;
		obj.zip_code = zipCodeValue;
		obj.city = cityValue;
		// Stringify the JSON Object to be understand by REST Service.
		var jsonObj = JSON.stringify(obj);


		// Actual request to REST Service, sending the Stringified JSON Object to be added as a new User.
        return wrapped$httpPromise({
            method: 'POST',
            headers: {'Content-Type': "application/x-www-form-urlencoded"},
            url: symfonyUrl+'/user/',
            data: "data="+jsonObj
        	});
		},

		// Login request to REST by sending login/password. Will return an HTTP response, handled in controller.js, on LoginController.
		login : function(login, password){
			return wrapped$httpPromise({
				method: 'GET',
				headers: {'Content-Type': "application/x-www-form-urlencoded"},
				url: symfonyUrl+'/user/'+login+'/'+password
			});
		},

		getLeagueList: function(){
			return wrapped$httpPromise({
				method: 'GET',
				headers: {'Content-Type': "application/x-www-form-urlencoded"},
				url: symfonyUrl+'/leagues/'
			});
		},

		getLeague: function(league_id){
			return wrapped$httpPromise({
				method:'GET',
				headers: {'Content-Type': "application/x-www-form-urlencoded"},
				url: symfonyUrl+'/league/'+league_id
			});
		},

		postLeague: function(id_president, name, email, phoneNumber, description){
			var obj = {};
			obj.id_president = id_president;
			obj.name = name;
			obj.email = email;
			obj.phoneNumber = phoneNumber;
			obj.description = description;

			var jsonObj = JSON.stringify(obj);

				return wrapped$httpPromise({
					method: 'POST',
					headers: {'Content-Type': "application/x-www-form-urlencoded"},
					url: symfonyUrl+'/leagues/',
					data: "data="+jsonObj
				});
		}

		/*getHomeData: function(){
			method: 'GET',
			headers: {'Content-Type': "application/x-www-form-urlencoded"},
			url: symfonyUrl+'/home/'
		}*/

	};
}]);
