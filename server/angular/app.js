(function () {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .config(config)

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'views/task/task1.html',
                controllerAs: 'ai'
            })

            .when('/task2', {
                controller: 'HomeController',
                templateUrl: 'views/task/task2.html',
                controllerAs: 'ai'
            })
                
    	//login management
            .when('/404', {
                title : '404 ',
                controller: '404Controller',
                templateUrl: 'views/404.html',
                controllerAs: 'ai'
            })

            .otherwise({ redirectTo: '/404' });
    
    }
})();
