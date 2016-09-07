(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngSanitize', 'ui.select', 'ui.bootstrap'])
        .config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'MainController',
                controllerAs: 'ai'
            })

            .when('/about', {
                controller: 'MainController',
                templateUrl: 'views/about.html',
                controllerAs: 'ai'
            })

            .otherwise({ redirectTo: '/404' });
    
    }

    MainController.$inject = [];
    function MainController() {
        var ai = this;
    }    
})();
