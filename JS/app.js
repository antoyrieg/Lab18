(function() {
var app = angular.module("myModule", ["ngRoute"]);

app.config(function($routeProvider) {

  $routeProvider.when("/palindrome", {
        templateUrl: "views/palindromeview.html",
        controller: "palindromeController"
    });

  $routeProvider.when("/sentiment", {
      templateUrl: "views/sentiment.html",
     controller: "sentimentController"
  });


    $routeProvider.otherwise({
          redirectTo: "/palindrome"
      });
});

})();
