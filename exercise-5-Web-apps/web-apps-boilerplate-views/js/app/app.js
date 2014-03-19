define([
	'app/views/app',
	'app/routers/router'
	],function(AppView,Router){
		'use strict';

		var initialize = function(){
			var appview = new AppView();
			$('body').append(appview.el);
			var router = new Router(appview);
			Backbone.history.start(); //initialize process of monitoring the URL
			};

		return{
			initialize:initialize,
		
		}
	});