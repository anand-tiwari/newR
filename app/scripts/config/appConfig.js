'use strict';

/**
 * Configuration of the ikya app
 *
 * @class ikya.services.Settings
 * @memberOf ikya.services
 * @author Ashish Mishra <ashish.mishra@nanobianalytics.com>
 * @version 1.0
 */
angular.module('ikya.services')
  .constant('Settings', {
    'BASE_URL': 'http://172.16.0.201:8098/',
//    'BASE_URL': 'http://172.16.0.201:8090/',
    'DO': 'DataObjectServer/data/do',
    'DO_session': 'DataObjectServer/security/session',
    'DO_data':'DataObjectServer/data/do',
    'CS_dbxml':'contentserver/services/embedUtil/support/file',
    'CS_analytic':'contentserver/services/content/analytics/',
    'ANALYTIC_ASYNC_V2' : 'contentserver/services/content/v1/analytics/',
    'DOMAIN' :'http://172.16.0.11:8070/',
    'PUBLICPATH' :'http://172.16.0.11:8070/myPublicFiles/',

    'base_url':"http://172.16.0.11:8070/"
  });
