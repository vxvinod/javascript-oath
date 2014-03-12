(function (){
	var animation =['shake','hop','spin','grow','hooray'];

	 function getRandomNumber(){
		var rand = Math.floor((Math.random()*4)+1);
		//alert(rand);
		return rand
	}
	$('.animal-box').on('click',function(){

		var animal = this ;
		var anim = animation[getRandomNumber()];
		$(animal).addClass(anim);

		setTimeout(function(){
			$(animal).removeClass(anim);
		},2000);
	})
})();