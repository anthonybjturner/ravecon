angular.module("app")
    .controller('home-ctrl', function($http, $scope, $location, $rootScope,  alert) {

        $rootScope.title = "Home";

        var self = this;
        self.header = "Welcome to Ravecon"
        self.pageDescription = "The community for ravers to socialize";
        self.rows = [];
        self.isViewing = false;
        self.bgimage = "/images/goals.png";
     



    });

