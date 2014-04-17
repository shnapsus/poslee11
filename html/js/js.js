$(document).ready(function(){


	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				title: "Bubble",
				m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
				oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
			});
		},
		swfPath: "/js",
		supplied: "m4a, oga"
	});

	$('.show__more').click(function () {
		if($(this).find('em').text()=='Подробнее'){
			$(this).parent().addClass('open');
			$(this).find('em').text('Свернуть')
		} else {
			$(this).parent().removeClass('open');
			$(this).find('em').text('Подробнее')
		}

		return false;
	});

	$('.photo__item').click(function () {
		if($(this).hasClass('cur')){
			$('.photo__item.cur').removeClass('cur');
			$('.photo__row__h').css('display', 'none');
		} else {
			$('.photo__item.cur').removeClass('cur');
			$(this).addClass('cur');
			$('.photo__row__h').css('display', 'none');
			$('.photo__row'+ $(this).attr('href')).css('display', 'block');
		}

		return false;
	});

	if($('.photo__item2').length>0){
		$(".photo__item2").fancybox({
			openEffect	: 'none',
			closeEffect	: 'none'
		});
	}

	jQuery('input[placeholder], textarea[placeholder]').placeholder();
});