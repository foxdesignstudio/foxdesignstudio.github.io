$(function(){
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	$('.accordeon__head').on('click', function(){
		var e1 = $(this);
		e1.next('.accordeon__body').slideToggle();
		e1.toggleClass('open');
		return false;
	});

	$('.toggle-filter').click(function(){
		$(this).toggleClass('active');
		$('.sidebar').toggleClass('open');
		$('.box-product').toggleClass('full');
	});

	$('.toggle-menu').click(function(){
		$(this).toggleClass('active');
		$('.dropdown-content--menu').toggleClass('open');
	});

	setTimeout(function() {
	  $('.styler').styler();
	}, 100)

	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] );
			$( "#amount1" ).val( "$" + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) );
	$( "#amount1" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );

	$('.dropdown-content__title').click(function(){
		$(this).toggleClass('d-open');
	})

});