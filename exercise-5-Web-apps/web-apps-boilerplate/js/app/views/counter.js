define([
	'jquery',
	'underscore',
	'backbone'
	],function($,_,Backbone){

		var counterview = Backbone.View.extend({
			count: 0,

			events:{
				'click span':'counter',
				'click strong':'removeView'
			},

			initialize: function(){

			},

			render:function(){
				var html = "<h2>This view is <span>clicked</span> "+this.count+" times <strong>Remove</strong>";
				this.$el.html(html);
				return this;
			},

			removeView:function(){
				this.remove();
			},

			counter:function(){
				this.count++;
				this.render();
			}

		});

		return counterview;

	});