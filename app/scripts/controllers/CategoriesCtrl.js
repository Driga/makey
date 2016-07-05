'use strict';

makeyApp
  .controller('CategoriesCtrl', function ($http, $scope, DataCache) {

    $scope.Categories = DataCache.get('Categories')
    if(!$scope.Categories) {
      $http.get('http://mkbackend.sevit-grup.com/getCategories.php').then(function (response) {
        DataCache.put('Categories', response.data)
        $scope.Categories = response.data
      });
    }









  });
