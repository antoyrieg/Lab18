var app= angular.module("myModule");
app.factory("pService", function() {
	var string;
	function isItPalindrome(string) {
	    if (string == string.split('').reverse().join('')) {
        	return string + " is a Palindrome.";
    	} else {
        	return string + " is not a Palindrome.";
    	}
    };

    	return {
    		isItPalindrome: isItPalindrome
		}
	});
