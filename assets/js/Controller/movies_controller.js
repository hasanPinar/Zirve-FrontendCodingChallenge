angular.module('ZirveApp').controller("moviesController", ['$scope', 'srvMovies', 
function ($scope, srvMovies) {
    $scope.statusText = '';
    $scope.loading = true;
    $scope.searchParams = {
        Page: 1,
        programType: 'movie'
    };

    $scope.init = function () {
        $scope.app.subTitle = 'Popular Movies';
        $scope.moviesListGetData();
    };

    $scope.moviesListGetData = function () {
        $scope.loading = true;
        $scope.statusText = 'Loading...';
        var promiseGet = srvMovies.MoviesListGetData();//can add Search Params
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
        console.log('movie');
        info.showImage=true;
    };
}]);