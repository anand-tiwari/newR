/**
 * @name ikya.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * @author Ashish Mishra <ashish.mishra@nanobianalytics.com>
 * Controller of the ikya used in login state
 */
angular.module('ikya.controllers')
  .controller('AuthCtrl', ['$scope', 'AuthService','$state','$rootScope', function ($scope, AuthService, $state,$rootScope) {
  	'use strict';
    function init(){
        $rootScope.isAuthenticated = $state.current.name;
        $scope.showLinks = false;
        // $scope.userName = 'bescom@nanobianalytics.com';
        // $scope.passWord = 'Welcome2'
        $scope.userName = 'tenantcreation8@nanobi.in';
        $scope.passWord = 'Welcome1';
    }  
    $scope.toggleLinks = function(){
        $scope.showLinks = !$scope.showLinks;
    }

    $scope.login = function(){
        AuthService.signIn($scope.userName,$scope.passWord);
    }

    $scope.logout = function(){
      $state.go('login');
      localStorage.setItem('token',null);
    }

  	init();
  }]);
  