$(document).ready(function(){
	
	$(function() {		
	   $('.preloader').delay(3000).fadeOut('slow');	
	});

	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
	    skrollr.init({
	        forceHeight: false
	    });
	}

	$('.tabs a').click(function(){									
		$(this).parents('.tab-wrapper').find('.content__item').addClass('hide');
		$(this).parent().siblings().removeClass('active');				
		var id = $(this).attr('href');
		$(id).removeClass('hide');	
		$(this).parent().addClass('active');
		return false
	});

	$('.keys a').click(function(){									
		$(this).parents('.keys-wrapper').find('.sites__item').addClass('hide');
		$(this).parent().siblings().removeClass('active');				
		var id = $(this).attr('href');
		$(id).removeClass('hide');	
		$(this).parent().addClass('active');
		return false
	});

	$('.click a').click(function(){									
		$(this).parents('.sites__picture').find('.sites__picture--img').addClass('hide');
		$(this).parent().siblings().removeClass('active');				
		var id = $(this).attr('href');
		$(id).removeClass('hide');	
		$(this).parent().addClass('active');
		return false
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 170) {
			$('.navigator').addClass('active');
		} else
			$('.navigator').removeClass('active');
	});

/*	$(window).scroll(function() {
		if ($(this).scrollTop() > 170) {
			$('.fab').addClass('jump');
		} else
			$('.fab').removeClass('jump');
	});*/

	$('.feedback__btn').click(function(){
		$('.callback-wrapper').slideToggle();
	});

	$('.small-switcher').click(function(){
		$('.particles').toggleClass('run');
	});

});