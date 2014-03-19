define([
	
],function(){
	'use strict';

	var isNumber = function(cel){
		return !isNaN(parseFloat(cel)) && isFinite(cel);
	}

	var celciusToFahrenheit=function(cel){
		if(!isNumber(cel)){
			return null;
		}

		var fahr = cel * 9/5 +32 ;
		return fahr;
	};

	return {celciusToFahrenheit:celciusToFahrenheit}

});