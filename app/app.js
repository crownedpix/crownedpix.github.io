angular.module("crowned", []), angular.module("crowned").config(function(a, b) {
    a.state("login", {
        url: "/login",
        templateUrl: "app/components/login/login.html",
        controller: "login"
    }).state("main", {
        url: "/main",
        views: {
            "": {
                templateUrl: "app/components/main/main.html"
            },
            "head@main": {
                templateUrl: "app/shared/head/head.html"
            },
            "submenu@main": {
                templateUrl: "app/shared/menu/menu.html"
            }
        }
    }).state("main.about", {
        url: "/about",
        templateUrl: "app/components/about/about.html",
        controller: "about"
    }).state("main.profile", {
        url: "/profile",
        templateUrl: "app/components/profile/profile.html",
        controller: "profile"
    }), b.otherwise("/login");
});