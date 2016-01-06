angular.module("app")
    .controller('home-ctrl', function($http, $sce, $rootScope, reddit) {

        $rootScope.title = "Home";

        var self = this;
        self.count = 0;
        self.header = "Welcome to Ravecon"
        self.pageDescription = "The community for ravers to socialize";
        self.rows = [];
        self.comments = [];
        self.author = "";
        self.isViewing = false;
       
        self.getComments = function(row, id){
            
           if(row.data.showingComments){
               
               row.data.showingComments = false;
           }else{
               
               
               row.data.showingComments = true;
           }
           
           //Get comments for a post
            reddit.getComments(id)
                .then( function(data) {
               
                      row.data.comments = data;
                      
            });

        }
        
        self.changeBg = function(){
            
           
        }

        var url = "https://api.reddit.com/r/aves.json?jsonp=JSON_CALLBACK";
        $http.jsonp(url).success(function(data) {
            var children = data.data.children;
            self.rows = children;

        });
        
         
        self.renderHTML = function(html_code) {
            var decoded = angular.element('<textarea />').html(html_code).text();
            return $sce.trustAsHtml(decoded);
        };



    }).filter('trusted', ['$sce', function($sce) {
      
        return function(url) {
            
            if( url ){
                url = url.replace("watch?v=", "embed/")
                return $sce.trustAsResourceUrl(url);
            }
        };
    }]);;
