angular.module('WeatherApp.directives', []).
directive('weather', function() {
  return {
    restrict: 'A',
    controller: 'Controller',
    templateUrl: 'partials/partial2.php'
  }; 
});