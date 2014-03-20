define([
	'backbone',
	'app/models/place'
	],function(Backbone,PlaceModel){
		'use strict';
		var PlaceCollection = Backbone.Collection.extend({
			localStorage: new Backbone.LocalStorage('places'),
			model:PlaceModel
		});
		return PlaceCollection;
	});