$(window).load(function() {
	
})

$(document).ready(function() {

	$(".container-left").click(function() {
		$(this).children(".info").children(".bandeau-deroulant").toggle(500);
	});

	$(".container-right").click(function() {
		$(this).children(".info").children(".bandeau-deroulant").toggle(500);
	});

});