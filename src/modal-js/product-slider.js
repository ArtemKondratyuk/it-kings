$('.products-responsive').slick({
  dots: true,
  infinite: false,
  arrows: false,
  mobileFirst: true,
  adaptiveHeight: true,
  speed: 300,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 374,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
