angular.module("app")
    .controller('facebook-ctrl', function($rootScope, facebook, $location, $http) {
        var self = this;
        facebook.getUser().then(function(fbUser) {

            if (fbUser) {

                self.fbUser = fbUser;

            }
            else {
                //The user has been logged out, so redirect them to login page
                $location.url("/login");


            }
        });
        self.status = "Not Checked Yet."

        self.login = function() {

            facebook.login().then(function(fbUser) {

                self.fbUser = fbUser;
               
                $http.post('/fbLocalLogin', {
                    facebookUser: fbUser
                }).then(function(data) {
            
                    $rootScope.loggedIn = true;
                       self.fbUser = fbUser;
                    $location.url("/");

                })

            })
        }
    })