<!DOCTYPE html>
<html ng-app="WeatherApp">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Observe Point Test</title>
        <link rel="stylesheet" type="text/css" href="css/styles.css">
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular-route.js"></script>
        <script src="http://d3js.org/d3.v3.min.js" charset="utf-8"></script>
        <script src="http://labratrevenge.com/d3-tip/javascripts/d3.tip.v0.6.3.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    </head> 
    <body>
        
        <div weather class="container-fluid" id="outter"></div>
        <div id="svgHolder" class="container-fluid"></div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script src="app.js"></script>
        <script src="controllers/Controller.js"></script>
        <script src="directives/Directive.js"></script>
        <script src="services/Service.js"></script>
        <script src="scripts/d3.js"></script>
        <script src="scripts/variousFunctions.js"></script>
    </body>   
</html>  
