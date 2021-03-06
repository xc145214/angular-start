/**
 * Created by Administrator on 2015/4/7.
 */
//Define an angular module for our app
var sampleApp = angular.module('sampleApp', []);

//Define Routing for app
//Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
//Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController
sampleApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/AddNewOrder', {
                templateUrl: 'pages/add_order.html',
                controller: 'AddOrderController'
            })
            .when('/ShowOrders', {
                templateUrl: 'pages/show_orders.html',
                controller: 'ShowOrdersController'
            })
            .when('/ShowOrder/:orderId', {
                templateUrl: 'pages/show_order.html',
                controller: 'ShowOrderController'
            })
            .otherwise({
                redirectTo: '/AddNewOrder'
            });
    }]);


sampleApp.controller('AddOrderController', function ($scope) {
    $scope.message = 'This is Add new order screen';
});


sampleApp.controller('ShowOrdersController', function ($scope) {
    $scope.message = 'This is Show orders screen';
});

sampleApp.controller('ShowOrderController', function ($scope, $routeParams) {
    $scope.order_id = $routeParams.orderId;
})

