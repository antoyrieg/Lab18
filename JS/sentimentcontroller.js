
(function() {
var app = angular.module("myModule");

app.controller("sentimentController", function($scope, sentimentService) {
    $scope.setSentiment = function(wordstoeval) {
       $scope.response = sentimentService.sentimentTranslate(wordstoeval);
       console.log($scope.response);
    };
  });
  $scope.pageClass = 'page-sentiment';
});
