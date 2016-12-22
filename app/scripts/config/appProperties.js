'use strict';

/**
 * Properties of the ikya app
 *
 * @class ikya.services.Properties
 * @memberOf ikya.services
 * @author Ashish Mishra <ashish.mishra@nanobianalytics.com>
 * @version 1.0
 */
angular.module('ikya.services')
  .constant('Properties', {
    'Analytic_ID': 'ande84151f-13b7-4d51-a7af-5c6d59e09506',//new analytic
//    'Analytic_ID': 'an06bca451-9061-422d-944a-e3c3e3834f2c',//new analytic with formulae
//    'Analytic_ID': 'an0a37eb33-620c-43e9-9754-25b862522f08',//older analytic
//    'Mart_ID': '53f9df7f-1d6c-4ec6-84c4-5f1a72c33dce',
    'Mart_ID': '91dffee6-f128-4cbe-892d-12cce153b60d',
    'DATE_Mart_ID': 'bd7fd275-c1e3-4d1e-8441-75c7885bf1aa',
//    'DIM_ID':'589758c4-56ae-4465-a9e8-faa94f5f604f',
    'DIM_ID':'96db3570-8b3d-4cdb-b45f-5edc4bb13f16',
    
    'GAUGE_Min':50,
    'GAUGE_Max':150,
    'GAUGE_FORMATING_COLOR':['#FF0000', '#F6C600', '#60B044'],
    'GAUGE_FORMATING_VALUES':[85,95,150],
    'GAUGE_NUMBER_FORMAT':'%'
  });
