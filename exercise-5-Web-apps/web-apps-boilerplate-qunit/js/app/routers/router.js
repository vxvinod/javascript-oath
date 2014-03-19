define([
	'jquery',
	'underscore',
	'backbone'
	],function($,_,Backbone){

		var Router = Backbone.Router.extend({
			routes:{
				'':'goToDash',
				'dash':'goToDash',
				'dash/:place':'goToDash',
				'about':'goToAbout'
			},
			initialize:function(view){
				this.appView = view;
			},
			goToDash:function(place){
				this.appView.setPage('dash');
				if(place){
					console.log(place);
					alert("weather for place "+place);
				}
			},
			goToAbout:function(){
				this.appView.setPage('about');
			}
		})

		return Router;
	})