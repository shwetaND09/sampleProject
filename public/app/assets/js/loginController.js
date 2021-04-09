app.controller('loginController', function($scope, appFactory){

    $scope.submitLoginForm=function(formData){
        var request={};
        request.userName 	= formData.username.$viewValue;
		request.pwd 	= formData.password.$viewValue;
        console.log(request);
        appFactory.signIn(request)
			.success(function(response){
                console.log(response);
                	$rootScope.$emit("CallAppControllerSetToastMessage", ["error", "Error occurred"]);
            })
			.error(function(response){
                 console.log(response);
				$rootScope.$emit("CallAppControllerSetToastMessage", ["error", "Error occurred"]);
			});
    };
    $scope.register=function(){
        $location.path('/login');
    }


})