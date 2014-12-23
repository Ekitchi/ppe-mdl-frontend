angular.module('mdl.service', [])
.constant('_', window._)
.factory('MdlService', ['_', '$http', '$q',
					function(_, $http, $q) {


	// URL var, to change for dev purposes. Change it when you're pulling from another dev, but specifiy the URL change in the commit.
	var symfonyUrl = 'http://localhost:8888/Y2/Symfony/web/app_dev.php';

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
		// TODO : If addressField is more than 255, split into addressField2. If more, well, where the fuck do you live?
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
		// Logging in console. Just to be sure about those fucking double quotes.
		console.log(jsonObj);


		//This is where the magic happens.
        return wrapped$httpPromise({
            method: 'POST',
            // Headers not working. Delete it to actually proceed the request. Or don't. I don't care. Fuck this shit. - Angry dev @5:15PM 19/12/2014
            headers: {'Content-Type': "application/x-www-form-urlencoded"},
            url: symfonyUrl+'/user/',
            data: "data="+jsonObj
        	});
		}
	}
}])
