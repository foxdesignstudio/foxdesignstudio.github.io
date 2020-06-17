$(document).ready(function(){
	//прелоадер
	$('.preloader').delay(2400).fadeOut();
	//уменьшение треугольника возврата на главный сайт
	setTimeout(function () {
		$('.homeworld__triangle').removeClass('hi-homeworld');
	}, 6000);	
	//кнопка переключения меню хидера
	const menuBtn = $('.menu-button'),
	      menu    = $('.menu');
	menuBtn.on('click', function() {
	    if ( $(this).hasClass('cross') ) {
	        $(this).removeClass('cross');
	        menu.removeClass('menu--active');
	    } else {
	        $(this).addClass('cross');
	        menu.addClass('menu--active');
	    }
	});
	$(document).click(function (e) {
	    if ( !menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
	        menu.removeClass('menu--active');
	        menuBtn.removeClass('cross');
	    };
	});
	$(".menu__item").click(function() {
		menuBtn.removeClass('cross');
		menu.removeClass('menu--active');
	});
	//кнопка 'назад'
	$(window).scroll(function () {
		if ($(this).scrollTop() > $(this).height()) {
			$('.return').addClass('active');
		} else
			$('.return').removeClass('active');
	});
	//переключение эскизов в селекторе
	$('.tabs a').click(function(){										
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parents('.content-switcher').find('.selector__item').removeClass('active');					
		var id = $(this).attr('href');	
		$(id).removeClass('hide');		
		$(this).parent().addClass('active');	
		return false 
	});
	//поп-ап окно выбора эскизов
	$('.pop').click(function(){
		$(this).parents('.site-wrapper').find('.sample').toggleClass('splash')
	});
	$('.exit').click(function(){
		$(this).parents('.site-wrapper').find('.sample').toggleClass('splash')
	});
	
});