angular.module('WeatherApp.services', []).
    service('myService', function ($http, $q) {        
     return {
    getYear : function(year) {
       return $http({
        method: 'GET', 
        url: '/model/getData.php',
        cache: true,
        params: {action: year}
      });
    },
    getAllData : function() {
       return $http({
        method: 'GET',
        cache: true,
        url: '/model/getAllData.php'

      });
    }
};
});