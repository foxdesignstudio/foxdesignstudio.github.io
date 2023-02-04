//проверка меню для стабилизации стилевых классов мобильных устройств
$(window).resize(function(){
	if($(window).width()<1280){
		$('.menuWrapper').removeClass('modView');
		$('.topLine').removeClass('changeView');
	};
});

$(window).resize(function(){
	if($(window).width()>1280){
		$('.menuWrapper').addClass('modView');
		$('.topLine').addClass('changeView');
	};
});

$(document).ready(function(){
	if($(window).width()<1280){
		$('.menuWrapper').removeClass('modView');
		$('.topLine').removeClass('changeView');
	};
});