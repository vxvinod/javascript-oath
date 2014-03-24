(function(){
	
	$('form').on('submit',function(e){
	e.preventDefault();
	var birthday = $('#bday').val().split('-');
	console.log(birthday[0]);
	var year = birthday[0];
	var month = (birthday[1])-1;
	var day = birthday[2];

	var today = new Date();
	todayStr=today.toDateString();
	var bday = new Date(year,month,day);

	var birthTime=$('#btime').val().split(':');
	var hour = birthTime[0];
	var min = birthTime[1];

	var btime = new Date(year,month,day,hour,min);

	console.log(bday);
	console.log(btime);

	var age = today.getFullYear()-year;
	console.log("age "+age);

	console.log(todayStr);

	if(today.getMonth()<month || (today.getMonth == month && today.getDay()<day)){
		age--;
	}
	console.log(today);
	var ageInDays=Math.floor((today-bday)/(24*60*60*1000));
	var ageInMins=Math.floor((today-btime)/(60*1000));
	console.log((today-bday)/(24*60*60*1000));
});

})();