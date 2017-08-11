(function() {
var app = angular.module("myModule", ["ngRoute", "ngAnimate"] );

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

app.directive("header", function() {
  return {
    template: "What's your favorite word?", // path to the file with HTML
  }
})

app.directive("footer", function() {
  return {
    template: 'Copyright Grand Circus Detroit', // path to the file with HTML
  }
})


})();
