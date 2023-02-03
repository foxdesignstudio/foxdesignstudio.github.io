 $(document).ready(function(){
	//проявление прелодера
	setTimeout( function(){
		$('.blind__main').addClass('open')
	}, 1000)
	setTimeout( function(){
		$('.blind__neck').addClass('open')
	}, 2000)
	setTimeout( function(){
		$('.blind__head').addClass('open')
	}, 2600)
	//отключение прелодера после загрузки
	$('.preloader').delay(4800).fadeOut('fast');
	//определение типа устройства - отключение плагина skrollr
	var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
	if (isMobile) {
	  s.destroy();
	  $('.header__wrapper').css('position','static');
	  $('.social__title').css({'right':'0', 'opacity':'1'});
	}
	//задержка появления анимированного заголовка хидера
	$('.line').delay(4000).fadeIn();
	//скрипт появления меню навигации слева при скролле
	$(window).scroll(function() {
		if ($(this).scrollTop() > 350) {
			$('.navigator').addClass('active');
		} else
			$('.navigator').removeClass('active');
	});
	//скрипт появления fab-навигации для мобильных устройств
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.fab').addClass('jump');
		} else
			$('.fab').removeClass('jump');
	});
	//раскрытие fab-меню при клике
	$('.fab').click(function(){
		$(this).toggleClass('spread');
	});
	//появление обратной связи по клику
	$('.feedback__btn').click(function(){
		$('.callback-wrapper').slideToggle();
	});
	//прокрутка вверх
	$('.toUp').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 1000);
		$('.fab').removeClass('spread');
		return false;
	});
	//фиксация заголовков ссылок меню навигации слева
	$('.navigator__link--trigger').click(function(){
		$(this).toggleClass('pin');
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
	//скрипт переключения лицевой/обратной сторон любимых банкнот
	$('.slider-selector .selector__button').click(function(){
		$(this).parent().parent().find('.slideshow__side').addClass('hide');
		$(this).siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).addClass('active');
		return false
	});
	//чередование кнопок просмотра аверса/реверса банкноты
	$('.view-a').click(function(){
		$(this).parent().find('.selector__viewer-a').removeClass('closed');
		$(this).parent().find('.selector__viewer-b').addClass('closed');
		return false
	});
	$('.view-b').click(function(){
		$(this).parent().find('.selector__viewer-a').addClass('closed');
		$(this).parent().find('.selector__viewer-b').removeClass('closed');
		return false
	});
	//система выбора сайтов портфолио для просмотра
	$('.portfolio__content a').click(function(){
		$('.portfolio__selector').addClass('active');
		var id = $(this).attr('href');
		$(id).addClass('active');
		return false
	});
	$('.portfolio__return').click(function(){
		$('.portfolio__selector').removeClass('active');
		$('.portfolio__slide').removeClass('active');
	});
	//скрипт переключения закладок слайдов превью
	$('.slide__selector a').click(function(){
		$(this).parents('.slide__left').find('.slide__content').removeClass('active');
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var id = $(this).attr('href');
		$(id).addClass('active');
		return false
	});
	//скрипт выбора правой/левой части превью
	$('.toLeft').click(function(){
		$(this).addClass('active');
		$(this).parent().find($('.toRight')).removeClass('active');
		$(this).parent().parent().addClass('preview');
	});
	$('.toRight').click(function(){
		$(this).addClass('active');
		$(this).parent().find($('.toLeft')).removeClass('active');
		$(this).parent().parent().removeClass('preview');
	});
	//исправление ошибки сдвига блока влево при ресайзе
	$(window).resize(function(){
		if($(window).width()>1000){
			$('.portfolio__slide').removeClass('preview');
			$('.toLeft').removeClass('active');
			$('.toRight').addClass('active');
		};
	});
	//скрипт отключения инфо-заглушки на мобильном превью сайта
	$('.mobile__cover').click(function(){
		$(this).addClass('unhold');
	});
	//скрипт работы мегаквадрата
	$('.megasquare__item').click(function(){
		$('.megasquare__item').removeClass('active');
		$('#background').removeClass();
		$(this).addClass('active');
	});
	$('.megasquare__reset').click(function(){
		$(this).removeClass('ready');
		$('.megasquare__item').removeClass('active');
		$('#background').removeClass();
		$(".panel").hide();
	});
	$('.megasquare').click(function(){
		if($('.megasquare__item').hasClass('active')){
			$('.megasquare__reset').addClass('ready')
		};
	});
	//кнопка вкл/выкл экрана поверх мегаквадрата
	$('.petal__trigger').click(function(){
		$(this).toggleClass('active');
		$('.panel.creator .panel__square').toggleClass('hidden');
		$('.megasquare__petal.megasquare__creator.square-2').toggleClass('hidden');
		$('.megasquare__screen').toggleClass('active');
		if($('.megasquare__screen').hasClass('active')){
			setTimeout(function() {$('.screen__wrapper').addClass('ready')}, 200)
		} else {
			$('.screen__wrapper').removeClass('ready')
		}
	});
	//скрипт работы квестора для мобильных
	$('.questor__item').click(function(){
		$(this).toggleClass('active');
	});
	//появление подсказки на левой части блока превью сайтов
	$('.slide__right').hover(
		function(){ $('.pc__preview').addClass('active')},
		function(){ $('.pc__preview').removeClass('active')}
	);
	//смена задника панели мегаквадрата
	$('.panel__square').hover(function(){
		$('#background').removeClass().addClass(
			$(this).attr('pic'));
	});
	//мегаквадрат - текстовое содержимое ячеек
	$(".panel").hide();
	$(".megasquare__item").click(function(){
		var get_id = this.id;
		var get_current = $("." + get_id);

		$(".panel").not(get_current).hide();
		get_current.show();
	});
	//прокрутка мобильного сайта в телефоне
	$('.scroll-bottom-skinali').click(function(){
		$('.mobile__wrapper.skinali .mobile__image.ui-draggable.ui-draggable-handle').css('top','-4238px');
	});
	$('.scroll-bottom-scarlet').click(function(){
		$('.mobile__wrapper.scarlet .mobile__image.ui-draggable.ui-draggable-handle').css('top','-1600px');
	});
	$('.scroll-bottom-avtoholl').click(function(){
		$('.mobile__wrapper.avtoholl .mobile__image.ui-draggable.ui-draggable-handle').css('top','-2482px');
	});
	$('.scroll-bottom-capone').click(function(){
		$('.mobile__wrapper.capone .mobile__image.ui-draggable.ui-draggable-handle').css('top','-3045px');
	});
	$('.scroll-top').click(function(){
		$('.mobile__image.ui-draggable.ui-draggable-handle').css('top','0');
	});
	$('.shutdown').click(function(){
		$(this).parent().parent().find('.mobile__cover').toggleClass('unhold');
	});
	//скрипт работы слайдера купюр в мегакубике
	document.getElementById('slider-left').onclick = sliderLeft;
	var left = 0;
	function sliderLeft() {
		var polosa = document.getElementById('sliderContent');
		var knopka1 = document.getElementById('slider-left');
		var knopka2 = document.getElementById('slider-right');
		left = left - 580;
		if (left <= 0) {
			left = 0;
			knopka1.style.background = '#ccc';
		} else {
			knopka1.style.background = '#ff9933';
			knopka2.style.background = '#ff9933';
		}
		polosa.style.left = left +'px';
	}
	document.getElementById('slider-right').onclick = sliderRight;
	function sliderRight() {
		var polosa = document.getElementById('sliderContent');
		var knopka1 = document.getElementById('slider-left');
		var knopka2 = document.getElementById('slider-right');
		left = left + 580;
		if (left >= 1160) {
			left = 1160;
			knopka2.style.background = '#ccc';
		} else {
			knopka1.style.background = '#ff9933';
			knopka2.style.background = '#ff9933';
		}
		polosa.style.left = left +'px';
	}
	//скрипт перетаскивания мышью мобильной версии превью
	$('#drag-1').draggable({
		drag: function(event, ui) {
			var offset = $(this).offset();
			var xPos = offset.left;
			var yPos = offset.top;

		$('#posX').text('x: ' + xPos);
		$('#posY').text('y: ' + yPos);

			if(ui.position.left>0) {
				ui.position.left=0;
			}
			if(ui.position.left<0) {
				ui.position.left=0;
			}
			if(ui.position.top<-4238) {
				ui.position.top=-4238;
			}
			if(ui.position.top>0) {
				ui.position.top=0;
			}
		}
	});
	$('#drag-2').draggable({
		drag: function(event, ui) {
			var offset = $(this).offset();
			var xPos = offset.left;
			var yPos = offset.top;

		$('#posX').text('x: ' + xPos);
		$('#posY').text('y: ' + yPos);

			if(ui.position.left>0) {
				ui.position.left=0;
			}
			if(ui.position.left<0) {
				ui.position.left=0;
			}
			if(ui.position.top<-2482) {
				ui.position.top=-2482;
			}
			if(ui.position.top>0) {
				ui.position.top=0;
			}
		}
	});
	$('#drag-3').draggable({
		drag: function(event, ui) {
			var offset = $(this).offset();
			var xPos = offset.left;
			var yPos = offset.top;

		$('#posX').text('x: ' + xPos);
		$('#posY').text('y: ' + yPos);

			if(ui.position.left>0) {
				ui.position.left=0;
			}
			if(ui.position.left<0) {
				ui.position.left=0;
			}
			if(ui.position.top<-1600) {
				ui.position.top=-1600;
			}
			if(ui.position.top>0) {
				ui.position.top=0;
			}
		}
	});
	$('#drag-4').draggable({
		drag: function(event, ui) {
			var offset = $(this).offset();
			var xPos = offset.left;
			var yPos = offset.top;

		$('#posX').text('x: ' + xPos);
		$('#posY').text('y: ' + yPos);

			if(ui.position.left>0) {
				ui.position.left=0;
			}
			if(ui.position.left<0) {
				ui.position.left=0;
			}
			if(ui.position.top<-3045) {
				ui.position.top=-3045;
			}
			if(ui.position.top>0) {
				ui.position.top=0;
			}
		}
	});
	//прокрутка сайта скинали в окне превью для пк
	$('#sitePreview-1').draggable({
		drag: function(event, ui) {
			var offset = $(this).offset();
			var xPos = offset.left;
			var yPos = offset.top;

		$('#posX').text('x: ' + xPos);
		$('#posY').text('y: ' + yPos);

			if(ui.position.left>0) {
				ui.position.left=0;
			}
			if(ui.position.left<0) {
				ui.position.left=0;
			}
			if(ui.position.top<-850) {
				ui.position.top=-850;
			}
			if(ui.position.top>0) {
				ui.position.top=0;
			}
		}
	});
	//прокрутка сайта 2 в окне превью для пк
	$('#sitePreview-2').draggable({
		drag: function(event, ui) {
			var offset = $(this).offset();
			var xPos = offset.left;
			var yPos = offset.top;

		$('#posX').text('x: ' + xPos);
		$('#posY').text('y: ' + yPos);

			if(ui.position.left>0) {
				ui.position.left=0;
			}
			if(ui.position.left<0) {
				ui.position.left=0;
			}
			if(ui.position.top<-250) {
				ui.position.top=-250;
			}
			if(ui.position.top>0) {
				ui.position.top=0;
			}
		}
	});
	//прокрутка сайта 3 в окне превью для пк
	$('#sitePreview-3').draggable({
		drag: function(event, ui) {
			var offset = $(this).offset();
			var xPos = offset.left;
			var yPos = offset.top;

		$('#posX').text('x: ' + xPos);
		$('#posY').text('y: ' + yPos);

			if(ui.position.left>0) {
				ui.position.left=0;
			}
			if(ui.position.left<0) {
				ui.position.left=0;
			}
			if(ui.position.top<-54) {
				ui.position.top=-54;
			}
			if(ui.position.top>0) {
				ui.position.top=0;
			}
		}
	});
	//прокрутка сайта 4 в окне превью для пк
	$('#sitePreview-4').draggable({
		drag: function(event, ui) {
			var offset = $(this).offset();
			var xPos = offset.left;
			var yPos = offset.top;

		$('#posX').text('x: ' + xPos);
		$('#posY').text('y: ' + yPos);

			if(ui.position.left>0) {
				ui.position.left=0;
			}
			if(ui.position.left<0) {
				ui.position.left=0;
			}
			if(ui.position.top<-535) {
				ui.position.top=-535;
			}
			if(ui.position.top>0) {
				ui.position.top=0;
			}
		}
	});

});