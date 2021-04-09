app.controller("appController", function($scope, $state, $location,appFactory) {
    $scope.goHome = function () {
        console.log("goHome")
			$location.path('/login');
		}

});