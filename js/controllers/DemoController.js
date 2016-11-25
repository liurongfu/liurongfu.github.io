var baseUrl = "http://110.86.16.43:30009";
var getCurrentUserNameUrl = baseUrl + "/user/currentUserName";
app.controller("DemoController",function ($scope, $http) {
    $scope.paginationConf = {
            currentPage: 1,
            totalItems: 8000,
            itemsPerPage: 15,
            pagesLength: 11,
            perPageOptions: [10, 20, 30, 40, 50],
            onChange: function(){

            }
        };
});
