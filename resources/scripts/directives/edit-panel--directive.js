 angular.module('ravecon.directives')
    .directive('ravecon-edit', function () {
        
        return {
            
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
            controller: function(editpanel, $scope){
                $scope.vm = editpanel;
            },scope: true,
            templateUrl: 'scripts/directives/edit-panel.html'
            //link: function ($scope, element, attrs) { } //DOM manipulation
        }
    }).service('edit-panel', function(){
        var self = this;
        self.editstate = null;
        self.show = function(editstate){
            self.editstate = editstate;
           
            
        }
    });