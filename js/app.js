'use strict';
var app = angular.module('ConfigCenter', ['tm.pagination'], function ($provide, $httpProvider, $locationProvider) {

    $provide.factory('loginHttpInterceptor', ['$q', '$rootScope', '$window', function ($q, $rootScope, $window) {
        return {
            'responseError': function (errorResponse) {
                var status = errorResponse.status;
                if (status == 401) {
                    //redirect to login page
                    $rootScope.errorMsg = errorResponse.message;
                    $window.location.href = "login.html"
                }
                return $q.reject(errorResponse);
            }
        };
    }]);


    $httpProvider.interceptors.push('loginHttpInterceptor');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});