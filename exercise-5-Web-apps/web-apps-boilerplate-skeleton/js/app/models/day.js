define([
	'backbone',
],function(Backbone){
	'use strict';

	var DayModel = Backbone.Model.extend({
		defaults:{
			'highCelcius':null,
			'lowCelcius':null,
			'highFahrenheit':null,
			'lowFahrenheit':null,
			'icon_url':''
		}
	});

	return DayModel;
});