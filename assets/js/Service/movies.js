angular.module('ZirveApp').service('srvMovies', ['$http', function ($http) {
    this.MoviesListGetData = function () {//can add Search Params
        var request = $http({
            method: 'get',
            url: 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'
            //params: SearchParams
        });
        return request;
    };
}]);