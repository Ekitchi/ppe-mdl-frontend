/*
This is the requiered components to bind our webapp to the REST Service provided by the other team.
Please add $http and $q to your service factory dependencies.
*/

// This is to add before any of your service functions.

function wrapped$httpPromise(httpCallConfig) {
    var deferred = $q.defer();

    $http(httpCallConfig).
    success(function(body) {
        deferred.resolve(body);
    }).
    error(function(data) {
        deferred.reject(data);
    });

    return deferred.promise;
}


// You will need to make a return statement. This statement contains all your back request. There is one return, which includes you different function.

// Those are the GET request.

return {
    getHome: function() {
        return wrapped$httpPromise({
            method: 'GET',
            url: '/home/'
        });
    },

    getListeLeagues: function() {
        return wrapped$httpPromise({
            method: 'GET',
            url: '/leagues/'
        });
    },
    getMap: function() {
        return wrapped$httpPromise({
            method: 'GET',
            url: '/map/'
        })
    },
};