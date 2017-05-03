'use strict';

/**
 * @ngdoc overview
 * @name angular1App
 * @description
 * # angular1App
 *
 * Main module of the application.
 */
angular
    .module('angular1App', ['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            }).when('/404', {
                templateUrl: '/404.html',
            })
            .otherwise({
                redirectTo: '404'
            });
    });