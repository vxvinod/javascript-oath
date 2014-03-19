(function(){

var choices=['rock','paper','scissor']; //collect items in a array
var user_choice;
var comp_choice;
$('.but').on('click',getInput); 

function getInput(){
	user_choice = this.id; //getting user choice from attribute
	comp_choice= choices[Math.floor(Math.random()*3)]; //getting computer choice
	console.log(user_choice);
	console.log(comp_choice);

	$('.left').hide(); //hiding the items
	$('.right').hide(); //hiding the items
	$('.hand').show(); //showing the hand

	countTimer();
}

function countTimer(){
	$('.player').addClass('shake');
	var count=3; //initializing the counter
	counter();

	function counter(){
		$('#result').text(""); 
		$('#result').text(count); //displaying like timer
		console.log(count);
		count=count-1;

		if(count==0){
			displayResult(); 
		}else{
			setTimeout(counter,500);
		}
	}
}

function displayResult(){
	$('.player').removeClass('shake');
	$('.hand').hide();
	$('#left-'+comp_choice).show(); //display the computer choice image
	$('#right-'+ user_choice).show();//display the user choice image

	setTimeout(function(){
		if (user_choice== comp_choice){
			$('#result').text("TIE"); //if both are same result is tie
		}else if((user_choice=='scissor' && comp_choice=='paper')||(user_choice=='paper' && comp_choice=='rock')||(user_choice=='rock' && comp_choice=='scissor')) {
			$('#result').text("You Win"); //you win
		}else {
			$('#result').text("You Lose");
		}
	},500);

}


})();