'use strict';

makeyApp
    .controller('CatalogCtrl', function ($http, $scope, DataCache, GetCats) {
        // Products

        var getProducts = function(parent) {
            $scope.filteredProducts = []
            $scope.currentPage = 1
            $scope.numPerPage = 9
            $scope.maxSize = 5
            $scope.Products = DataCache.get('Products')

            
            if (!$scope.Products || $scope.currentCat != parent) {
                console.log('http-start')
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
            console.log('http-end')
        }

        getProducts(0)
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


        $scope.model = 0;
        $scope.initSlider = function() {
            $(function() {
                // wait till load event fires so all resources are available
                $scope.$slider = $(".fancybox").fancybox({
                    openEffect	: 'none',
                    closeEffect	: 'none'
                });
            });


        };

        $scope.initSlider();
    });
