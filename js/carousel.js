/**
 * @author Alessio
 */

(function($) {

	$('.carousel').owlCarousel({
		items : 1,
		loop : true,
		autoplay : true,
		autoplayTimeout : 3500,
		autoplayHoverPause : true,
		animationIn : true,
		animationOut : true,
		margin : 30
	});

})(jQuery); 