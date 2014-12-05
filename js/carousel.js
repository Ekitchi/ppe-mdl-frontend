/**
 * @author Alessio
 */

(function($) {

	$('.carousel').owlCarousel({
		items : 1,
		loop : true,
		autoplay : true,
		autoplayTimeout : 4000,
		autoplayHoverPause : true,
		margin : 30,
		nav: true,
		navText: ['<i class="glyphicon glyphicon-chevron-left"></i>', '<i class="glyphicon glyphicon-chevron-right"></i>'],
		smartSpeed: 900,
		video: true,
		navSpeed: 900,
		animateOut:"fadeOut"
	});

})(jQuery); 