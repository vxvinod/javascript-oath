(function(){

	generateSpots(21);

	var mousex=0,mousey=0;

	function generateSpots(value){
		for(var i=0;i<value;i++){
		var size = spotSize(3,65);
		var color = spotColor();
		//alert(size);
		//alert(color);
		$('#container').append('<div class="spot" id="spot'+i+'"></div>');
		$('#spot'+i).css({backgroundColor:color,height:size,width:size});
		}
		for(var i=0;i<21;i++){
		moveSpots('#spot'+i,spotSize(8,50));
	}
	};

	function spotSize(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	};

	function spotColor(){
		return '#'+Math.random().toString(16).slice(2,8).toUpperCase();
	};
//generate x,y 
	$(document).on('mousemove',function(e){		
		mousex = e.pageX;
		mousey = e.pageY;
	});
	

	function moveSpots(elm,speed){
		var xp = 0, yp = 0;
		var loop = setInterval(function () {
			xp += (mousex - xp) / speed;
			yp += (mousey - yp) / speed;
			$(elm).css({left:xp, top:yp});
		}, 30);
	};

})();