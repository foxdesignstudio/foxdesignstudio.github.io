$(document).ready(function(){

	$('.splash').delay(500).fadeOut('fast');

	$('.preloader').addClass('open');
	//перетаскивание мышью
	$('#dragGo').draggable({
		drag: function(event, ui) {
			var offset = $(this).offset();
			var xPos = offset.left;
			var yPos = offset.top;
			$('#posX').text('x: ' + xPos);
			$('#posY').text('y: ' + yPos);
			if(ui.position.left>0) {
				ui.position.left=0;
			}
			if(ui.position.left<-840) {
				ui.position.left=-840;
			}
			if(ui.position.top<-1120) {
				ui.position.top=-1120;
			}
			if(ui.position.top>0) {
				ui.position.top=0;
			}
		}
	});
	//сетка координат
	$('.gridTumbler').click(function(){
		$('.grid').toggleClass('gridOn');
	});
	//масштаб
	$('.scaleTumbler').click(function(){
		$('.myMap').toggleClass('scaleOn');
	});
	//тогглер рентгена
	$('#more').click(function(){
		$('.slider .indicator').toggleClass('pushed');
		$('.gallery').toggleClass('open');
	});
	//тогглер помощи
	$('#help').click(function(){
		$('.center__add').toggleClass('pushed');
		$('.help-info').toggleClass('open');
	});
	//скрипт появления/исчезновения подсказки - включи питание
	$('.fallout').click(function(){
		if($('.map__wrapper').hasClass('powerOn')){
			$('.help-desc').hide();
		}
		else{
			$('.help-desc').show();
			setTimeout(function(){
				$(".help-desc").hide()
			}, 2000);
		}
	});
	//функции кнопки питания
	$('.power__btn').click(function(){
		$('.map__wrapper').toggleClass('powerOn');
		$('.power__add').toggleClass('pushed');
		$('#tv').toggleClass('oldFashion');
		$('.indicator').toggleClass('alarm');
		$('.light.off').toggleClass('redDot');
		$('.screen').toggleClass('online');
		$('#search').toggleClass('online');
		$('.descript__wrapper').toggleClass('lockOn');
		$('.gallery').removeClass('open');
		$('.help-info').removeClass('open');
		$('.center__add').removeClass('pushed');
		$('.indicator').removeClass('pushed');
		$('#reset').click();
		reset();
	});
	//кнопка сброса
	$('#reset').click(function(){
		reset();
	});
	//функция кнопки сброса
	function reset(){
		$('.screen__content').addClass('hide');
		$('.banner').css('display','none');
		$('.search').find('input')
			.not(':button, :submit, :reset, :hidden')
			.val('')
			.removeAttr('checked')
			.removeAttr('selected');
		return false;
	}
	//отметки предметов на карте
	$(".mark").hide();
	$(".filters .button").click(function(){
		$('.button').removeClass('active');
		$(this).addClass('active');
		var get_id = this.id;
		var get_current = $("." + get_id);

		$(".mark").not(get_current).hide();
		get_current.show();
	});
	//переключатель содержимого блока помощи
	$(".content").not(".magic").hide();
	$(".help-info__button").click(function(){
		$(".help-info__selector").removeClass('hidden');
		$(".help-info__button").removeClass('active');
		$(this).addClass('active');
		var get_id = this.id;
		var get_current = $("." + get_id);

		$(".content").not(get_current).hide();
		get_current.show();
	});

	$('.downButton').click(function(){
		$('.help-info__selector').addClass('hidden')
	});
	//описание предмета на угловом экране
	$('.mark a').click(function(){
		$('.screen__content').addClass('hide');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		return false
	});
	//система возврата на главный сайт
	$('.returnal__button').click(function(){
		$(this).toggleClass('active');
		$(".returnal__wrapper").toggleClass('ready');
	});
	//рекламный баннер портфолио
	setTimeout(function () {
		$('.fox-banner').addClass('showBanner');
	}, 4000);
	setTimeout(function () {
		$('.fox-banner__exit').addClass('ready');
	}, 6000);
	setTimeout(function () {
		$('.fox-banner').removeClass('showBanner');
	}, 20000);
	$('.fox-banner__exit').click(function(){
		$('.fox-banner').removeClass('showBanner');
	});
	//тернарные выражения для системы поиска по названию
	document.getElementById('search').addEventListener('change', function () {
		var style = this.value == "Кладбище старых роботов" ? 'block' : 'none';
		document.getElementById('hidden-g1').style.display = style;
		var style = this.value == 'Разбитая "Северная звезда"' ? 'block' : 'none';
		document.getElementById('hidden-r25').style.display = style;
		var style = this.value == "Сэнкчуари" ? 'block' : 'none';
		document.getElementById('hidden-e3').style.display = style;
		var style = this.value == "Убежище 111" ? 'block' : 'none';
		document.getElementById('hidden-c2').style.display = style;
		var style = this.value == 'Хранилище лодок "Викед Шиппинг"' ? 'block' : 'none';
		document.getElementById('hidden-h6').style.display = style;
		var style = this.value == "Хижина рейнджера" ? 'block' : 'none';
		document.getElementById('hidden-g5').style.display = style;
		var style = this.value == "Болото Форест-Гроув" ? 'block' : 'none';
		document.getElementById('hidden-u16').style.display = style;
		var style = this.value == 'Форпост "Зимонджа"' ? 'block' : 'none';
		document.getElementById('hidden-l1').style.display = style;
		var style = this.value == 'Маслобойня "Парсонс"' ? 'block' : 'none';
		document.getElementById('hidden-t1').style.display = style;
		var style = this.value == 'Разведбункер Тэта' ? 'block' : 'none';
		document.getElementById('hidden-p1').style.display = style;
		var style = this.value == 'Рыбный завод "Мэхкра"' ? 'block' : 'none';
		document.getElementById('hidden-x1').style.display = style;
		var style = this.value == 'Спутниковая станция ВВС США "Оливия"' ? 'block' : 'none';
		document.getElementById('hidden-i2').style.display = style;
		var style = this.value == 'Тенпайнс-Блафф' ? 'block' : 'none';
		document.getElementById('hidden-l2').style.display = style;
		var style = this.value == 'Карьер Тикет' ? 'block' : 'none';
		document.getElementById('hidden-j3').style.display = style;
		var style = this.value == 'Дженерал Атомикс Галлериа' ? 'block' : 'none';
		document.getElementById('hidden-p3').style.display = style;
		var style = this.value == 'Радиовышка 3SM-U81' ? 'block' : 'none';
		document.getElementById('hidden-q3').style.display = style;
		var style = this.value == 'Озеро Куаннапоуитт' ? 'block' : 'none';
		document.getElementById('hidden-o2').style.display = style;
		var style = this.value == 'Линн-Вудс' ? 'block' : 'none';
		document.getElementById('hidden-t2').style.display = style;
		var style = this.value == 'Коттедж на берегу' ? 'block' : 'none';
		document.getElementById('hidden-w2').style.display = style;
		var style = this.value == 'Психиатрическая больница "Парсонс"' ? 'block' : 'none';
		document.getElementById('hidden-v3').style.display = style;
		var style = this.value == 'Дом семьи Руков' ? 'block' : 'none';
		document.getElementById('hidden-a4').style.display = style;
		var style = this.value == 'Салем' ? 'block' : 'none';
		document.getElementById('hidden-a4-2').style.display = style;
		var style = this.value == 'Стоянка грузовиков "Красная ракета"' ? 'block' : 'none';
		document.getElementById('hidden-h4').style.display = style;
		var style = this.value == 'Рейс "Скайлейнс" 1981' ? 'block' : 'none';
		document.getElementById('hidden-p4').style.display = style;
		var style = this.value == 'Дарк-Холлоу-Понд' ? 'block' : 'none';
		document.getElementById('hidden-r4').style.display = style;
		var style = this.value == 'Ферма Эбернети' ? 'block' : 'none';
		document.getElementById('hidden-h5').style.display = style;
		var style = this.value == 'Конкорд' ? 'block' : 'none';
		document.getElementById('hidden-j5').style.display = style;
		var style = this.value == 'Музей Свободы' ? 'block' : 'none';
		document.getElementById('hidden-k5').style.display = style;
		var style = this.value == 'Склад "Масс фьюжн"' ? 'block' : 'none';
		document.getElementById('hidden-s4').style.display = style;
		var style = this.value == 'Брейкхарт-Бэнкс' ? 'block' : 'none';
		document.getElementById('hidden-u4').style.display = style;
		var style = this.value == 'Музей ведьм Салема' ? 'block' : 'none';
		document.getElementById('hidden-a5').style.display = style;
		var style = this.value == 'Санаторий "Сэнди-Коувс"' ? 'block' : 'none';
		document.getElementById('hidden-b5').style.display = style;
		var style = this.value == 'Станция "Бедфорд"' ? 'block' : 'none';
		document.getElementById('hidden-n5').style.display = style;
		var style = this.value == 'Кладбище Вайлдвуда' ? 'block' : 'none';
		document.getElementById('hidden-p5').style.display = style;
		var style = this.value == 'Карст "Старая глотка"' ? 'block' : 'none';
		document.getElementById('hidden-t5').style.display = style;
		var style = this.value == 'Теплица "Гринтоп"' ? 'block' : 'none';
		document.getElementById('hidden-u5').style.display = style;
		var style = this.value == 'Потогонка' ? 'block' : 'none';
		document.getElementById('hidden-x5').style.display = style;
		var style = this.value == 'Данвичские бурильщики' ? 'block' : 'none';
		document.getElementById('hidden-z5').style.display = style;
		var style = this.value == 'Дыра Хьюго' ? 'block' : 'none';
		document.getElementById('hidden-a6').style.display = style;
		var style = this.value == 'Дом в кратере' ? 'block' : 'none';
		document.getElementById('hidden-c6').style.display = style;
		var style = this.value == 'Хижина Горски' ? 'block' : 'none';
		document.getElementById('hidden-k6').style.display = style;
		var style = this.value == 'Ресторан "Старлайт"' ? 'block' : 'none';
		document.getElementById('hidden-n6').style.display = style;
		var style = this.value == 'Гнилая свалка' ? 'block' : 'none';
		document.getElementById('hidden-p6').style.display = style;
		var style = this.value == 'Медфордская больница' ? 'block' : 'none';
		document.getElementById('hidden-t6-1').style.display = style;
		var style = this.value == 'Мальден-центр' ? 'block' : 'none';
		document.getElementById('hidden-t6-2').style.display = style;
		var style = this.value == 'Убежище 75' ? 'block' : 'none';
		document.getElementById('hidden-u6-1').style.display = style;
		var style = this.value == 'Штаб-квартира корпорации "Слокам-Джо"' ? 'block' : 'none';
		document.getElementById('hidden-u6-2').style.display = style;
		var style = this.value == 'Пост наблюдения "Браво"' ? 'block' : 'none';
		document.getElementById('hidden-w6').style.display = style;
		var style = this.value == 'Согас Айронворкс' ? 'block' : 'none';
		document.getElementById('hidden-y6').style.display = style;
		var style = this.value == 'Бостонское кладбище старых автомобилей' ? 'block' : 'none';
		document.getElementById('hidden-z6').style.display = style;
		var style = this.value == 'Маяк Кингспорта' ? 'block' : 'none';
		document.getElementById('hidden-d7').style.display = style;
		var style = this.value == 'Закусочная "Друмлин"' ? 'block' : 'none';
		document.getElementById('hidden-m7').style.display = style;
		var style = this.value == 'Мед-Тек Рисерч' ? 'block' : 'none';
		document.getElementById('hidden-v7').style.display = style;
		var style = this.value == 'Парковка в Линн-Пир' ? 'block' : 'none';
		document.getElementById('hidden-b8').style.display = style;
		var style = this.value == 'Консервный завод Большого Луковски' ? 'block' : 'none';
		document.getElementById('hidden-c8').style.display = style;
		var style = this.value == 'Уолден-понд' ? 'block' : 'none';
		document.getElementById('hidden-l8').style.display = style;
		var style = this.value == 'Супермаркет' ? 'block' : 'none';
		document.getElementById('hidden-p8').style.display = style;
		var style = this.value == 'Таинственные сосны' ? 'block' : 'none';
		document.getElementById('hidden-r8').style.display = style;
		var style = this.value == 'Альянс' ? 'block' : 'none';
		document.getElementById('hidden-t8').style.display = style;
		var style = this.value == 'Лодочный домик Таффингтона' ? 'block' : 'none';
		document.getElementById('hidden-u8').style.display = style;
		var style = this.value == 'Ферма Финча' ? 'block' : 'none';
		document.getElementById('hidden-a9').style.display = style;
		var style = this.value == 'Пирс Гибсон-Пойнт' ? 'block' : 'none';
		document.getElementById('hidden-c9').style.display = style;
		var style = this.value == 'Коммуна "Солнечные приливы"' ? 'block' : 'none';
		document.getElementById('hidden-k9').style.display = style;
		var style = this.value == 'Лексингтон' ? 'block' : 'none';
		document.getElementById('hidden-q9').style.display = style;
		var style = this.value == 'Лексингтон апартментс' ? 'block' : 'none';
		document.getElementById('hidden-r9').style.display = style;
		var style = this.value == 'Уэст-Эверетт' ? 'block' : 'none';
		document.getElementById('hidden-w9').style.display = style;
		var style = this.value == 'Релейная башня OMC-810' ? 'block' : 'none';
		document.getElementById('hidden-y9').style.display = style;
		var style = this.value == 'Тренировочная площадка Национальной гвардии' ? 'block' : 'none';
		document.getElementById('hidden-z9').style.display = style;
		var style = this.value == 'Спутниковая антенна Ревир-Бич' ? 'block' : 'none';
		document.getElementById('hidden-b10').style.display = style;
		var style = this.value == 'Гавань Риб' ? 'block' : 'none';
		document.getElementById('hidden-c10').style.display = style;
		var style = this.value == 'Особняк семьи Крупов' ? 'block' : 'none';
		document.getElementById('hidden-g10').style.display = style;
		var style = this.value == 'Часовня Наханта' ? 'block' : 'none';
		document.getElementById('hidden-h10').style.display = style;
		var style = this.value == 'Одинокая часовня' ? 'block' : 'none';
		document.getElementById('hidden-k10').style.display = style;
		var style = this.value == 'Парк Роки-Нэрроуз' ? 'block' : 'none';
		document.getElementById('hidden-p10').style.display = style;
		var style = this.value == 'Свалка братьев Джалбертов' ? 'block' : 'none';
		document.getElementById('hidden-q10').style.display = style;
		var style = this.value == 'Цех сборки машин "Корвега"' ? 'block' : 'none';
		document.getElementById('hidden-r10').style.display = style;
		var style = this.value == 'Гравий и песок' ? 'block' : 'none';
		document.getElementById('hidden-t10').style.display = style;
		var style = this.value == 'Мост имени Такера' ? 'block' : 'none';
		document.getElementById('hidden-w10').style.display = style;
		var style = this.value == 'Турбина "Посейдона" #18-F' ? 'block' : 'none';
		document.getElementById('hidden-x10').style.display = style;
		var style = this.value == 'Верфь "Айриш прайд индастриз"' ? 'block' : 'none';
		document.getElementById('hidden-y10').style.display = style;
		var style = this.value == 'Кантри-Кроссинг' ? 'block' : 'none';
		document.getElementById('hidden-a11').style.display = style;
		var style = this.value == 'Станция Ревир-Бич' ? 'block' : 'none';
		document.getElementById('hidden-d11').style.display = style;
		var style = this.value == 'Департамент шерифа Наханта' ? 'block' : 'none';
		document.getElementById('hidden-g11-1').style.display = style;
		var style = this.value == 'Верфь Наханта' ? 'block' : 'none';
		document.getElementById('hidden-g11-2').style.display = style;
		var style = this.value == 'Океанологическое общество Наханта' ? 'block' : 'none';
		document.getElementById('hidden-j11').style.display = style;
		var style = this.value == 'Федеральный продовольственный склад' ? 'block' : 'none';
		document.getElementById('hidden-m11').style.display = style;
		var style = this.value == 'Аркджет системс' ? 'block' : 'none';
		document.getElementById('hidden-o11').style.display = style;
		var style = this.value == 'Грейгарден' ? 'block' : 'none';
		document.getElementById('hidden-r11').style.display = style;
		var style = this.value == 'Уоттс Электроникс' ? 'block' : 'none';
		document.getElementById('hidden-w11').style.display = style;
		var style = this.value == 'Региональный офис БКОАНТОЛО' ? 'block' : 'none';
		document.getElementById('hidden-y11').style.display = style;
		var style = this.value == 'Либерталия' ? 'block' : 'none';
		document.getElementById('hidden-g12').style.display = style;
		var style = this.value == 'Колледж-Сквер' ? 'block' : 'none';
		document.getElementById('hidden-u12-1').style.display = style;
		var style = this.value == 'Кембриджский полицейский участок' ? 'block' : 'none';
		document.getElementById('hidden-u12-2').style.display = style;
		var style = this.value == 'Кафе студенческого городка' ? 'block' : 'none';
		document.getElementById('hidden-v12-1').style.display = style;
		var style = this.value == 'Административное здание колледжа' ? 'block' : 'none';
		document.getElementById('hidden-v12-2').style.display = style;
		var style = this.value == 'Больница "Кендалл"' ? 'block' : 'none';
		document.getElementById('hidden-w12').style.display = style;
		var style = this.value == 'Монсиньор-Плаза' ? 'block' : 'none';
		document.getElementById('hidden-y12').style.display = style;
		var style = this.value == 'Банкер-Хилл' ? 'block' : 'none';
		document.getElementById('hidden-a13').style.display = style;
		var style = this.value == 'Конститьюшн' ? 'block' : 'none';
		document.getElementById('hidden-b13').style.display = style;
		var style = this.value == 'Полицейский участок восточного Бостона' ? 'block' : 'none';
		document.getElementById('hidden-c13').style.display = style;
		var style = this.value == 'Подготовительная школа Восточного Бостона' ? 'block' : 'none';
		document.getElementById('hidden-d13').style.display = style;
		var style = this.value == 'Кайф-сити' ? 'block' : 'none';
		document.getElementById('hidden-e13').style.display = style;
		var style = this.value == 'Ретрансляционная вышка OBB-915' ? 'block' : 'none';
		document.getElementById('hidden-n13').style.display = style;
		var style = this.value == 'Пивоварня "Бинтаун"' ? 'block' : 'none';
		document.getElementById('hidden-t13').style.display = style;
		var style = this.value == 'Почтовое отделение 115' ? 'block' : 'none';
		document.getElementById('hidden-v13').style.display = style;
		var style = this.value == 'Адвокатская контора студгородка' ? 'block' : 'none';
		document.getElementById('hidden-w13').style.display = style;
		var style = this.value == 'Гринтек Дженетикс' ? 'block' : 'none';
		document.getElementById('hidden-y13-1').style.display = style;
		var style = this.value == 'Кратер в Кембридже' ? 'block' : 'none';
		document.getElementById('hidden-y13-2').style.display = style;
		var style = this.value == 'Тикондерога' ? 'block' : 'none';
		document.getElementById('hidden-z13').style.display = style;
		var style = this.value == 'Дом Кэботов' ? 'block' : 'none';
		document.getElementById('hidden-b14').style.display = style;
		var style = this.value == 'Галерея Пикмана' ? 'block' : 'none';
		document.getElementById('hidden-c14-1').style.display = style;
		var style = this.value == 'Старая Северная церковь' ? 'block' : 'none';
		document.getElementById('hidden-c14-2').style.display = style;
		var style = this.value == 'Офис продаж и обслуживания "РобКо"' ? 'block' : 'none';
		document.getElementById('hidden-e14').style.display = style;
		var style = this.value == 'Нордхаген-бич' ? 'block' : 'none';
		document.getElementById('hidden-g14').style.display = style;
		var style = this.value == 'Спутниковая антенна базы Форт-Хаген' ? 'block' : 'none';
		document.getElementById('hidden-n14').style.display = style;
		var style = this.value == 'Заправочная станция базы Форт-Хаген' ? 'block' : 'none';
		document.getElementById('hidden-p14-1').style.display = style;
		var style = this.value == 'Форт-Хаген' ? 'block' : 'none';
		document.getElementById('hidden-p14-2').style.display = style;
		var style = this.value == 'Трейлерный парк "Фидлерс Грин"' ? 'block' : 'none';
		document.getElementById('hidden-q14').style.display = style;
		var style = this.value == 'Водоочистная станция "Уэстон"' ? 'block' : 'none';
		document.getElementById('hidden-s14').style.display = style;
		var style = this.value == 'Станция "Оберленд"' ? 'block' : 'none';
		document.getElementById('hidden-u14').style.display = style;
		var style = this.value == 'Лаборатории "Кембридж Полимер"' ? 'block' : 'none';
		document.getElementById('hidden-w14').style.display = style;
		var style = this.value == 'Развалины института' ? 'block' : 'none';
		document.getElementById('hidden-x14').style.display = style;
		var style = this.value == 'Книжный магазин "Олд-Корнер"' ? 'block' : 'none';
		document.getElementById('hidden-c15-1').style.display = style;
		var style = this.value == 'Торговый центр "Хеймаркет"' ? 'block' : 'none';
		document.getElementById('hidden-c15-2').style.display = style;
		var style = this.value == 'Здание "Бостон бьюгл"' ? 'block' : 'none';
		document.getElementById('hidden-c15-3').style.display = style;
		var style = this.value == 'Здание "Масс фьюжн"' ? 'block' : 'none';
		document.getElementById('hidden-c15-4').style.display = style;
		var style = this.value == 'Садовая терраса' ? 'block' : 'none';
		document.getElementById('hidden-d15-1').style.display = style;
		var style = this.value == 'Фанелл-Холл' ? 'block' : 'none';
		document.getElementById('hidden-d15-2').style.display = style;
		var style = this.value == 'Бостонский аэропорт' ? 'block' : 'none';
		document.getElementById('hidden-f15').style.display = style;
		var style = this.value == 'Убежище мэра Бостона' ? 'block' : 'none';
		document.getElementById('hidden-o15').style.display = style;
		var style = this.value == 'Массачусетский центр переливания крови' ? 'block' : 'none';
		document.getElementById('hidden-q15').style.display = style;
		var style = this.value == 'Ретрансляционная башня 1DL-109' ? 'block' : 'none';
		document.getElementById('hidden-u15').style.display = style;
		var style = this.value == 'Разрушенный корабль "Клокот"' ? 'block' : 'none';
		document.getElementById('hidden-y15').style.display = style;
		var style = this.value == 'Бэк стрит аппарел' ? 'block' : 'none';
		document.getElementById('hidden-z15').style.display = style;
		var style = this.value == 'Корпорация "ГаллюциГен"' ? 'block' : 'none';
		document.getElementById('hidden-b16-1').style.display = style;
		var style = this.value == 'Театр "Чарльз-Вью"' ? 'block' : 'none';
		document.getElementById('hidden-b16-2').style.display = style;
		var style = this.value == 'Старое кладбище Гранари' ? 'block' : 'none';
		document.getElementById('hidden-c16-1').style.display = style;
		var style = this.value == 'Капитолий штата Массачусетс' ? 'block' : 'none';
		document.getElementById('hidden-c16-2').style.display = style;
		var style = this.value == 'Станция "Парк-стрит"' ? 'block' : 'none';
		document.getElementById('hidden-c16-3').style.display = style;
		var style = this.value == 'Региональная штаб-квартира "Волт-тек"' ? 'block' : 'none';
		document.getElementById('hidden-c16-4').style.display = style;
		var style = this.value == 'Добрососедство' ? 'block' : 'none';
		document.getElementById('hidden-d16-1').style.display = style;
		var style = this.value == 'Рухнувший переход' ? 'block' : 'none';
		document.getElementById('hidden-d16-2').style.display = style;
		var style = this.value == 'Почтовая площадь' ? 'block' : 'none';
		document.getElementById('hidden-e16').style.display = style;
		var style = this.value == 'Таможенная башня' ? 'block' : 'none';
		document.getElementById('hidden-f16').style.display = style;
		var style = this.value == 'Убежище 81' ? 'block' : 'none';
		document.getElementById('hidden-x16').style.display = style;
		var style = this.value == 'Переулок висельника' ? 'block' : 'none';
		document.getElementById('hidden-z16').style.display = style;
		var style = this.value == 'Полицейский участок #8' ? 'block' : 'none';
		document.getElementById('hidden-b17-1').style.display = style;
		var style = this.value == 'Бостонская публичная библиотека' ? 'block' : 'none';
		document.getElementById('hidden-b17-2').style.display = style;
		var style = this.value == 'Церковь Троицы' ? 'block' : 'none';
		document.getElementById('hidden-c17-1').style.display = style;
		var style = this.value == 'Тринити-тауэр' ? 'block' : 'none';
		document.getElementById('hidden-c17-2').style.display = style;
		var style = this.value == 'Убежище 114' ? 'block' : 'none';
		document.getElementById('hidden-c17-3').style.display = style;
		var style = this.value == 'Хьюбрис Комикс' ? 'block' : 'none';
		document.getElementById('hidden-c17-4').style.display = style;
		var style = this.value == 'Пруд Лебедя' ? 'block' : 'none';
		document.getElementById('hidden-d17-1').style.display = style;
		var style = this.value == 'Бостон-Коммон' ? 'block' : 'none';
		document.getElementById('hidden-d17-2').style.display = style;
		var style = this.value == 'Клуб Бойлстона' ? 'block' : 'none';
		document.getElementById('hidden-d17-3').style.display = style;
		var style = this.value == 'Боевая зона' ? 'block' : 'none';
		document.getElementById('hidden-d17-4').style.display = style;
		var style = this.value == 'Отель "Харбормастер"' ? 'block' : 'none';
		document.getElementById('hidden-f17-1').style.display = style;
		var style = this.value == 'Бар "Клевер"' ? 'block' : 'none';
		document.getElementById('hidden-f17-2').style.display = style;
		var style = this.value == 'Форт-Стронг' ? 'block' : 'none';
		document.getElementById('hidden-l17').style.display = style;
		var style = this.value == 'Резервуар Честнат-Хиллок' ? 'block' : 'none';
		document.getElementById('hidden-z17').style.display = style;
		var style = this.value == 'Жилой дом "Парквью"' ? 'block' : 'none';
		document.getElementById('hidden-a18-1').style.display = style;
		var style = this.value == 'Даймонд-сити' ? 'block' : 'none';
		document.getElementById('hidden-a18-2').style.display = style;
		var style = this.value == 'Канализация Фенс-стрит' ? 'block' : 'none';
		document.getElementById('hidden-a18-3').style.display = style;
		var style = this.value == 'Рынок Даймонд-сити' ? 'block' : 'none';
		document.getElementById('hidden-b18').style.display = style;
		var style = this.value == 'Офисное здание Дармута' ? 'block' : 'none';
		document.getElementById('hidden-c18').style.display = style;
		var style = this.value == 'Лейтон тауэрс' ? 'block' : 'none';
		document.getElementById('hidden-d18-1').style.display = style;
		var style = this.value == 'Штаб-квартира корпорации "Уилсон Атоматойз"' ? 'block' : 'none';
		document.getElementById('hidden-d18-2').style.display = style;
		var style = this.value == 'Политехническая школа Центрального Бостона' ? 'block' : 'none';
		document.getElementById('hidden-e18-1').style.display = style;
		var style = this.value == 'Станция "Медцентр"' ? 'block' : 'none';
		document.getElementById('hidden-e18-2').style.display = style;
		var style = this.value == 'Медцентр Массачусетс-Бэй' ? 'block' : 'none';
		document.getElementById('hidden-f18-1').style.display = style;
		var style = this.value == 'Домашние роботы Хестера' ? 'block' : 'none';
		document.getElementById('hidden-f18-2').style.display = style;
		var style = this.value == 'Рыбный завод "Четырехлистник"' ? 'block' : 'none';
		document.getElementById('hidden-h18').style.display = style;
		var style = this.value == 'Резервуар "Посейдона"' ? 'block' : 'none';
		document.getElementById('hidden-t18').style.display = style;
		var style = this.value == 'Станция "Масс Пайк"' ? 'block' : 'none';
		document.getElementById('hidden-v18').style.display = style;
		var style = this.value == 'Тоннель "Масс Пайк" - запад' ? 'block' : 'none';
		document.getElementById('hidden-a19').style.display = style;
		var style = this.value == 'Хозмаг' ? 'block' : 'none';
		document.getElementById('hidden-b19-1').style.display = style;
		var style = this.value == 'Центр снабжения бостонской полиции' ? 'block' : 'none';
		document.getElementById('hidden-b19-2').style.display = style;
		var style = this.value == 'Тоннель "Масс Пайк" - восток' ? 'block' : 'none';
		document.getElementById('hidden-d19').style.display = style;
		var style = this.value == 'Завод "Дженерал Атомикс"' ? 'block' : 'none';
		document.getElementById('hidden-i19').style.display = style;
		var style = this.value == 'Мотель "Сосны у дороги"' ? 'block' : 'none';
		document.getElementById('hidden-t19').style.display = style;
		var style = this.value == 'Натик-Бэнкс' ? 'block' : 'none';
		document.getElementById('hidden-u19-1').style.display = style;
		var style = this.value == 'Полицейское управление Натика' ? 'block' : 'none';
		document.getElementById('hidden-u19-2').style.display = style;
		var style = this.value == 'Озеро Кочитуате' ? 'block' : 'none';
		document.getElementById('hidden-v19').style.display = style;
		var style = this.value == 'Усадьба Вестингов' ? 'block' : 'none';
		document.getElementById('hidden-z19').style.display = style;
		var style = this.value == 'Свалка Долговязого Джона' ? 'block' : 'none';
		document.getElementById('hidden-f20').style.display = style;
		var style = this.value == 'Военный блокпост Южного Бостона' ? 'block' : 'none';
		document.getElementById('hidden-g20').style.display = style;
		var style = this.value == 'Станция "Эндрю"' ? 'block' : 'none';
		document.getElementById('hidden-h20').style.display = style;
		var style = this.value == 'Пивоварня "Гвиннет"' ? 'block' : 'none';
		document.getElementById('hidden-i20-1').style.display = style;
		var style = this.value == 'Полицейское управление южного Бостона' ? 'block' : 'none';
		document.getElementById('hidden-i20-2').style.display = style;
			var style = this.value == 'Ресторан "Гвиннет"' ? 'block' : 'none';
		document.getElementById('hidden-j20').style.display = style;
			var style = this.value == 'Замок' ? 'block' : 'none';
		document.getElementById('hidden-k20').style.display = style;
			var style = this.value == 'Место захоронения "Масс фьюжн"' ? 'block' : 'none';
		document.getElementById('hidden-x20').style.display = style;
			var style = this.value == 'Клуб любителей электроники' ? 'block' : 'none';
		document.getElementById('hidden-y20').style.display = style;
			var style = this.value == 'Пирс береговой охраны' ? 'block' : 'none';
		document.getElementById('hidden-b21').style.display = style;
			var style = this.value == 'Поместье Фэрлайн-Хилл' ? 'block' : 'none';
		document.getElementById('hidden-e21').style.display = style;
			var style = this.value == 'Релейная вышка OSC-527' ? 'block' : 'none';
		document.getElementById('hidden-f21').style.display = style;
			var style = this.value == 'Школа в южном Бостоне' ? 'block' : 'none';
		document.getElementById('hidden-j21').style.display = style;
			var style = this.value == 'Радиостанция WRVR' ? 'block' : 'none';
		document.getElementById('hidden-c22').style.display = style;
			var style = this.value == 'Причал "Эгрет-турс"' ? 'block' : 'none';
		document.getElementById('hidden-d22').style.display = style;
			var style = this.value == 'Универмаг "Фэллонс"' ? 'block' : 'none';
		document.getElementById('hidden-f22').style.display = style;
			var style = this.value == 'Школа имени Шоу' ? 'block' : 'none';
		document.getElementById('hidden-g22-1').style.display = style;
			var style = this.value == 'Станция "Уэст-Роксбери"' ? 'block' : 'none';
		document.getElementById('hidden-g22-2').style.display = style;
			var style = this.value == 'Больница "Милтон"' ? 'block' : 'none';
		document.getElementById('hidden-g22-3').style.display = style;
			var style = this.value == 'Джамейка-Плейн' ? 'block' : 'none';
		document.getElementById('hidden-i22').style.display = style;
			var style = this.value == 'Юниверсити-поинт' ? 'block' : 'none';
		document.getElementById('hidden-j22').style.display = style;
			var style = this.value == 'Спектакл-айлэнд' ? 'block' : 'none';
		document.getElementById('hidden-q22').style.display = style;
			var style = this.value == 'Парк Роботикс Пайонир' ? 'block' : 'none';
		document.getElementById('hidden-b23').style.display = style;
			var style = this.value == 'Гараж Атомных Котов' ? 'block' : 'none';
		document.getElementById('hidden-m23').style.display = style;
			var style = this.value == 'Граница Светящегося моря' ? 'block' : 'none';
		document.getElementById('hidden-c24').style.display = style;
			var style = this.value == 'Дворец металлолома' ? 'block' : 'none';
		document.getElementById('hidden-d24').style.display = style;
			var style = this.value == 'Излучина Катлера' ? 'block' : 'none';
		document.getElementById('hidden-f24').style.display = style;
			var style = this.value == 'Здание Стрелков' ? 'block' : 'none';
		document.getElementById('hidden-h24').style.display = style;
			var style = this.value == 'Гайд-Парк' ? 'block' : 'none';
		document.getElementById('hidden-j24').style.display = style;
			var style = this.value == 'Парк Непонсет' ? 'block' : 'none';
		document.getElementById('hidden-l24').style.display = style;
			var style = this.value == 'Ферма Уорвиков' ? 'block' : 'none';
		document.getElementById('hidden-q24').style.display = style;
			var style = this.value == 'Заброшенная лачуга' ? 'block' : 'none';
		document.getElementById('hidden-x24').style.display = style;
			var style = this.value == 'Частная школа округа Саффолк' ? 'block' : 'none';
		document.getElementById('hidden-k25').style.display = style;
			var style = this.value == 'Убежище 88' ? 'block' : 'none';
		document.getElementById('hidden-l25').style.display = style;
			var style = this.value == 'Руины Квинси' ? 'block' : 'none';
		document.getElementById('hidden-n25').style.display = style;
			var style = this.value == 'Разбитая "Северная звезда"' ? 'block' : 'none';
		document.getElementById('hidden-r25').style.display = style;
			var style = this.value == 'Убежище 95' ? 'block' : 'none';
		document.getElementById('hidden-e26').style.display = style;
			var style = this.value == 'Сомервилл-Плейс' ? 'block' : 'none';
		document.getElementById('hidden-g26').style.display = style;
			var style = this.value == 'Стройплощадка в Мерквотер' ? 'block' : 'none';
		document.getElementById('hidden-l26').style.display = style;
			var style = this.value == 'Завод "Уилсон Атоматойз"' ? 'block' : 'none';
		document.getElementById('hidden-n26').style.display = style;
			var style = this.value == 'Полицейский участок Квинси' ? 'block' : 'none';
		document.getElementById('hidden-o26').style.display = style;
			var style = this.value == 'Дом Пибоди' ? 'block' : 'none';
		document.getElementById('hidden-p26').style.display = style;
			var style = this.value == 'Посейдон Энерджи' ? 'block' : 'none';
		document.getElementById('hidden-q26').style.display = style;
			var style = this.value == 'Кратер Атома' ? 'block' : 'none';
		document.getElementById('hidden-d29').style.display = style;
			var style = this.value == 'Скалистая пещера' ? 'block' : 'none';
		document.getElementById('hidden-r29').style.display = style;
			var style = this.value == 'Дозорный участок' ? 'block' : 'none';
		document.getElementById('hidden-e30').style.display = style;
			var style = this.value == 'Церковь пятидесятников Хоупсмарча' ? 'block' : 'none';
		document.getElementById('hidden-e27').style.display = style;
			var style = this.value == 'Разрушенный завод' ? 'block' : 'none';
		document.getElementById('hidden-b27').style.display = style;
			var style = this.value == 'Офисы "Атлантик"' ? 'block' : 'none';
		document.getElementById('hidden-z25').style.display = style;
			var style = this.value == 'Обломки винтокрыла' ? 'block' : 'none';
		document.getElementById('hidden-f28').style.display = style;
			var style = this.value == 'Релейная башня 0DB-521' ? 'block' : 'none';
		document.getElementById('hidden-g28').style.display = style;
			var style = this.value == 'Забытая церковь' ? 'block' : 'none';
		document.getElementById('hidden-a31').style.display = style;
			var style = this.value == 'Полуразрушенный реактор' ? 'block' : 'none';
		document.getElementById('hidden-e31').style.display = style;
			var style = this.value == 'Пещера (Автозаправка «Красная Ракета»)' ? 'block' : 'none';
		document.getElementById('hidden-b26').style.display = style;
			var style = this.value == "Семейная фабрика О'Нила" ? 'block' : 'none';
		document.getElementById('hidden-w29').style.display = style;
			var style = this.value == 'Рейс "Скайлейнс" 1665' ? 'block' : 'none';
		document.getElementById('hidden-p29').style.display = style;
			var style = this.value == 'Полуразрушенный завод' ? 'block' : 'none';
		document.getElementById('hidden-k29').style.display = style;
			var style = this.value == 'Пещера (Супермаркет)' ? 'block' : 'none';
		document.getElementById('hidden-h29').style.display = style;
			var style = this.value == 'Федеральный склад 84NE' ? 'block' : 'none';
		document.getElementById('hidden-x23').style.display = style;
	});

});