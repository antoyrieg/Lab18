<<<<<<< Updated upstream
var app = angular.module ("myModule");
app.controller("sentimentController", function($scope, pService) {

});
=======
(function() {
var app = angular.module("myModule");

app.controller("sentimentController", function($scope, sentimentService) {
    $scope.setSentiment = function(wordstoeval) {
       $scope.response = sentimentService.sentimentTranslate(wordstoeval);
       console.log($scope.response);
    };


  });
});
//var promise = $http.get('https://community-sentiment.p.mashape.com/text');
>>>>>>> Stashed changes
