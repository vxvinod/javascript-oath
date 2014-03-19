define([
	'jquery',
	'underscore',
	'backbone'
	],function($,_,Backbone){

		var aboutview = Backbone.View.extend({
			events:{
			
			},

			initialize: function(){

			},

			render:function(){
				var html = "<h2>About page</h2>";
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