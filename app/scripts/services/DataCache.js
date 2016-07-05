'use strict';

makeyApp
  .factory('DataCache', function ($cacheFactory) {
  return $cacheFactory('dataCache', {});
});
