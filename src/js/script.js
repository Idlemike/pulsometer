$(document).ready(function () {
/*	$('.carousel__inner').slick({
		speed: 1200,
		/!*		adaptiveHeight: true,*!/
		/!*		autoplay: true,
				autoplaySpeed: 2000,*!/
		
		/!*		fade: true,
				cssEase: 'linear',*!/
		prevArrow: '<button type="button" class="slick-prev"><img src="./icons/left.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="./icons/right.svg"' +
		' alt=""></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: true,
					arrows: false,
				},
			}
		]
	});*/
	
	$(function() {
		
		$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
			$(this)
				.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
				.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		});
		
	});
	
	
	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		})
	}
	// /!*реализация ссылки ПОДРОБНО*!/
	toggleSlide('.catalog-item__link');
	// /!*реализация ссылки НАЗАД*!/
	toggleSlide('.catalog-item__back');
	
	// Modal
	
	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow')
	});
	
	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	});
	
	//validation
	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: "required",
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите свое имя",
					minlength: jQuery.validator.format("Введите {0} символа")
				},
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
					required: "Пожалуйста, введите свою почту",
					email: "Неправильно введен адрес почты"
				}
			},
		});
	}
	validateForms('#consultation form');
	validateForms('#order form');
	validateForms('#consultation-form');
	
	$('input[name=phone]').mask("+7 (999) 999-99-99");
	
	// ОТПРАВКА ПИСЕМ
	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function () {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');
			$('form').trigger('reset');
		});
		return false;
	});
	
	// SMOOTH SCROLL AND PAGEUP
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});
	// SMOOTH SCROLL
	$("a[href^='#up']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

});

const slider = tns({
	container: '.carousel__inner',
	controls: false,
	items: 1,
	slideBy: 'page',
	autoplay: false,
	nav: false,
});
document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});

/*(function($) {
	$(function() {
		
		$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
			$(this)
				.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
				.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		});
		
	});

	
	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		})
	}
	/!*реализация ссылки ПОДРОБНО*!/
	toggleSlide('.catalog-item__link');
	/!*реализация ссылки НАЗАД*!/
	toggleSlide('.catalog-item__back');
	
	// Modal
	
	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow')
	});
	
	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	});
	//validation
	$('#consultation form').validate();
	$('#order form').validate();
	$('#consultation-form').validate();
})(jQuery);*/
