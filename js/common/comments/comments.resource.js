angular.module('comments')
	.factory('CommentsResource', function ($resource) {
		'use strict';
		
		return $resource('http://localhost:3000/comments/:id', null,
			{
				update: { method:'PUT' },
				'query':  {method:'GET', isArray:true}
			}
		);
});

	
