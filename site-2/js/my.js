$(document).ready(function(){
	$('.preloader').delay(2100).fadeOut('slow');
	//фикс перекрытия соседних ячеек пунктов главного меню при ховере
	$('.shadow').hover(
		function(){ $(this).parent().addClass('onTop') },
		function(){ $(this).parent().removeClass('onTop') }
	);
	$('.scalable').hover(
		function(){ $(this).addClass('onTop') },
		function(){ $(this).removeClass('onTop') }
	);
	$('.topLine__btn').click(function(){
		$('.sideMenu').toggleClass('sideVisible')
	});
	$('.largeTitle').click(function(){
		$(this).parent().parent().toggleClass('active');
	})
	$('.mobileCover').click(function(){
		$(this).addClass('del');
	})
	$('.menuWrapper').hover(
		function(){ $(this).addClass('active') },
		function(){ $(this).removeClass('active') }
	);
	$('.toBack').click(function(){
		$(this).parent().parent().addClass('back-view');
	});
	$('.hero__toggler').click(function(){
		$(this).toggleClass('active');
		$('.hero').toggleClass('advantage');
	});
	$('.modalWindow__return').click(function(){
		$(this).parent().parent().removeClass('back-view');
	})
	$('.toppings__item').click(function(){
		$(this).toggleClass('active')
	})
	$('.selectStore').click(function(){
		$(this).parent().parent().toggleClass('goStore')
	})
	$('.sale').click(function(){
		$('.saleStore').toggleClass('salesOn')
	})
	$('.saleStore__close').click(function(){
		$('.saleStore').removeClass('salesOn')
	})
	const menuBtn = $('.sale'),
	      menu    = $('.saleStore');
	$(document).click(function (e) {
	    if ( !menuBtn.is(e.target) && !menu.is(e.target) && menu.has(e.target).length === 0) {
	        menu.removeClass('salesOn');
	    };
	});
	const menuBtn2 = $('.topLine__btn'),
	      menu2    = $('.sideMenu');
	$(document).click(function (e) {
	    if ( !menuBtn2.is(e.target) && !menu2.is(e.target) && menu2.has(e.target).length === 0) {
	        menu2.removeClass('sideVisible');
	    };
	});
	$('.tabs a').click(function(){
		$(this).parents('.about__wrapper').find('.tab-cont').addClass('hide');
		$(this).siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).addClass('active');
		return false
	});
	//скрипт переключения содержимого блока-трансформера
	$('.markers__item a').click(function(){
		$('.markers__link').removeClass('active');
		$(this).addClass('active');
		$('.transformer__item').removeClass('onView');
		$('.mobileCover').removeClass('del');
		var tBlock = $(this).attr('href');
		$(tBlock).addClass('onView');
		return false
	});
	//спец функция не дающая верхним кнопкам меню about обрезаться вышестоящим блоком
	$('.about__buttons.tabs').hover(
		function(){ $('.about__wrapper').addClass('layerControl') },
		function(){ $('.about__wrapper').removeClass('layerControl') }
	);
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
	//система возврата на главный сайт
	$('.returnal__button').click(function(){
		$(this).toggleClass('active');
		$(".returnal__wrapper").toggleClass('ready');
	});
	//плавающие плейсхолдеры в блоке заказа мест
	$(".hoverOn").on("focus", function(){
		$(this).addClass("focus");
	});

	$(".hoverOn").on("blur", function() {
		if($(this).val() == "")
		$(this).removeClass("focus");
	});
});
//логика магазина
//увеличение/уменьшение кол-ва товара при клике
$(function storeLogic(){
    $('.quantityMinus').click(function (){
        itemQuant(this.parentNode,-1);
        addPrice(this.parentNode.parentNode,-1);
    });
    $('.quantityPlus').click(function (){
        itemQuant(this.parentNode,1);
        addPrice(this.parentNode.parentNode,1);
    });

    function itemQuant(Obj,Val){
        Obj=$(Obj).find('.quantitySummary');
        var val=parseInt(Obj.text());
        if (val==1 && Val==-1) {
            return;
        };
        Obj.text(val+Val);
    };
    function addPrice(Obj2,Val2){
    	Obj2=$(Obj2).find('.modalWindow__price .price__number');
    	var val=parseInt(Obj2.text());
        if (val==1 && Val2==-1) {
            return;
        };
        Obj2.text(val+Val2);
    };
});
