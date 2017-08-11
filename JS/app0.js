angular.module("directiveDemo", [])
.directive("hello", function() {
    // The world's simplest directive. It's just a plain HTML "stamp".
    return {
        template: '<p>Hello There!</p>', // path to the file with HTML
    }
})
.directive("donut", function() {
    // Another plain HTML "stamp".
    return {
        templateUrl: 'partials/donut.html', // path to the file with HTML
        replace: true // replace gets rid of the extra <donut> wrapper element.
    }
})
.directive("polaroid", function() {
    // This one takes a src attribute and uses the innerHTML content for the caption.
    return {
        templateUrl: 'partials/polaroid.html', // path to the file with HTML
        transclude: true, // take the innerHTML of the directive and insert it inside the template
        scope: {
            src: "@" // this means take the src attribute and put it on the scope.
        }
    }
});
