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

		postUser : function(firstNameValue, lastNameValue, emailValue, passwordValue) {
		var obj = {};
		obj.name = lastNameValue;
		obj.first_name = firstNameValue;
		obj.email = emailValue;
		obj.password = passwordValue;
		var jsonObj = JSON.stringify(obj);
		console.log(jsonObj);

        return wrapped$httpPromise({
            method: 'POST',
            headers: {'Content-Type': charset=UTF-8},
            url: 'http://localhost:8888/Y2/Symfony/web/app_dev.php/user/',
            data: jsonObj
        	});
		}
	}
}])