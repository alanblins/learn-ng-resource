angular.module('users')
	.factory('UsersResource', function ($resource) {
		'use strict';
		
		return $resource('http://localhost:3000/users/:id', null,
			{
				update: { method:'PUT' },
				'query':  {method:'GET', isArray:true},
				women: { method:'GET' , isArray:true,params:{genre:'F'}},
				men: { method:'GET' , isArray:true,params:{genre:'M'}}
			}
		);
});

	
