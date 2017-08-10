(function() {
var app = angular.module("myModule", ["ngRoute"]);

app.config(function($routeProvider) {

  $routeProvider.when("/meme", {
      templateUrl: "views/memeview.html",
      controller: "memeController"
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
