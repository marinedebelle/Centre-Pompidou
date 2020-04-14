$(window).load(function() {
	
})

$(document).ready(function() {

	$(".container-preview").hover(function() {
		$(this).children(".info").children(".bandeau-deroulant").toggle(500);
	});


$('article').click(function(){
		$(this).children("a.link-article").addClass('active');
	});


	$('article#h-xs').hover(function(){
		$('article#h-xs').css({"height":"80vh"});
		$('article#h-s').css({"height":"70vh"});
		$('article#h-m').css({"height":"60vh"});
		$('article#h-l').css({"height":"50vh"});
		$('article#h-xl').css({"height":"40vh"});
		$('article#f-xs').css({"height":"40vh"});
		$('article#f-s').css({"height":"50vh"});
		$('article#f-m').css({"height":"60vh"});
		$('article#f-l').css({"height":"70vh"});
		$('article#f-xl').css({"height":"80vh"});
	});

	$('article#h-s').hover(function(){
		$('article#h-xs').css({"height":"70vh"});
		$('article#h-s').css({"height":"80vh"});
		$('article#h-m').css({"height":"60vh"});
		$('article#h-l').css({"height":"50vh"});
		$('article#h-xl').css({"height":"40vh"});
		$('article#f-xs').css({"height":"50vh"});
		$('article#f-s').css({"height":"40vh"});
		$('article#f-m').css({"height":"60vh"});
		$('article#f-l').css({"height":"70vh"});
		$('article#f-xl').css({"height":"80vh"});
	});


	$('article#h-m').hover(function(){
		$('article#h-xs').css({"height":"50vh"});
		$('article#h-s').css({"height":"60vh"});
		$('article#h-m').css({"height":"80vh"});
		$('article#h-l').css({"height":"60vh"});
		$('article#h-xl').css({"height":"50vh"});
		$('article#f-xs').css({"height":"70vh"});
		$('article#f-s').css({"height":"60vh"});
		$('article#f-m').css({"height":"40vh"});
		$('article#f-l').css({"height":"60vh"});
		$('article#f-xl').css({"height":"70vh"});
	});

	$('article#h-l').hover(function(){
		$('article#h-xs').css({"height":"40vh"});
		$('article#h-s').css({"height":"50vh"});
		$('article#h-m').css({"height":"60vh"});
		$('article#h-l').css({"height":"80vh"});
		$('article#h-xl').css({"height":"70vh"});
		$('article#f-xs').css({"height":"80vh"});
		$('article#f-s').css({"height":"70vh"});
		$('article#f-m').css({"height":"60vh"});
		$('article#f-l').css({"height":"40vh"});
		$('article#f-xl').css({"height":"50vh"});
	});

	$('article#h-xl').hover(function(){
		$('article#h-xs').css({"height":"40vh"});
		$('article#h-s').css({"height":"50vh"});
		$('article#h-m').css({"height":"60vh"});
		$('article#h-l').css({"height":"70vh"});
		$('article#h-xl').css({"height":"80vh"});
		$('article#f-xs').css({"height":"80vh"});
		$('article#f-s').css({"height":"70vh"});
		$('article#f-m').css({"height":"60vh"});
		$('article#f-l').css({"height":"50vh"});
		$('article#f-xl').css({"height":"40vh"});
	});

	$('article#f-xl').hover(function(){
		$('article#h-xs').css({"height":"80vh"});
		$('article#h-s').css({"height":"70vh"});
		$('article#h-m').css({"height":"60vh"});
		$('article#h-l').css({"height":"50vh"});
		$('article#h-xl').css({"height":"40vh"});
		$('article#f-xs').css({"height":"40vh"});
		$('article#f-s').css({"height":"50vh"});
		$('article#f-m').css({"height":"60vh"});
		$('article#f-l').css({"height":"70vh"});
		$('article#f-xl').css({"height":"80vh"});
	});

	$('article#f-l').hover(function(){
		$('article#h-xs').css({"height":"70vh"});
		$('article#h-s').css({"height":"60vh"});
		$('article#h-m').css({"height":"50vh"});
		$('article#h-l').css({"height":"40vh"});
		$('article#h-xl').css({"height":"50vh"});
		$('article#f-xs').css({"height":"50vh"});
		$('article#f-s').css({"height":"60vh"});
		$('article#f-m').css({"height":"70vh"});
		$('article#f-l').css({"height":"80vh"});
		$('article#f-xl').css({"height":"70vh"});
	});

	$('article#f-m').hover(function(){
		$('article#h-xs').css({"height":"70vh"});
		$('article#h-s').css({"height":"60vh"});
		$('article#h-m').css({"height":"41vh"});
		$('article#h-l').css({"height":"60vh"});
		$('article#h-xl').css({"height":"70vh"});
		$('article#f-xs').css({"height":"50vh"});
		$('article#f-s').css({"height":"60vh"});
		$('article#f-m').css({"height":"80vh"});
		$('article#f-l').css({"height":"60vh"});
		$('article#f-xl').css({"height":"50vh"});
	});

	$('article#f-s').hover(function(){
		$('article#h-xs').css({"height":"50vh"});
		$('article#h-s').css({"height":"40vh"});
		$('article#h-m').css({"height":"60vh"});
		$('article#h-l').css({"height":"70vh"});
		$('article#h-xl').css({"height":"80vh"});
		$('article#f-xs').css({"height":"70vh"});
		$('article#f-s').css({"height":"80vh"});
		$('article#f-m').css({"height":"60vh"});
		$('article#f-l').css({"height":"50vh"});
		$('article#f-xl').css({"height":"40vh"});
	});

	$('article#f-xs').hover(function(){
		$('article#h-xs').css({"height":"40vh"});
		$('article#h-s').css({"height":"50vh"});
		$('article#h-m').css({"height":"60vh"});
		$('article#h-l').css({"height":"70vh"});
		$('article#h-xl').css({"height":"80vh"});
		$('article#f-xs').css({"height":"80vh"});
		$('article#f-s').css({"height":"70vh"});
		$('article#f-m').css({"height":"60vh"});
		$('article#f-l').css({"height":"50vh"});
		$('article#f-xl').css({"height":"40vh"});
	});


	$('header').click(function(){
		$('article#h-xs').css({"height":"40vh"});
		$('article#h-s').css({"height":"50vh"});
		$('article#h-m').css({"height":"60vh"});
		$('article#h-l').css({"height":"70vh"});
		$('article#h-xl').css({"height":"80vh"});
		$('article#f-xs').css({"height":"80vh"});
		$('article#f-s').css({"height":"70vh"});
		$('article#f-m').css({"height":"60vh"});
		$('article#f-l').css({"height":"50vh"});
		$('article#f-xl').css({"height":"40vh"});
	});

var x = window.matchMedia("(max-width: 700px)")

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





});




