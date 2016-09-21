angular.module("crowned", [ "ui.router" ]), angular.module("crowned").config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("front", {
        url: "/",
        templateUrl: "views/banner/banner.html"
    }), $urlRouterProvider.otherwise("/");
});