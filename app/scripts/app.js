'use strict';

var makeyApp = angular
  .module('makeyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap'

  ]);


makeyApp.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "views/main.html",
      controller: 'HomeCtrl'
    })
    .state('contacts', {
      url: "/contacts",
      templateUrl: "views/contacts.html",
      controller: 'ContactsCtrl'
    })
    .state('catalog', {
      url: "/catalog",
      templateUrl: "views/catalog.html",
      controller: 'CatalogCtrl'
    })
    .state('category', {
      url: "/category/:catId",
      templateUrl: "views/category.html",
      controller: 'CategoryCtrl'
    })

  $urlRouterProvider.otherwise("/");
})
