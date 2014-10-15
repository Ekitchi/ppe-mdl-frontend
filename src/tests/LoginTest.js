describe("Login page", function() {
    var $scope,
        $location,
        back,
        $routeParams,
        $window,
        $http;

    beforeEach(module('cass.controllers'));

    beforeEach(inject(function($injector){
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.new();
        $location = $injector.get('$location');
        $window = $injector.get('$window');
        $http = $injector.get('$http');
        $routeParams = $injector.get('$routeParams');
        back = {
            "cdr258": {}
        };


        createController = function() {
            return $controller('UrlController', {
                '$scope' : $scope
            })
        }

    }))

    describe("UrlController", function() {
        var autofill;
        beforeEach(inject(function($rootScope, $controller) {
            autofill = $rootScope.$new();
            $controller("UrlController", {
                $url : scope
                });
        }));
        it("should put the URL in the input", function() {
            scope.autofill();
            expect.scope.url.toBe('cd58');
        });
    });

});