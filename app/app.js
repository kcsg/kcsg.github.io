/*
The main angular stuff here

-Genji
*/

var landingApp = angular.module("landingApp",['ngRoute']);

/*
landingApp.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'defaultLandingController'
                templateUrl: 'views/landing-main-default.html'
            })
        
        //Define a route that has a route parameter in it
        
        .when('/customerorders/:customerID',
            {
                controller: 'CustomerOrdersController',
                templateUrl: '/app/partials/customerOrders.html'
            })
        
        .otherwise({ redirectTo: '/' });

});
*/