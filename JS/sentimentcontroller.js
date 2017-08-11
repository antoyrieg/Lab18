var app = angular.module("myModule");

app.controller("sentimentController", function($scope, sentimentService, $http) {

  console.log("I'm running.")
  $http({
    method: 'POST',
    url: "https://community-sentiment.p.mashape.com/text/",
    headers: {
      "X-Mashape-Key": '5i0OBBkMW6mshw90Jkql7723n2yUp1n96uHjsnScE4aYbm3gKt',
      'Content-Type': 'application/x-www-form-urlencoded',
      "Accept": "application/json"
    },
    data: "txt=" + encodeURIComponent("happy")
  }).then(function(response) {
    console.log(response.data);
  }).catch(function(response) {
    console.log("FAIL", response);
  })
})

//var promise = $http.get('https://community-sentiment.p.mashape.com/text');
