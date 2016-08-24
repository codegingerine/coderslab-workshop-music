$(document).ready(function(){


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

