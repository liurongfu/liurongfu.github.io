/**
 * @author Raymond
 */

'use strict';

var app = angular.module("ConfigCenter", ['ui.bootstrap', 'smart-table'], function ($provide, $httpProvider, $locationProvider) {
    $provide.value('httpHeader',{"ticket":"aaaa"});

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


    $provide.factory('beforeHttpSendInterceptor',['$q', '$rootScope',function($q,$rootScope) {
        return {
            // 可选，拦截成功的请求
            request: function(config) {
                // 进行预处理
               var ticket = Cookie.get('ticket');
                if(ticket){
                    config.headers.ticket = ticket;
                }
                return config;
            }
        };
    }]);

    $httpProvider.interceptors.push('loginHttpInterceptor');
    $httpProvider.interceptors.push('beforeHttpSendInterceptor');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

//这个httpheader 会加在每一个请求上，主要用来做登陆验证   linyawen  2016.11.01
app.value('httpHeader',{"ticket":null});

var baseUrl = "http://110.86.16.43:30009";

var getCurrentUserNameUrl = baseUrl + "/user/currentUserName";

var searchEnvUrl = baseUrl + "/env/list";
var addEnvUrl = baseUrl + "/env/create";
var deleteEnvUrl = baseUrl + "/env/delete";
var activateVersionUrl = baseUrl + "/env/activate";

var addModuleUrl = baseUrl + "/module/insert";
var updateModuleUrl = baseUrl + "/module/update";
var deleteModuleUrl = baseUrl + "/module/delete";
var searchModuleUrl = baseUrl + "/module/list";

var searchVersionUrl = baseUrl + "/version/search";
var addVersionUrl = baseUrl + "/version/create";
var deleteVersionUrl = baseUrl + "/version/delete";

var getConfigUrl = baseUrl + "/config/search";
var addConfigUrl = baseUrl + "/config/create";
var updateConfigUrl = baseUrl + "/config/update";
var deleteConfigUrl = baseUrl + "/config/delete";
var previewConfigUrl = baseUrl + "/config/preview";

var searchEnvVarUrl = baseUrl + "/var/search";
var searchVarKeyUrl = baseUrl + "/var/search-key";
var addVariableUrl = baseUrl + "/var/add";
var updateVariableUrl = baseUrl + "/var/update-value";
var deleteVariableUrl = baseUrl + "/var/delete";
var getEnvValueUrl = baseUrl + "/var/env-values";
var updateEnvValue = baseUrl + "/var/update";
