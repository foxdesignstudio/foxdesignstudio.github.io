$(document).ready(function(){
	window.addEventListener('scroll', function () {
		if ( $(window).width() > 1280 ) {
			let lineMod = document.querySelector('.topLine');
			let menuMod = document.querySelector('.menuWrapper');
			let windowPosition1 = window.scrollY > 526;
			let windowPosition2 = window.scrollY > 726;
			lineMod.classList.toggle('changeView', windowPosition1);
			menuMod.classList.toggle('modView', windowPosition2);
		};
	});
});

//проверка меню для стабилизации стилевых классов мобильных устройств
$(window).resize(function(){
	if($(window).width()<1280){
		$('.menuWrapper').removeClass('modView');
		$('.topLine').removeClass('changeView');
		$('.hero').removeClass('advantage');
		$('.hero__toggler').removeClass('active');
	};
});