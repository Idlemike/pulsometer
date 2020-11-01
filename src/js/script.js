/*$(document).ready(function () {
/!*	$('.carousel__inner').slick({
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
	});*!/



});*/

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

(function($) {
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
	/*реализация ссылки ПОДРОБНО*/
	toggleSlide('.catalog-item__link');
	/*реализация ссылки НАЗАД*/
	toggleSlide('.catalog-item__back');
	
})(jQuery);
