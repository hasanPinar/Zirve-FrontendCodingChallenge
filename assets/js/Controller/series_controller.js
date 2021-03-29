angular.module('ZirveApp').controller("seriesController", ['$scope', 'srvSeries', 
function ($scope, srvSeries) {
    $scope.statusText = '';
    $scope.loading = true;
    $scope.searchParams = {
        Page: 1,
        programType: 'series'
    };

    $scope.init = function () {
        $scope.app.subTitle = 'Popular Series';
        $scope.seriesListGetData();
    };

    $scope.seriesListGetData = function () {
        $scope.loading = true;
        $scope.statusText = 'Loading...';
        var promiseGet = srvSeries.SeriesListGetData();//can add Search Params
        promiseGet.then(function (result) {   
            $scope.List = result.data.entries.filter(function(q) {
                return q.releaseYear >= 2010 && q.programType === $scope.searchParams.programType
              });
              $scope.loading = false;
        }, function (error) {
            $scope.statusText = 'Oops, something went wrong...';
        });
    };
    
    $scope.changeShowing = function (info) {
        console.log('serie');
        info.showImage=true;
    };
}]);