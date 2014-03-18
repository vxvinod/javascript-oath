define([
	'jquery',
	'underscore',
	'backbone'
	],function($,_,Backbone){
		'use strict';

		var aboutview = Backbone.View.extend({
			
			initialize: function(){

			},

			render:function(){
				var html = "<h2>About page</h2>";
				this.$el.html(html);
				return this;
			}


		});

		return aboutview;

	});