var baseUrl = "http://110.86.16.43:30009";
var getCurrentUserNameUrl = baseUrl + "/user/currentUserName";
app.controller("MainController", function ($scope, $http) {
    $scope.userName;
    // ҳ�����
    load();
    function load() {
        // ȡ�õ�ǰ�û���
        $http.get(getCurrentUserNameUrl).success(function (userName) {
            $scope.userName = userName;
        });
    }
});
