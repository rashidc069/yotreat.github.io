$(document).ready(function(){
	
	//get the header height
	var headerHeight = $('nav').outerHeight();

	$('.nav-link').click(function(e){
		
		var linkHref = $(this).attr('href');
		 // console.log($(linkHref).offset().top);
		
		// console.log(headerHeight);

		$('html,body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight
		}, 1000);

		e.preventDefault();
	});

	$('nav-lnk').click(function(e){
		var linkHref = $(this).attr()
	})
});