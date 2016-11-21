
var baseUrl = "http://110.86.16.43:30009";

var getCurrentUserNameUrl = baseUrl + "/user/currentUserName";
app.controller("MainController", function ($scope, $location, $http, $modal, $timeout) {

    $scope.userName;

    // 警告框模块
    $scope.alerts = [];
    $scope.addAlert = function (type, message) {
        $scope.alerts.push({type: type, msg: message});
        $scope.autoHide();
    };
    $scope.closeAlert = function () {
        $scope.alerts.pop();
    };
    $scope.autoHide = function () {
        $timeout(function () {
            $scope.closeAlert();
        }, 5000);
    };

    // 页面加载
    load();
    function load() {
	alert(getCurrentUserNameUrl);
        // 取得当前用户名
        $http.get(getCurrentUserNameUrl).success(function (userName) {
            $scope.userName = userName;
        });
    }
});
