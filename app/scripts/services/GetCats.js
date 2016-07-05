'use strict';

makeyApp
  .factory('GetCats', function (DataCache, $http) {
    var promise
    var GetCats = {
      async: function(){
        var Categories = DataCache.get('Categories')
        if (!Categories) {
          promise = $http.get('http://mkbackend.sevit-grup.com/getCategories.php').then(function (response) {
            DataCache.put('Categories', response.data)
            Categories = response.data
            return Categories
          })
        }
        return promise
      }
    }
    return GetCats
});
