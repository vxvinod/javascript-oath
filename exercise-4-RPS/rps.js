(function(){

var choices=['rock','paper','scissor'];
var user_choice;
var comp_choice;
$('.but').on('click',getInput);

function getInput(){
	user_choice = this.id;
	comp_choice= choices[Math.floor(Math.random()*3)];
	console.log(user_choice);
	console.log(comp_choice);

	$('.left').hide();
	$('.right').hide();
	$('.hand').show();

	countTimer();
}

function countTimer(){
	$('.player').addClass('shake');
	var count=3;
	counter();

	function counter(){
		$('#result').text("");
		$('#result').text(count);
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
	$('#left-'+comp_choice).show();
	$('#right-'+ user_choice).show();

	setTimeout(function(){
		if (user_choice== comp_choice){
			$('#result').text("TIE");
		}else if((user_choice=='scissor' && comp_choice=='paper')||(user_choice=='paper' && comp_choice=='rock')||(user_choice=='rock' && comp_choice=='scissor')) {
			$('#result').text("You Win");
		}else {
			$('#result').text("You Lose");
		}
	},500);

}


})();