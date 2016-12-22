/**
 * @name ikya
 * @description
 * # ikya
 * @author Ashish Mishra <ashish.mishra@nanobianalytics.com>
 * Main router of the application.
 */

angular.module('ikya.router', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise("/login");
    
  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "app/views/login.html",
      title:'Login',
      controller:"AuthCtrl"
    })
  
    .state('view', {
      url: "/view",
      templateUrl: "app/views/table.html",
      title:'Main View',
      controller:"ViewCtrl"
    })

    // .state('table', {
    //   url: "/table",
    //   templateUrl: "app/views/table.html",
    //   title:'Setting View',
    //   controller:"ViewCtrl"
    // })
        
});