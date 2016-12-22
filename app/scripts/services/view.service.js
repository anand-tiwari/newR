'use strict';

/**
 *services/view.service.js
 * ===========
 * This service is created to use provide service to view controller.
 *
 * @class ikya.services.ViewService
 * @memberOf ikya.services
 * @author Ashish Mishra <ashish.mishra@nanobianalytics.com>
 */
angular.module('ikya.services')
.factory('ViewService', function ($http, Settings, $state, Properties, $log,$q) {

          function getDashboardAnalytics(xmlUrl){
            var defer = $q.defer();
             this.getDashboardMetaData(xmlUrl)
                .then(function(response){
                    if(response.status=="200"){
                        var analyticslist = [];
                        angular.forEach(response.data.layout_asArray,function(key,value){
                                angular.forEach(key.column_asArray,function(k,value){
                                    // for indicator .. 
                                    if(k.indicator_asArray){
                                        angular.forEach(k.indicator_asArray,function(k1,v1){
                                            analyticslist.push({
                                                id:k1.analyticid,
                                                analyticidentifier:k1.analyticidentifier,
                                                type:k.analytictype.__cdata,
                                                subtype:k1.subtype.__cdata,
                                                name:k1.analyticname.__cdata
                                            });
                                        });
                                    }else{
                                        // for table or chart 
                                            analyticslist.push({
                                            id:k.analyticid,
                                            analyticidentifier:k.analyticidentifier,
                                            type:k.analytictype.__cdata,
                                            subtype:k.subtype.__cdata,
                                            name:k.analyticname.__cdata
                                        });
                                    }  
                                })
                         });
                        defer.resolve({status:'200',data:analyticslist})
                    }else{
                            defer.resolve(response);
                        }
                },function(response){
                    defer.resolve(response);
                    });
                return defer.promise;
            };

            function getDashboardMetaData(xmlUrl){
                var deferred = $q.defer();
                if(localStorage.getItem('token')){
                    $http({
                        url: Settings.DOMAIN + '/contentserver/services/embedUtil/support/file?url=' + Settings.PUBLICPATH + xmlUrl,
                        method: "GET",
                        params: {tokenid: localStorage.getItem('token')},
                        transformResponse:function(data) {
                      // convert the data to JSON and provide
                      // it to the success function below
                            var x2js = new X2JS();
                            var json = x2js.xml_str2json( data );
                            return json;
                        }
                     })
                     .success(function (data, status, headers, config) {
                        deferred.resolve({
                            status: status,
                            data: data.dashboard
                        });
                    })
                    .error(function (data, status, headers, config) {
                        deferred.reject({
                            status: status,
                            data: data.dashboard
                        });
                    });
                }
                return deferred.promise;
            };

            function getAnalyticsData(options){
                var deferred = $q.defer();
                var format = options.format=='table'?options.format:'fcjson';
                        if(localStorage.getItem('token')){
                            $http({
                                url: Settings.DOMAIN + '/contentserver/services/content/v1/analytics/' + options.analyticId + '/' + format,
                                method: "GET",
                                params: {t: localStorage.getItem('token')},
                            }).success(function(response, status, headers, config){
                                deferred.resolve({
                                    status: status,
                                    data: response
                                });
                            }).error(function(response, status, headers, config){
                                deferred.reject({
                                    status: status,
                                    data: response
                                });
                            });  
                        }
                return deferred.promise;
            };

    return{
        getDashboardAnalytics:getDashboardAnalytics,
        getDashboardMetaData:getDashboardMetaData,
        getAnalyticsData:getAnalyticsData
    };

});