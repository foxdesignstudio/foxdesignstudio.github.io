$(document).ready(function(){
	//фиксация хидера
    window.addEventListener('scroll', function () {
	    let header = document.querySelector('header');
	    let windowPosition = window.scrollY > 0;
	    header.classList.toggle('header_fixed', windowPosition);
    });
    //вызов меню моб. версии
    $('.toggler').click(function(){
    	$(this).toggleClass('toggler_active');
    	$('.menu').toggleClass('menu_active');
    })
    //запись прцентов с ползунка range в блок
    document.getElementById('range').oninput = percentGenerator;
    function percentGenerator() {
		let out = document.getElementById('percent');
		out.innerHTML = this.value+' %' ;
	}
	//плагин стилизации select
	$('select').selectize();
	//плагин анимации при скролле
	sal({
		once: false,
	});
});