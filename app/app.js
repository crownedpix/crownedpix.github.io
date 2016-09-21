angular.module("crowned", [ "ui.router" ]), angular.module("crowned").config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider.state("main", {
        url: "/main",
        views: {
            "": {
                templateUrl: "views/main/main.html"
            },
            "head@main": {
                templateUrl: "views/head/head.html"
            },
            "foot@main": {
                templateUrl: "views/foot/foot.html"
            }
        }
    }).state("main.front", {
        url: "/front",
        templateUrl: "views/banner/banner.html"
    }), $urlRouterProvider.otherwise("/main/front"), $locationProvider.html5Mode({
        enabled: !0,
        requireBase: !1
    });
});