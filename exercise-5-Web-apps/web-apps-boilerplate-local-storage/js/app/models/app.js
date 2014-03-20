define([
	'backbone',
	'backbone.localStorage'
	],function(){

		var AppModel = Backbone.Model.extend({
			localStorage: new Backbone.LocalStorage('AppSettings'),
			defaults:{
				'background-color':'#999999',
				'celcius':true,
				'welcomeMessage':'Welcome to Weather Watcher'
			}

		});

		return AppModel;
	});