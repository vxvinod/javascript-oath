define([
	'jquery',
	'underscore',
	'backbone'
	],function($,_,Backbone){
		'use strict';
		var dashview = Backbone.View.extend({

			initialize: function(){

			},

			render:function(){
				var html = "<h2>dash page</h2>";
				this.$el.html(html);
				return this;
			}


		});

		return dashview;

	});