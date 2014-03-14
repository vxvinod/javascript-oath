(function(){
	$('.pip_4').hide(); // we are using seven dots to represent numbers ,to hide middle dot in a die
	buttonPress();

	function buttonPress(){
		$(".button").on("mousedown",function(){
			console.log("mousedown");
			//to introduce button effect - refer CSS for shadow
			$(".button").removeClass("btn_up"); 
			$(".button").addClass("btn_down");
		});

		$(".button").on("mouseup",function(){
			console.log("mouseup");
			//to introduce button effect - refer CSS for shadow
			$(".button").removeClass("btn_down");
			$(".button").addClass("btn_up");
		});
	} 

	$(".button").on("click",function(){
		$('h1').text("shake shake shake.....");
		$('h1').addClass('shake'); //to introduce shake animation we add it to h1
		$('.die_face').addClass('shake'); //introducing shake animation to diece.

		setTimeout(function(){
			var roll1 = rollTheDice('#die_1');//rolling the first die
			var roll2 = rollTheDice('#die_2'); //rolling the second die
			console.log(roll1+roll2); 
			$('h1').text(roll1+roll2); // apeending result of rolled diece.
			$('h1').removeClass('shake'); //removing the shake animation
			$('.die_face').removeClass('shake');
		},500);

		function rollTheDice(die){
			var roll = Math.floor((Math.random()*6)+1); // creating random numberes for dies
			//alert(roll);
			//assigning each dot in a die to variable so that it can be used to hide and shoe whenever needed
			var all = die+' .pip'; 
			var pip_1 = die+'_pip_1';
			var pip_2 = die+'_pip_2';
			var pip_3 = die+'_pip_3';
			var pip_4 = die+'_pip_4';
			var pip_5 = die+'_pip_5';
			var pip_6 = die+'_pip_6';
			var pip_7 = die+'_pip_7';

			if(roll==1){
				$(all).hide(); //if you get 1 ,hide all and make center dot alone visible.
				$(pip_4).show();
			}

			if(roll==2){
				//if you get 2 ,hide all and display 2nd and 6th dot.
				$(all).hide();
				$(pip_2+','+pip_6).show();
			}
				//if you get 3,hide all and display first,fourth and seventh dot alone.
			if(roll==3){
				$(all).hide();
				$(pip_1+','+pip_4+','+pip_7).show();
			}

			if(roll==4){
				//if you get 4,show all and hide second and fourth dot alone.
				$(all).show();
				$(pip_2+','+pip_4+','+pip_6).hide();
			}

			if(roll==5){
				//if you get 4,show all and hide second and sixth dot alone.
				$(all).show();
				$(pip_2+','+pip_6).hide();
			}

			if(roll==6){
				//if you get 4,show all and hide fourth dot alone.
				$(all).show();
				$(pip_4).hide();
			}
			return roll;

		}
	});

})();