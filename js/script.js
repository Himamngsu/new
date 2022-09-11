$(function(){
    'use strict';
    // banner part
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });
   // about
   $('.venobox').venobox();

// banner part
$('.test_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
});




/*==========screen slider=======*/

$('.screen_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    arrows: false,
  });
/*==========screen slider=======*/

 /*===========footer slider=========== */
 $('.banner_big_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.banner_small_slider',
  speed: 2000,
});
$('.banner_small_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  asNavFor: '.banner_big_slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  speed: 3000,
  autoplay: true,
});
 












});