angular.module('mdl.service', [])
.constant('_', window._)
.factory('MdlService', ['_', '$http', '$q',
					function(_, $http, $q) {


	// URL var, to change for dev purposes. Change it when you're pulling from another dev, but specifiy the URL change in the commit.
	var symfonyUrl = 'http://localhost/dev/M2L/web/app_dev.php';

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
		if ((addressValue.length) > 254){
			var partAddressValue = addressValue.match(/[\s\S]{1,254}/g) || [];
			obj.address_field_1 = partAddressValue[0];
			obj.address_field_2 = partAddressValue[1];
			var isAddressValueSplit = true;
		}
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
		var jsonObj = JSON.stringify(obj);


		//This is where the magic happens.
        return wrapped$httpPromise({
            method: 'POST',
            headers: {'Content-Type': "application/x-www-form-urlencoded"},
            url: symfonyUrl+'/user/',
            data: "data="+jsonObj
        	});
		},

		login : function(login, password){
			return wrapped$httpPromise({
				method: 'GET',
				headers: {'Content-Type': "application/x-www-form-urlencoded"},
				url: symfonyUrl+'/user/'+login+'/'+password
			});
		}
	}
}])
