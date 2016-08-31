$(document).ready(function(){

/* ===== Boxes section ===== */

/*
- Display animated gif on hover on bigger screens by changing src path kept in data attributes
- Display static jpg on small screens by changing src path kept in data attributes
*/ 
if (window.matchMedia("(min-width: 768px)").matches) {
	$(function(){
		$('.boxes .box-wrap img').hover(
		  function() {
		    $(this).attr('src', $(this).attr('data-anime'));
		  }, function() {
		    $(this).attr('src', $(this).attr('data-static'));
		  }
		);
	});
};


});

