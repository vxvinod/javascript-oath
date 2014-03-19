define([
	'app/views/app'
	],function(AppView){
		'use strict';

		var initialize = function(){
			var appview = new AppView();
			$('body').append(appview.el);
			};

		return{
			initialize:initialize,
		
		}
	});