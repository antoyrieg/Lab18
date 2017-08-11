(function() {
  var app = angular.module('myModule');

  app.factory('sentimentService', function($http) {
      var input; {
      console.log("it's running");
      }
      var sentimentTranslate;
      function sentimentTranslate(setYourSentiment) {

        $http({
        method: 'POST',
        url: "https://community-sentiment.p.mashape.com/text/",
        headers: {
          "X-Mashape-Key": '5i0OBBkMW6mshw90Jkql7723n2yUp1n96uHjsnScE4aYbm3gKt',
          'Content-Type': 'application/x-www-form-urlencoded',
          "Accept": "application/json"
        },
        data: "txt=" + encodeURIComponent("")
        }).then(function(response) {
        console.log(response.data);
        }).catch(function(response) {
          console.log("FAIL", response);
        });
      }
 
    return {
       sentimentTranslate:sentimentTranslate
     }
 });

}());
