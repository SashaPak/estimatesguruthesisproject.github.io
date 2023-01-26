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
    responsive:
      [
        {
          breakpoint: 1150,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            draggable: true,
          },
        },
      ]
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
    responsive:
      [
        {
          breakpoint: 1130,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            draggable: true,
          },
        },
      ]
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

  $(".header__nav-list a, .footer__column-link, .footer__top-logo").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 800)
  })

  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
      $('.burger').addClass('burger--follow')
    } else {
      $('.burger').removeClass('burger--follow')
    }
  }, 0)
  $('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
  })

  $('.footer__top-title--slide').on('click', function () {
    $(this).next().slideToggle()
  })

})