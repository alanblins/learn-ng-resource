angular.module('comments')
	.factory('CommentsService', function ($resource,CommentsResource) {
		'use strict';

		return{
			listAll:function(){
				return CommentsResource.query().$promise;
			}
		}
});

	
