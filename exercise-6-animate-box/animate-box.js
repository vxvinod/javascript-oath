(function(){

	var animations=['crawl','dangle','flip','stretch','jump'];
	$('.box').on('click',function(){
		var ths = $(this);
		var anim = animations[Math.floor(Math.random()*5)];
		console.log(anim);
		$(ths).addClass(anim);
		setTimeout(function(){
			$(ths).removeClass(anim);
		},5000);
	});
})();