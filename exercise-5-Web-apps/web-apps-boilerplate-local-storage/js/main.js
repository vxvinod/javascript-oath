require.config({
	paths:{
		'jquery': 'libs/jquery-1.10.1.min',
		'bootstrap':'libs/bootstrap',
		'underscore':'libs/underscore',
		'backbone':'libs/backbone',
		'backbone.localStorage':'libs/backbone.localStorage'
	},

	shim: {
		'underscore':{
			exports:'_'
		},
		'backbone':{
			deps:[
				'underscore',
				'jquery'
			]
		},
		'bootstrap':{
			deps:[
				'jquery'
			]
		}
	}
});


require([
	'backbone',
	'app/app'
	],function(Backbone,App){
		'use strict';
		console.log(Backbone);
		App.initialize();
	});