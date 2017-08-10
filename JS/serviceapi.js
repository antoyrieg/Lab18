(function() {
  var app = angular.module('myModule');

  app.factory('sentimentService', function($http) {
      var words;

      return {
        setWords: function(value) {
          words = value;
          console.log("words in sentimentService", words);
        },
        getWords: function() {
          console.log("getWords!", words);
          return words;
        }


      };
  });

}());
