angular.module("app", ['ngRoute',  'ravecon.directives'])
  .config(function($routeProvider) {


            $routeProvider.
             when('/', {

                templateUrl: '/views/home/home-list.html',
                controller: 'home-ctrl', controllerAs: 'vm'

              }).
              when('/messages', {

                templateUrl: '/views/messages/messages-list.html',
                controller: 'messages-ctrl', controllerAs: 'vm'

              }).
              when('/messages/:id', {

                templateUrl: '/views/messages/messages-detail.html',
                controller: 'messages-detail-ctrl', controllerAs: 'vm'

              }).when('/users', {

                templateUrl: '/views/users/users-list.html',
                controller: 'users-ctrl', controllerAs: 'vm'

              }).
              when('/users/:id', {

                templateUrl: '/views/users/users-detail.html',
                controller: 'users-detail-ctrl', controllerAs: 'vm'

              }).when('/friends', {

                templateUrl: '/views/friends/friends-list.html',
                controller: 'friends-ctrl', controllerAs: 'vm'

              }).when('/friends/:id', {

                templateUrl: '/views/friends/friends-detail.html',
                controller: 'friends-detail-ctrl', controllerAs: 'vm'

              }).when('/profiles', {

                templateUrl: '/views/profiles/profiles-list.html',
                controller: 'profiles-ctrl', controllerAs: 'vm'

              }).
              when('/profiles/:id', {

                templateUrl: '/views/profiles/profiles-detail.html',
                controller: 'profiles-detail-ctrl', controllerAs: 'vm'

              }).when('/login', {

                templateUrl: '/views/authentication/login.html',
                controller: 'login-ctrl', controllerAs: 'vm'

              }).
              otherwise({

                redirectTo: '/'

              });
}).run( function($rootScope, $location, $http, alert) {	
  
    $rootScope.loggedIn = true;
      
 		 
           // register listener to watch route changes		  
           $rootScope.$on( "$routeChangeStart", function(event, next, current) {		    
       		       
       		        if( alert.msg )//clear out any alerts when entering new page
                    alert.msg= null;
                    
       		        $http.get('/express.php?action=login').then(function(results){
                      
                    if( results.data.errors ){
                          
                       $rootScope.loggedIn = false;
                    
                       if ( next.templateUrl != "/views/authentication/login.html" ) {	
                             
                              // Not going to #login,  redirect needed
                              $location.url("/login")
                              
                            }
                         }
                        
       		        });
                        
         })
     
     });
     
     
     