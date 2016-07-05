'use strict';

makeyApp
    .controller('CategoryCtrl', function ($http, $scope, DataCache, GetCats, $stateParams) {
        // Products
        var getProducts = function(parent) {
            $scope.filteredProducts = []
            $scope.currentPage = 1
            $scope.numPerPage = 9
            $scope.maxSize = 5
            $scope.Products = DataCache.get('Products')

            if (!$scope.Products || $scope.currentCat != parent) {
                $http.get('http://mkbackend.sevit-grup.com/getCatalog.php?parent='+parent).then(function (response) {
                    DataCache.put('Products', response.data)
                    $scope.Products = response.data
                    $scope.filteredProducts = $scope.Products
                    $scope.currentCat = parent
                })
            }else{
                $scope.filteredProducts = $scope.Products
                $scope.currentCat = parent
            }
        }

        getProducts($stateParams.catId)
        $scope.reverseFn = function(){
            if($scope.reverse){
                $scope.reverse = false;
            }else{
                $scope.reverse = true;
            }
        }



        GetCats.async().then(function(d){
            $scope.Categories = d
        })

        $scope.$watch('currentPage + numPerPage', function() {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            if($scope.Products) $scope.filteredProducts = $scope.Products.slice(begin, end);
        });
    });
