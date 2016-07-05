'use strict';

makeyApp
  .controller('NavigationCtrl', function ($scope, $http) {

    $http.get('http://mkbackend.sevit-grup.com/getMenu.php').then(function(response){
      $scope.Items = response.data
    });






  });
