$(document).ready(function(){
	// slide top page
	let optionSlide = {
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 3,
		dots: true,
		infinite: true,
		 variableWidth: true,
		 nextArrow: $('.js-slide1Next'),
		 prevArrow:  $('.js-slide1Prev'),
	};
	$('.js-slide1').slick(optionSlide);
})
