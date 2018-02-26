angular.module('home')
	.controller('HomeCtrl', function Controller($scope, $routeParams,HomeService) {
		var vm = this;
		vm.waiting = true;
		
		HomeService.listData().then(function(data){
			vm.users = data.users;
			vm.comments = data.comments;
			vm.waiting = false;
		});
	});