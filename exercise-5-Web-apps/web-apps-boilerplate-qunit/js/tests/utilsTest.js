define([
	'app/utils'
],function(Utils){
	'use strict';
	var run = function(){
		test('Test celcius to fahrenheit calculation',function(){
			strictEqual(Utils.celciusToFahrenheit(32),89.6,'Test a number');
			strictEqual(Utils.celciusToFahrenheit('hello'),null,'Test a string');
			strictEqual(Utils.celciusToFahrenheit(),null,'Test undefined');
			strictEqual(Utils.celciusToFahrenheit(NaN),null,'Test undefined');
		});
	};

	return {run: run}
});