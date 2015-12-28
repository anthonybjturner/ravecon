angular.module("app")
    .controller('friends-ctrl', function($http, $location, $rootScope, alert) {
        $rootScope.title = "Friends"
        
        var self = this;
        self.header = "Friends List"
        self.pageDescription = "Keep in contact with your Fitness App friends";
        self.rows = [];
        self.isViewing = false;
        self.bgimage = "/images/friends.jpg";

        self.row = {};
        self.term = null;
        self.choices = [];

        self.users_id = null;

        $http.get('/friend').then(function(data) {
        
            if (data.data)
                self.rows = data.data;

        });



        self.search = function() {

            if (self.term && self.term.length > 1) {
                $http.get("/user/search/" + self.term)
                    .success(function(data) {

                        self.choices = data;
                    });

            }
        }

        self.add = function(row) {

            //  self.row.users_name = choice.users_name;
            //  self.row.users_avatar = choice.users_avatar;;
            //  self.row.users_id = choice.users_id;
            row.friends_user_id = row.users_id;
            row.users_id = null;
            $http.post('/friend', row).success(function(data) {

                alert.show("Friend " + row.users_name + " added successfully.", 'success');
            });
            self.choices = [];

        }


        self.delete = function(row, index) {


            
        }

        self.confirm = function() {


        }

        //Details button
        self.details = function(row, index) {

           
        }



        //Details button
        self.edit = function(row, index) {

            row.isEditing = true;
        }

        //Details button
        self.create = function() {


            self.rows.push({
                isEditing: true
            });
            $http.get('/user').then(function(data) {

                if (data.data)
                    self.users = data.data;

            });


        }

        self.saveSelected = function(row, index) {

            self.newFriend = row;
            console.log(self.newFriend)
        }

        self.save = function(user, index) {

            var row = self.newFriend;


            $http.post('/friend', row)
                .success(function(data) {

                    data.isEditing = false;
                    self.rows[index] = data;

                }).error(function(data) {

                    alert.show(data.code, 'danger');

                });
        }
    });
