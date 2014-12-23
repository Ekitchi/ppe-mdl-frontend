/**
 * @author Alessio
 */

(function($) {

	$('.carousel').owlCarousel({
		items : 1,
		loop : true,
		autoplay : true,
		autoplayTimeout : 4250,
		autoplayHoverPause : true,
		margin : 30,
		nav: true,
		navSpeed: 900,
		navText: ['<i class="glyphicon glyphicon-chevron-left"></i>', '<i class="glyphicon glyphicon-chevron-right"></i>'],
		video: true,
		animateOut:"fadeOut"
	});

})(jQuery); 