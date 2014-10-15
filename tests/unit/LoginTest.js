describe("Login page", function() {

    var $scope,
        $rootScope,
        back_schemaMock;

    beforeEach(module('CassaFind'));

    beforeEach(inject(function($injector) {
        $rootScope = $injector.get("$rootScope");
        $scope = $rootScope.$new();
        back_schemaMock = {
            getSchema : function() {
                return "THIS IS MY SCHEMA";
            }
        };

        spyOn(back_schemaMock, 'getSchema').andCallThrough();

        $controller = $injector.get("$controller");

        $controller("UrlController", {
            '$scope' : $scope,
            'back_schema' : back_schemaMock
        });
    }));

    describe("on load", function() {

        it("should initialize model as an empty object", function() {
            expect($scope.model).toBeDefined();
        });

        it("should try to get the cassandra schema and keep it in scope", function() {
            expect(back_schemaMock.getSchema).toHaveBeenCalled();
            expect($scope.cassSchema).toBe("THIS IS MY SCHEMA");
        });
    });

    describe("autofill method", function() {

        beforeEach(function() {
            $scope.autofill();
        });

        it('should set the url to some default value', function() {
            expect($scope.url).toEqual(jasmine.any(String));
        });
    });
});
