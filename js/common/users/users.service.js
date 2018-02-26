angular.module('users')
	.factory('UsersService', function ($resource,UsersResource) {
		'use strict';
			
		return{
			listAll:function(){
				return UsersResource.query().$promise;
			},
			listItems:function(){
				var that = this
				return this.listAll().then(function(users){
					return that.addDescriptionColumn(users);;
				});
			},
			addDescriptionColumn: function(users){
				var that = this;
				return users.map(function (user){
					const item = Object.assign({}, user);
					item.description = that.getDescription(user);
					return item;
				});
			},
			getDescription: function(user){
				var he_she = '';
				if(user.genre == 'F'){
					he_she = 'She';
				}else{
					he_she = 'He';
				}
	
				var age_description = "";
				if(user.age>=21){
					age_description = " is adult";
				}else{
					age_description = " is not adult";
				}
	
				return he_she+age_description;
			}

		}
			
			
	});

	
