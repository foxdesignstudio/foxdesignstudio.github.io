$(document).ready(function(){
	//отключение прелодера после загрузки			
	$('.preloader').delay(3000).fadeOut('slow');	
	//определение типа устройства - отключение плагина skrollr
	var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
	if (isMobile) {
	  s.destroy();
	  $('.header__wrapper').css('position','static');
	  $('.header__layer--text').css('display','none');
	  $('.dial').css('margin-top','2px');
	  $('.main').css('margin-top','2px');
	  $('.social__title').css({'right':'0', 'opacity':'1'});
	}
	//задержка появления анимированного заголовка хидера
	$('.line').delay(3200).fadeIn();
	//переключение превью сайтов
	$('.push a').click(function(){									
		$(this).parents('.sites__picture').find('.sites__picture--img').addClass('hide');
		$(this).parent().siblings().removeClass('active');				
		var id = $(this).attr('href');
		$(id).removeClass('hide');	
		$(this).parent().addClass('active');
		return false
	});
	//общий скрипт переключатель содержимого блоков по клику
	$('.click a').click(function(){									
		$(this).parents('.click-wrapper').find('.click-item').addClass('hide');
		$(this).parent().siblings().removeClass('active');				
		var id = $(this).attr('href');
		$(id).removeClass('hide');	
		$(this).parent().addClass('active');
		return false
	});
	//скрипт появления меню навигации слева при скролле
	$(window).scroll(function() {
		if ($(this).scrollTop() > 170) {
			$('.navigator').addClass('active');
		} else
			$('.navigator').removeClass('active');
	});
	//скрипт появления fab-навигации для мобильных устройств
	$(window).scroll(function () {
		if ($(this).scrollTop() > $(this).height()) {
			$('.fab').addClass('jump');
		} else
			$('.fab').removeClass('jump');
	});
	//раскрытие fab-меню при клике
	$('.fab').click(function(){
		$(this).toggleClass('spread');
		$('.cloud').toggleClass('spread');
	});
	//появление обратной связи по клику
	$('.feedback__btn').click(function(){
		$('.callback-wrapper').slideToggle();
	});
	//вкл/выкл анимированного задника сайта
	$('.small-switcher').click(function(){
		$('.particles').toggleClass('run');
	});
	//фиксация заголовков ссылок меню навигации слева
	$('.navigator__link--trigger').click(function(){
		$(this).toggleClass('pin');
	});
	//вызов меню навигации слева с фиксацией без прокрутки - по клику
	$('.small-btn').click(function(){
		$('.navigator__link--trigger').toggleClass('pin');
	});

});