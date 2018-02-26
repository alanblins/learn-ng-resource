angular.module('home')
    .config(function ($routeProvider) {
    'use strict';

    var routeConfig = {
        controller: 'HomeCtrl',
        controllerAs: 'homeCtrl',
        templateUrl: 'js/components/home/home.html'
    };

    $routeProvider
        .when('/', routeConfig)
        .otherwise({
            redirectTo: '/'
        });
});