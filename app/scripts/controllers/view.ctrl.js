/**
 * @ngdoc function
 * @name ikya.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * @author Ashish Mishra <ashish.mishra@nanobianalytics.com>
 * Controller of the ikya used in view state
 */
angular.module('ikya.controllers')
  .controller('ViewCtrl', [ '$scope','$rootScope', 'Properties','Settings', 'ViewService', '$timeout', '$state', '$log', '$http','$q','$sce',function ($scope, $rootScope,Properties, Settings, ViewService, $timeout, $state, $log,$http,$q,$sce) {
  	'use strict';

// $scope.renderHtml = function (htmlCode) {
//     return $sce.trustAsHtml(htmlCode);
// };

$scope.fetch = function(filename){
    $scope.activeMenu = filename;
    //alert(filename);
        // $('.reports-list').removeClass('active-report');
        // $(event.target).addClass('active-report');
        $.ajax({
                crossDomain: true,
                type: 'GET',
                cache: false,
                url: Settings.base_url+"DataObjectServer/data/do/readhtml",
                data: {
                    f:filename
                },
                dataType: "html",
                success: function (response) {
                    $scope.tableData= $sce.trustAsHtml(response);
                    $scope.$digest();           
                    $('#table table').attr({"class":"bordered highlight"});
                },
                error: function (response,errorType, textStatus, errorThrown) {
                    $timeout(function(){$window.location.reload()},2500);
                    console.log("error");
                }
            });
}

    $scope.download=function(filename,event){     
        var url_Path = Settings.base_url+"DataObjectServer/data/do/downloadXls";
        var html = "<form id='frmSubmit' action='" + url_Path + "' method='get'><input type='hidden' name ='f' value='"+filename+"'></form>";
        $('body').append(html);
        $('#frmSubmit').submit();
        $('#frmSubmit').remove();
    }

    $scope.init=function(){
        $.ajax({
                crossDomain: true,
                type: 'GET',
                cache: false,
                url: Settings.base_url+"DataObjectServer/data/do/generate/water",
                data: {
                    f:"water"
                },
                dataType: "html",
                success: function (response) {
                },
                error: function (response,errorType, textStatus, errorThrown) {
                    console.log("error");
                }
        });
        $scope.tablefiles = [
            {
                // "name":"SCHEME-WISE-ABSTRACT"
                "name":"Abstract-Schemewise"
            },
            {
                "name":"MPIC-ABSTRACT"
            },
            {
                "name":"MPIC-Schemes"
            },
            {
                "name":"On-going-Schemes-Category-C"
            },
            {
                "name":"Schemes-commissioned-Category-A"
            },
            {
                "name":"Expenditure-under-UIDST-SCHEMES"
            },
            {
                "name":"Expenditure-under-AMRUT"
            },
            {
                "name":"Abstract-Categorywise"
            },
            {
                "name":"NEW-Schemes-Category-D"
            },
            {
                "name":"OTHER-SCHEMES"
            },
            {
                "name":"Expenditure-under-UIDSSMT-Scheme"
            },
            {
                "name":"Expenditure-incurred-under-JNNURM-schemes"
            },
            {
                "name":"Schemes-targetted-for-commissioning-during-the-year-2016-17-Category-B"
            }
        ];

        $scope.activeMenu = $scope.tablefiles[0]["name"];
        $scope.fetch($scope.activeMenu);
    };
}]);

// On-going-Schemes-Category-C.html
// Schemes-commissioned-Category-A.html
// Expenditure-under-UIDST-SCHEMES.html
// Expenditure-under-AMRUT.html
// NEW-Schemes-Category-D.html
// OTHER-SCHEMES.html
// Expenditure-under-UIDSSMT-Scheme.html
// Expenditure-incurred-under-JNNURM-schemes.html
// Schemes-targetted-for-commissioning-during-the-year-2016-17-Category-B.html

