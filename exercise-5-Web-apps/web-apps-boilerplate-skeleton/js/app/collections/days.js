define([
	'backbone',
	'app/models/day'
],function(Backbone,DayModel){
	'use strict';

	var DaysCollection = Backbone.Collection.extend({
		//url: 'http://api.wunderground.com',
		initialize: function(collection, options) {
		this.url = options.url;
		},
		model:DayModel,
		sync:function(method,model,options){
			options.timeout = 8000;
			options.dataType="jsonp";
			return Backbone.sync(method,model,options);
		},
		parse:function(response){
			return response.forecast.simpleforecast.forecastday;
		}
	});

	return DaysCollection;
});