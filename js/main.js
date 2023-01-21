$(function () {

  $('.advantages__slider').slick({
    arrows: false,
    infinite: true,
    dots: true,
    appendDots: $('.advantages__dots'),
  })

  $('.advantages__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.advantages__slider').slick('slickPrev')
  })
  $('.advantages__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.advantages__slider').slick('slickNext')
  })

  

})