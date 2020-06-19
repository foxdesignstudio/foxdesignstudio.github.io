$(document).ready(function() {
  //отключение прелоадера    
  $('.preloader').delay(1800).fadeOut();
  //уменьшение треугольника возврата на главный сайт
  setTimeout(function () {
    $('.homeworld__triangle').removeClass('hi-homeworld');
  }, 6000);
  setTimeout(function () {
    $('.homeworld__title').css('visibility','hidden');
  }, 7000);  
  //скрипт работы кнопок категорий услуг 
  $(".mc_item_wrap ul").each(function() {
    $(this).after("<div class='mc_item_wrap_af'></div>");  //эта часть отвечает за появление треугольника//
  });
  $(".mc_toggle").click(function() {
    if ($(this).parent().parent().children("ul").is(":visible")) {		//при клике по .mc_toggle /шаг назад к родителю/еще шаг/дочерний ul если имеет статус видимый
      $(this).parent().parent().children("ul").slideUp();				//этот /шаг назад/шаг назад/дочерний ul исчезает скользя вверх
      $(this).parent().parent().children(".mc_item_wrap_af").hide();	//этот /шаг назад/шаг назад/.mc_item_wrap_af исчезает 
    }
    else {
      $("body .mc_wrap .mc_item_wrap > ul, .mc_item_wrap_af").hide();	//эти две строчки отвечают за смену фона иконки при клике
      $(".mc_item_wrap").removeClass("active");						//убирает класс .active со всех кроме нажатой чтобы все кнопки не стали серыми 
      $(this).parent().parent().addClass("active");
      $(this).parent().parent().children("ul").slideDown();
      $(this).parent().parent().children(".mc_item_wrap_af").show();
    }
  });
  //вкл/выкл меню услуг
	$(".menu_button").click(function(){
		$(".main_cats").slideToggle();
	});
  //вкл/выкл меню навигации
	$(".burger").click(function(){
		$(".burger").toggleClass("close");
		$("#menu").slideToggle();
	});

  var $grid = $('.grid').imagesLoaded(function() {
      // init Masonry after all images have loaded
      $grid.masonry({
          // options
          itemSelector: '.grid-item',
          columnWidth: '.grid-item',
          percentPosition: true  
      });
  });
  //слайдер логотипов партнеров компании
  $('.partners').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3500, /*3500*/
    smartSpeed: 2500, /*2500*/
    autoplayHoverPause: true,
    loop: true,
    dots: false,
    items: 4,
    nav: true,
    navText: ['<i class="fas fa-caret-left"></i>', '<i class="fas fa-caret-right"></i>'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      992: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
  //появление кнопки наверх при скролле больше чем одной страницы
  $(window).scroll(function () {
    if ($(this).scrollTop() > $(this).height()) {
      $('.restart').addClass('vis');
    } else
      $('.restart').removeClass('vis');
  });

});