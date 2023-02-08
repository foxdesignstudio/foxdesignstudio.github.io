$(document).ready(function(){
	//прелоадер
	$('.preloader').delay(3000).fadeOut();
	//рекламный баннер портфолио
	setTimeout(function () {
		$('.banner').addClass('showBanner');
	}, 4000);
	setTimeout(function () {
		$('.banner__exit').addClass('ready');
	}, 6000);
	setTimeout(function () {
		$('.banner').removeClass('showBanner');
	}, 20000);
	$('.banner__exit').click(function(){
		$('.banner').removeClass('showBanner');
	});
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
	//кнопки 'наверх/вниз' - общий враппер
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.navigation').addClass('active');
		} else
			$('.navigation').removeClass('active');
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
	//переключение цветов кухни
	$(".image-color").hide();
	$(".filters .picker").click(function(){
		let get_id = this.id;
		let get_current = $("." + get_id);

		$(".image-color").not(get_current).hide();
		get_current.show();
	});
	$(".reset").click(function(){
		$(".image-color").hide();
	});
	//кнопка прокрутки списка эскизов скинали в моб. версии
	$('.content-select').click(function(){
		$(this).toggleClass('reversal');
		$(".content-switcher").toggleClass('onside');
	});
	//блок сравнения before-after переключение миниатюр
	$('.before-slider__buttons div').click(function(){
		let block_id = this.id;
		$('.before__button').removeClass('active');
		$(this).addClass('active');
		$(".before-slider__inner").removeClass(['bap-1','bap-2','bap-3']);
		$(".before-slider__inner").addClass(block_id);
	});
	//система возврата на главный сайт
	$('.returnal__button').click(function(){
		$(this).toggleClass('active');
		$(".returnal__wrapper").toggleClass('ready');
	});

	$("before-slider__wrapper").load(function(){
		$(window).trigger("resize.twentytwenty");
	});

});