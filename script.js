$( document ).ready(function() {


	var hamburger = $('#hamburger-icon');
	hamburger.click(function() {
	   hamburger.toggleClass('active');
	   return false;
	});


	$('#section2 ul li header').click(function(){
		$(this).next().slideToggle();
		$(this).find('span').toggleClass('open');
	})

		$('.scrollTo').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
		});


});


