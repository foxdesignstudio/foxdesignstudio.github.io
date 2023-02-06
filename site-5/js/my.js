$(document).ready(function(){

	$('.preloader').delay(3000).fadeOut('slow');

	$('.top__button').click(function(){
		$('.cover__left').addClass('welcome');
		$('.cover__right').addClass('welcome');
		$('.top__lock').addClass('opened');
		$('.left__lock').addClass('opened');
		$('.cover__top').addClass('welcome');
		setTimeout(function(){
			$(".cover").css("z-index", 0)
		}, 2600);
	});
	$('.close__button').click(function(){
		$('.cover__left').removeClass('welcome');
		$('.cover__right').removeClass('welcome');
		$('.cover__top').removeClass('welcome');
		$(".cover").css("z-index", 9)
		setTimeout(function(){
			$('.top__lock').removeClass('opened');
			$('.left__lock').removeClass('opened');
		}, 2600);
	});

	$('.hallownest__content').draggable({
		drag: function(event, ui) {
			var offset = $(this).offset();
			var xPos = offset.left;
			var yPos = offset.top;
			$('#posX').text('x: ' + xPos);
			$('#posY').text('y: ' + yPos);
			if(ui.position.left>0) {
				ui.position.left=0;
			}
			if(ui.position.left<-2020) {
				ui.position.left=-2020;
			}
			if(ui.position.top<-1420) {
				ui.position.top=-1420;
			}
			if(ui.position.top>200) {
				ui.position.top=200;
			}
		}
	});

	$('.signature__button').click(function(){
		$('.signature').addClass('active');
	});

	$('.off-button__pic').click(function(){
		$('.signature').removeClass('active');
	});

	$('.map-toggler').click(function(){
		$('.map').toggle();
		$(this).toggleClass('active');
	});
	$('.obstacles-toggler').click(function(){
		$('.hallownest__path').toggle();
		$(this).toggleClass('active');
	});
	$('.npc-toggler').click(function(){
		$('.npc').toggle();
		$(this).toggleClass('active');
	});
	$('.grubs-toggler').click(function(){
		$('.grubs').toggle();
		$(this).toggleClass('active');
	});
	$('.amulet-toggler').click(function(){
		$('.amulet').toggle();
		$(this).toggleClass('active');
	});
	$('.ore-toggler').click(function(){
		$('.ore').toggle()
		$(this).toggleClass('active');;
	});
	$('.mask-toggler').click(function(){
		$('.mask').toggle();
		$(this).toggleClass('active');
	});
	$('.loot-toggler').click(function(){
		$('.loot').toggle();
		$(this).toggleClass('active');
	});
	$('.mana-toggler').click(function(){
		$('.mana').toggle();
		$(this).toggleClass('active');
	});
	$('.boss-toggler').click(function(){
		$('.boss').toggle();
		$(this).toggleClass('active');
	});
	$('.dreamer-toggler').click(function(){
		$('.dreamer').toggle();
		$(this).toggleClass('active');
	});
	$('.rest-toggler').click(function(){
		$('.hallownest__rest').toggle();
		$(this).toggleClass('active');
	});
	$('.metro-toggler').click(function(){
		$('.hallownest__metro').toggle();
		$(this).toggleClass('active');
	});
	$('.tree-toggler').click(function(){
		$('.hallownest__tree').toggle();
		$(this).toggleClass('active');
	});
	$('.lifeblood-toggler').click(function(){
		$('.hallownest__lifeblood').toggle();
		$(this).toggleClass('active');
	});
	$('.all-toggler').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('.hallownest__lifeblood').hide();
			$('.lifeblood-toggler').removeClass('active');
			$('.hallownest__tree').hide();
			$('.tree-toggler').removeClass('active');
			$('.hallownest__metro').hide();
			$('.metro-toggler').removeClass('active');
			$('.hallownest__rest').hide();
			$('.rest-toggler').removeClass('active');
		}
		else{
			$('.hallownest__lifeblood').show();
			$('.lifeblood-toggler').addClass('active');
			$('.hallownest__tree').show();
			$('.tree-toggler').addClass('active');
			$('.hallownest__metro').show();
			$('.metro-toggler').addClass('active');
			$('.hallownest__rest').show();
			$('.rest-toggler').addClass('active');
			$(this).addClass('active');
		}
	});
	$('.reset').click(function(){
		$('.map').hide();
		$('.obstacles').hide();
		$('.npc').hide();
		$('.grubs').hide();
		$('.amulet').hide();
		$('.ore').hide();
		$('.mask').hide();
		$('.loot').hide();
		$('.mana').hide();
		$('.boss').hide();
		$('.dreamer').hide();
		$('.hallownest__rest').hide();
		$('.hallownest__metro').hide();
		$('.hallownest__tree').hide();
		$('.hallownest__lifeblood').hide();
		$('.hallownest__path').hide();
		$('.menu__button').removeClass('active');
	});
	$('.menu__switcher').click(function(){
		$('.hallownest__menu').toggleClass('closed');
	});
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

});