define([
	'backbone'
	],function(){

		var AppModel = Backbone.Model.extend({
			defaults:{
				'background-color':'#999999',
				'celcius':true,
				'welcomeMessage':'Welcome to Weather Watcher'
			}

		});

		return AppModel;
	});