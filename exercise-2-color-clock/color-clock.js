(function(){

	function time(){

	var time_now = new Date();
	var hour = time_now.getHours();
	var min = time_now.getMinutes();
	var sec = time_now.getSeconds();

	var getTimeColor = function(hour,min,sec){
		
		red = Math.round(255*(hour/23)).toString(16);
		green = Math.round(255*(min/59)).toString(16);
		blue = Math.round(255*(sec/59)).toString(16);
		red = formatColor(red);
		green = formatColor(green);
		blue = formatColor(blue);
		//alert((red+green+blue).toUpperCase());
		return(red+green+blue).toUpperCase();
	}

	function formatTime(j){
		if(j<10){
			j = '0'+j;
		}
		return j;
	}

	function formatColor(k){
		if(k.length < 2){
			k = '0'+k;
		}
		return k;
	}


	var color = getTimeColor(hour,min,sec);
	hour = formatTime(hour);
	min = formatTime(min);
	sec = formatTime(sec);
	
	$('#cur_hour').text(hour);
	$('#cur_min').text(min);
	$('#cur_sec').text(sec);
	$('body').css('background-color','#'+color);
	$('#cur_color').text(color);

	t = setTimeout(function(){
		time();
	},500)
	
}	

time();


}

)();