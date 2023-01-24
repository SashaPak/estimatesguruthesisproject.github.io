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

  $('.blog__slider').slick({
    arrows: false,
    slidesToShow: 3,
    infinite: true,
  })

  $('.blog__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.blog__slider').slick('slickPrev')
  })
  $('.blog__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.blog__slider').slick('slickNext')
  })

  $('.testimonial__slider').slick({
    arrows: false,
    slidesToShow: 2,
    infinite: true,
  })

  $('.testimonial__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonial__slider').slick('slickPrev')
  })
  $('.testimonial__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.testimonial__slider').slick('slickNext')
  })

  $('.about__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('about__acc-link--active')) {
      $(this).removeClass('about__acc-link--active')
      $(this).children('.about__acc-text').slideUp()
    } else {
      $('.about__acc-link').removeClass('about__acc-link--active')
      $('.about__acc-text').slideUp()
      $(this).addClass('about__acc-link--active')
      $(this).children('.about__acc-text').slideDown()
    }
  })
})