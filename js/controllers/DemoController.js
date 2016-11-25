var baseUrl = "http://110.86.16.43:30009";
var getCurrentUserNameUrl = baseUrl + "/user/currentUserName";
var searchDemoUrl = baseUrl + "/demo/list";
app.controller("DemoController",function ($scope, $http) {
    $scope.paginationConf = {
            currentPage: 1,
            totalItems: 0,
            itemsPerPage: 15,
            pagesLength: 11,
            perPageOptions: [10, 20],
            onChange: function(){
				load();
            }
        };
		
		// “≥√Êº”‘ÿ
    load();
	$scope.page = null;
	$scope.demoVoList = [];
    function load() {
	    var listDemoVoRequest = {pageNum: $scope.paginationConf.currentPage};
		$http.post(searchDemoUrl, listDemoVoRequest, {}).success(function (response) {
			$scope.page = response;
			$scope.paginationConf.totalItems = $scope.page.totalCount;
			$scope.demoVoList = $scope.page.dataList;
		});
    }
});
