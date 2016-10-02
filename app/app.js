angular.module("crowned", [ "ui.router" ]), angular.module("crowned").config(function($stateProvider, $urlRouterProvider) {
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
        templateUrl: "views/banner/banner.html",
        controller: "frontpageController"
    }).state("main.about", {
        url: "/about",
        templateUrl: "views/about/about.html"
    }), $urlRouterProvider.otherwise("/main/front");
}), angular.module("crowned").controller("frontpageController", function($scope, $http, $rootScope) {
    $scope.sendMail = function(contact) {
        $http({
            method: "POST",
            url: "https://api.sendgrid.com/api/mail.send.json",
            data: $.param({
                api_user: "crownedpix",
                api_key: "5thDecember",
                to: "devecha.abid@gmail.com",
                toname: "Crownedpix Admin",
                subject: "Crownedpix - Website Feedback Email",
                html: $scope.contact.message + "<p>Phone number:" + $scope.contact.phone + "</p>",
                from: $scope.contact.email
            }),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).success(function(data, status) {
            console.log(data);
        }).error(function(data, status) {
            console.log("Error " + data);
        });
    };
});