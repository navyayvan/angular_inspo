var bookApp = angular.module('bookApp', []);

bookApp.controller('SearchCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.name = 'Navya';
  $scope.searchTerm = '';
  $scope.movies = [];

  $scope.search = function() {
    var req = {
      url: 'http://www.omdbapi.com',
      method: 'GET',
      params: {
      s: $scope.searchTerm
      }
    }

    $http(req).then(function sucess(res) {
      if (res.status === 200) {
        $scope.movies = res.data.Search;
      }
      console.log(res);
    }, function error(res) {
      console.log(res);
    });
  }

}]);