$(window).load(function() {
	
})

$(document).ready(function() {

	$(".container-preview").click(function() {
		$(this).children(".info").children(".bandeau-deroulant").toggle(500);
	});


$('article').click(function(){
		$(this).children("a.link-article").addClass('active');
		$(this).siblings().children("a.link-article").removeClass('active');
	});


});






	/* DEUX ACTIONS DIFFERENTES AU CLICK 

	$(".container-preview").click(function() {
		var clicks = $(this).data('clicks');

		if (clicks){
			$(this).children(".info").children(".bandeau-deroulant").hide(500);

		} else {
			$(this).children(".info").children(".bandeau-deroulant").show(500);
		}
		$(this).data("clicks", !clicks)
	
		}); */








