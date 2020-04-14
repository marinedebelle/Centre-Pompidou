$(window).load(function() {
	
})

$(document).ready(function() {

	/*$(".date-1").click(function() {
		$(this).siblings(".date-deroulant").toggle(500);
		$(this).siblings(".date-deroulant").delay(200).animate({opacity:'1'});

	});*/

	$(".date-1").click(function() {
		var clicks = $(this).data('clicks');

		if (clicks){
			$(this).siblings(".display-date-deroulant").animate({opacity:'0'},"fast",function(){
				$(this).hide(500);
			});

		} else {
			$(this).siblings(".display-date-deroulant").show(500,function(){
				$(this).delay(200).animate({opacity:'1'});
			});
		}
		$(this).data("clicks", !clicks)
	
	});

	$(".date-2").click(function() {
		var clicks = $(this).data('clicks');

		if (clicks){
			$(this).siblings(".display-date-deroulant-2").animate({opacity:'0'},"fast",function(){
				$(this).hide(500);
			});

		} else {
			$(this).siblings(".display-date-deroulant-2").show(500,function(){
				$(this).delay(200).animate({opacity:'1'});
			});
		}
		$(this).data("clicks", !clicks)
	
	});

	$(".date-3").click(function() {
		var clicks = $(this).data('clicks');

		if (clicks){
			$(this).siblings(".display-date-deroulant-3").animate({opacity:'0'},"fast",function(){
				$(this).hide(500);
			});

		} else {
			$(this).siblings(".display-date-deroulant-3").show(500,function(){
				$(this).delay(200).animate({opacity:'1'});
			});
		}
		$(this).data("clicks", !clicks)
	
	});

	$(".date-4").click(function() {
		var clicks = $(this).data('clicks');

		if (clicks){
			$(this).siblings(".display-date-deroulant-4").animate({opacity:'0'},"fast",function(){
				$(this).hide(500);
			});

		} else {
			$(this).siblings(".display-date-deroulant-4").show(500,function(){
				$(this).delay(200).animate({opacity:'1'});
			});
		}
		$(this).data("clicks", !clicks)
	
	});

});