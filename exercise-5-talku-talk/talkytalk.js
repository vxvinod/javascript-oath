(function(){
	//alert("inside");
	var advice=[ "you are loser",
				"dont do that please",
				"have fun with  yo family",
				"enjoy a lot and be happy",
				"be gangster of your knowledge not to people",
				"fight for good cause not for the above",
				"lend yo hands to society not to the above"
				]

	$('form').on('submit',function(){
		event.preventDefault();
		var text_value = $('#bad_habit').val();
		//alert(text_value);

		var change = changePronoun(text_value);
		//alert(change);
		//alert(advice[Math.floor(Math.random()*7)]);
		$('#habit-teller').text(change+" ?");
		$('#advice').text(advice[Math.floor(Math.random()*7)]);
		$('#bad_habit').val("");

	});

	function changePronoun(phrase){
		var start_With_I = phrase.substr(0,2).toUpperCase();
		var start_With_My = phrase.substr(0,3).toUpperCase();
		console.log(start_With_My);
		var newphrase = "";
		if(start_With_I == 'I '){
			newphrase = phrase.replace(/^I/gi,"you");
		}else if(start_With_My == "MY "){
			newphrase = phrase.replace(/^my/gi,"your ");
		}else{
			newphrase="You "+phrase;
		}

		return newphrase;
	};

					
})();