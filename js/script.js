$(".js-slider").slick({
  arrows: false,
  dots: true,
  autoplay: false,
  autoplaySpeed: 2500,
});

// $('.js-slider-two').slick({
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     arrows: false,
//     dots: true,
//     autoplay: false,
//     autoplaySpeed: 2500,
//   });

$(".js-slider-two").slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: false,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});



