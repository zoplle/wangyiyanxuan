/* eslint-disable */

$(function() {
	var scrollTop;
	$(window).scroll(function() {
		scrollTop = $(window).scrollTop();
		if(scrollTop > 180) {
			$('#nav-tab').addClass('tab-fixed');
		} else {
			$('#nav-tab').removeClass('tab-fixed');
		}
	});

	$('#focus-slick').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		changeSlideByHoverOnDots: false,
		dots: true,
		fade: false,
		mobileFirst: true,
		speed: 500,
		waitForAnimate: true
	})

	$('#comment-slick').slick({
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 4,
  		accessibility: false,
  		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		fade: false,
		mobileFirst: true,
		speed: 500,
		waitForAnimate: true
	})

	$('#slick-left').click(function() {
		$('#comment-slick').slick('slickPrev');
	});

	$('#slick-right').click(function() {
		$('#comment-slick').slick('slickNext');
	});
});