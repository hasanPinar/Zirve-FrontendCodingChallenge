    app.controller("AppController", ['$scope', function ($scope) {
	$scope.app = {
                name: 'Zirve App',
                description: 'Zirve App test....',
                author: 'Hasan PINAR',
                year: new Date().getFullYear(),
                version: '1.0.0.0',
                mainTitle: 'DEMO Streaming',
                subTitle: 'Popular Titles'
            };
}]);