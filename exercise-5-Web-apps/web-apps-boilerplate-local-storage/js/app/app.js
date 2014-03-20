define([
	'app/views/app',
	'app/routers/router',
	'app/models/app',
	'app/collections/days',
	'app/collections/places'
	],function(AppView,Router,AppModel,DaysCollection,PlacesCollection){
		'use strict';

		var initialize = function(){
			var appmodel = new AppModel({id:1});
			var appview = new AppView({model: appmodel});
			$('body').append(appview.render().el);
			var router = new Router(appview);
			Backbone.history.start(); //initialize process of monitoring the URL
			var placesCollection = new PlacesCollection([]);
			placesCollection.fetch();
			window.debug={
				settings: appmodel,
				places:placesCollection
			}
			/*var dayscollection = new DaysCollection([],{
				url:'http://api.wunderground.com/api/1b5c3edeeed3f88b/forecast/q/IT/Magenta.json'
			});

			dayscollection.fetch({
				success:function(collection,response,options){
					console.log(collection,response);
				},
				error:function(collection,response,options){
					console.log('error');
				}
			});*/
			};

		return{
			initialize:initialize
			}
	});