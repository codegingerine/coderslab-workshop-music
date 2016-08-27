$(document).ready(function(){

/* ===== Boxes section ===== */

/*
- display animated gif on hover on bigger screens by changing url kept in data attributes
- display static jpg on small screens
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

