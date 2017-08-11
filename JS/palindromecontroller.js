var app = angular.module ("myModule");
app.controller("palindromeController", function($scope, pService) {
	$scope.question=function(word) {
		$scope.response = pService.isItPalindrome(word);
		console.log($scope.response);
	};
	$scope.pageClass = 'page-palindrome';
});
