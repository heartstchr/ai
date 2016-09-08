(function () {
    'use strict';

    angular
        .module('app')
        .directive('stringSet', stringSet)
        .controller('HomeController', HomeController);

    function HomeController() {
        var ai = this;
        ai.set=false;
        ai.setNumberofString=setNumberofString;

        function setNumberofString(){
        	 ai.set=true;
        }
	    ai.getTimes=function(n){
	     return new Array(n);
	   	};
    }

    function stringSet() {
        return {
          restrict: 'E',
          transclude: true,
          require: '?ngModel',
          templateUrl: '',
          scope: {},
          link: function(scope, element, attrs, ngModel) {
            
          },
        }
    }

})();