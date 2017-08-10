(function() {
var app = angular.module("myModule", ["ngRoute"]);

app.config(function($routeProvider) {

  $routeProvider.when("/sentiment", {
      templateUrl: "views/memeview.html",
      controller: "sentimentController"
  });

  $routeProvider.when("/palindrome", {
        templateUrl: "views/palindromeview.html",
        controller: "palindromeController"
    });

    $routeProvider.otherwise({
          redirectTo: "/palindromeview.html"
      });





});

})();
