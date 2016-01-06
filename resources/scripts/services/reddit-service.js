angular.module("app").service('reddit', function($q, $http) {

    return {


        getComments: function(id) {

            var deferred = $q.defer();
            var all_comments = [];
            var url = "https://www.reddit.com/r/aves/comments/" + id + ".json?jsonp=JSON_CALLBACK";

            var recurse = function(array) {

                var comments = [];

                for (var i = 0; i < array.length; i++) { //Get each top/parent comment


                    var item = array[i];

                    if (typeof item !== 'undefined') {
                        comments.push(item);

                        if (typeof item.data.replies !== 'undefined' && item.data.replies !== '') {

                            item.comments = (recurse(item.data.replies));

                        }
                    }
                }

                return comments;

            }


            $http.jsonp(url).success(function(data) {

                var comments = data[1].data.children;
                all_comments = recurse(comments);
                console.log(all_comments);

                 deferred.resolve(all_comments);
                
            });

            return deferred.promise;
        }
    }



})