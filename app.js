angular.module('WeatherApp', [
    'WeatherApp.directives',
  'WeatherApp.controllers',
  'WeatherApp.services',
  'ngRoute'
]).
config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: '/partials/partial.php',
                    controller: 'Controller'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);