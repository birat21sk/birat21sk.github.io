'use strict';

var siteHeaderText={};

var appMain = angular.module('appMain', [
    'ngRoute',
    'rootModule',
    'homeModule',
    // 'contactModule',
    // 'aboutModule',
    'errorModule',
    // 'sidebarModule'
]);

appMain.config([
    '$routeProvider',
    
    function($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/root',
            })
            .otherwise({
                redirectTo: '/error',
            });
    }
]);
