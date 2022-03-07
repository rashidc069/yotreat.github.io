$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll>500){
			$("nav").css("background","#fdca00");
		}
		else {
			$("nav").css("background","transparent");
		}
	})
})