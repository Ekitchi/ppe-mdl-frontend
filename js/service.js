angular.module('mdl.service', [])
.constant('_', window._)
.factory('MdlService', ['_', '$http', '$q',
					function(_, $http, $q) {



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
		postUser : function(firstNameValue, lastNameValue, emailValue, passwordValue) {
		// Ugliest JSON maker I've ever seen
		var obj = {};
		obj.name = lastNameValue;
		obj.first_name = firstNameValue;
		obj.email = emailValue;
		obj.password = passwordValue;
		var jsonObj = JSON.stringify(obj);
		// Logging in console. Just to be sure about those fucking double quotes.
		console.log(jsonObj);


		//This is where the magic happens.
        return wrapped$httpPromise({
            method: 'POST',
            // Headers not working. Delete it to actually proceed the request. Or don't. I don't care. Fuck this shit. - Angry dev @5:15PM 19/12/2014
            headers: {'Content-Type': "application/x-www-form-urlencoded"},
            url: 'http://localhost/ppe/Symfony/web/app_dev.php/user/',
            data: "data="+jsonObj
        	});
		}
	}
}])
