$(document).ready(function(){
	var dataBands = [],
		source = $('#leader-board-template').html(),
		template = Handlebars.compile(source), 
		wrapper = "";
		bandsArray = new Poller({frequency:15, limit:5},function(data){
			dataBands = data;
			wrapper = {objects: dataBands};
			$("#leaderBoard").hide().fadeIn(2000).html(template(wrapper));		
		});
		
	
	bandsArray.start();

})