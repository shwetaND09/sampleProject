app.controller('registerUserController', function($scope, appFactory){

    $scope.submitForm=function(formData){
        var request={};
        request.userName 	= formData.username.$viewValue;
		request.pwd 	= formData.password.$viewValue;
        request.fName 	= formData.fname.$viewValue;
		request.lName 	= formData.lname.$viewValue;
        console.log(request);
        appFactory.signUp(request)
			.success(function(response){
                console.log(response);
                	$rootScope.$emit("CallAppControllerSetToastMessage", ["error", "Error occurred"]);
            })
			.error(function(response){
                 console.log(response);
				$rootScope.$emit("CallAppControllerSetToastMessage", ["error", "Error occurred"]);
			});
    }


})