angular.module('WeatherApp.controllers', []).
  controller('Controller', function($scope, myService) {

      $scope.newValue = function() {
           var req = myService.getAllData();
           req.then(
              function(payload){
                  
                  var values = $("input:checked").map(function() {
                    return $(this).val();
                    }).get();
              
                $scope.weather = payload.data;
                var len = $scope.weather.length;
                $scope.year = {};
                for(var i = 0; i < len; i++){ 
                    if($scope.weather[i].Events !== null){
                        for(var j = 0; j < values.length;j++){
                            if($scope.weather[i].Events === values[j]){
                                if(!$scope.year[$scope.weather[i].year]){
                                    $scope.year[$scope.weather[i].year] = 1;
                                }else{
                                    $scope.year[$scope.weather[i].year] += 1;
                    
                                }
                            }
                        }
                    }
                }
                      generateSVG($scope.year);
              });
      };
 
});