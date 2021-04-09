var app = angular.module("app", ['ui.router', 'ui.bootstrap', 'ngResource']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");

    $stateProvider
		.state('login', {
			url: "/login",
			views: {
				loginPage: {
					templateUrl: 'app/modules/login/login.html',
					controller: 'loginController',
				},
				
			}
		});
         $stateProvider
		.state('signup', {
			url: "/signup",
			views: {
				loginPage: {
					templateUrl: 'app/modules/login/registerUser.html',
					controller: 'registerUserController',
				},
				
			}
		})

});