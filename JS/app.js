(function() {
var app = angular.module("myModule", ["ngRoute"]);

app.config(function($routeProvider) {

  $routeProvider.when("/palindrome", {
        templateUrl: "Views/palindromeview.html",
        controller: "palindromeController"
    });

  $routeProvider.when("/sentiment", {
      templateUrl: "Views/sentimentview.html",
     controller: "sentimentController"
  });


    $routeProvider.otherwise({
          redirectTo: "/palindrome"
      });
});

})();
