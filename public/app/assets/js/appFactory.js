app.factory('appFactory',['$http','gettext', function($http,gettext)
{
    signIn : (request)=>{
        
			return $http.post("http://localhost:4010/api/login", { requestData: request });
		};
        signUp : (request)=>{
        
			return $http.post("http://localhost:4010/api/register", { requestData: request });
		}
}]);