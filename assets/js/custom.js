/* Theme Name: The Project - Responsive Website Template
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version: 2.0.0
 * Created:March 2015
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

(function($){
	$(document).ready(function(){

		// Notify Plugin - The below code (until line 42) is used for demonstration purposes only
		//-----------------------------------------------
		if (($(".main-navigation.onclick").length>0) && !Modernizr.touch ){
			$.notify({
				// options
				message: 'The Dropdowns of the Main Menu, are now open with click on Parent Items. Click "Home" to checkout this behavior.'
			},{
				// settings
				type: 'info',
				delay: 10000,
				offset : {
					y: 150,
					x: 20
				}
			});
		};
		if (!($(".main-navigation.animated").length>0) && !Modernizr.touch && $(".main-navigation").length>0){
			$.notify({
				// options
				message: 'The animations of main menu are disabled.'
			},{
				// settings
				type: 'info',
				delay: 10000,
				offset : {
					y: 150,
					x: 20
				}
			}); // End Notify Plugin - The above code (from line 14) is used for demonstration purposes only

		};

		$(".flip-card").flip({
			trigger: 'manual'
		});
		$('.flip-toggle').on('click', function(event) {
			$(event.target).closest(".flip-card").flip('toggle')
		});

		$('.owl-carousel.testimonial-carousel').owlCarousel({
			items: 1,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplaySpeed: 700,
			loop: true,
			nav: false,
			navText: false,
		});

		$('.owl-carousel.thought-questions-carousel').owlCarousel({
			items: 1,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplaySpeed: 700,
			loop: true,
			nav: false,
			navText: false,
			dots: false
		});

		$('.scroll-to').on('click', function(event) {
			event.stopPropagation();
			event.preventDefault();

			var scrollOffset = -72;

			$('html, body').animate({
				scrollTop: $($(event.target).attr('href')).offset().top + scrollOffset
			}, 500);

		});


	}); // End document ready
})(this.jQuery);