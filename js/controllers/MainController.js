var baseUrl = "http://110.86.16.43:30009";
var getCurrentUserNameUrl = baseUrl + "/user/currentUserName";
app.controller("MainController", function ($scope, $http) {
    $scope.userName;
    // 页面加载
    load();
    function load() {
        // 取得当前用户名
        $http.get(getCurrentUserNameUrl).success(function (userName) {
            $scope.userName = userName;
        });
    }
});
