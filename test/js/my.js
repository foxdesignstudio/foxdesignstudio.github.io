$(document).ready(function(){
	//появление окна благодарности за заявку, проверка чекбокса, и закрытие окна
	$('.button_pop-up').click(function(){
		if( $('.form__checkbox').is( ":checked" )) {
			$('.pop-up').addClass('ready');
			setTimeout(function(){
				$(".pop-up").removeClass('ready')
				$('.window').removeClass('active')
			}, 1000);
		}
	})
	//маска телефона для инпута
	$('.art-stranger').mask('+7 (999) 999-99-99');

	$.fn.setCursorPosition = function(pos) {
	  if ($(this).get(0).setSelectionRange) {
	    $(this).get(0).setSelectionRange(pos, pos);
	  } else if ($(this).get(0).createTextRange) {
	    var range = $(this).get(0).createTextRange();
	    range.collapse(true);
	    range.moveEnd('character', pos);
	    range.moveStart('character', pos);
	    range.select();
	  }
	};

	$('input[type="tel"]').click(function(){
		$(this).setCursorPosition(4);  // set position number
	});
	//появление поп-ап окна обратной связи
	$('.phone__link').click(function(){
		$('.window').addClass('active');
	})
	//крестик закрытия поп-ап окна
	$('.closeCross__pop-up').click(function(){
		$('.window').removeClass('active');
	})
	//появление яндекс-карты при ховере на пункте меню
	$('.mapView').hover(
	   function(){ $('.map').addClass('visibleOn') },
	   function(){ $('.map').removeClass('visibleOn') }
	);
	//увеличение яндекс-карты на весь экран
	$('.mapView').click(function(){
		$('.map').addClass('visibleBig');
	})
	//крестик закрытия яндекс-карты
	$('.exit').click(function(){
		$('.map').removeClass('visibleBig');
	})
	//фиксация хидера для моб.версии
    window.addEventListener('scroll', function () {
	    let header = document.querySelector('header');
	    let windowPosition = window.scrollY > 0;
	    header.classList.toggle('onTop', windowPosition);
    });
    //мобильное меню
	$('.menuMobile__button').click(function(){
		$('.menu').toggleClass('active');
	})
});