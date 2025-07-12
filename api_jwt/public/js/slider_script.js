var swiper1 = new Swiper(".main_slider_box", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",

    },
    spaceBetween: 10,
  });

  // fast slide 
  var swiper2 = new Swiper(".pro_slider", {

    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      377: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 6,
      }

    }
  });
  // campain_s
  var swiper3 = new Swiper(".campain_s", {
    slidesPerView: 1,
    spaceBetween: 20,
  });

  var swiper = new Swiper(".sold_out_s", {
    slidesPerView: 4,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      377: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }

    }
  });
  // var swiper = new Swiper(".winners", {
  //   slidesPerView: 5,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   spaceBetween: 30,
  // });

  var swiper = new Swiper(".winners", {
    slidesPerView: 4,
    loop:true,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      377: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }

    }
  });