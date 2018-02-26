angular.module('home')
	.factory('HomeService', function ($resource,CommentsService,UsersService,$q) {
		'use strict';

		return{
			listData:function(){
				var userPromise = UsersService.listItems();
				var commentsPromise = CommentsService.listAll();

				return $q.all([userPromise,commentsPromise]).then(function(data){
					var users = data[0];
					var comments = data[1];
					return {
						users:users,
						comments:comments
					};
				});
			}
		}
});

	
